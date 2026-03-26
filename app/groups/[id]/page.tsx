"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";

export default function GroupChat() {
  const params = useParams();
  const groupId = params.id as string;
  const [messages, setMessages] = useState<any[]>([]);
  const [content, setContent] = useState("");
  const router = useRouter();
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 5000); // 5 sec poll
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function fetchMessages() {
    try {
      const res = await fetch(`/api/groups/${groupId}/messages`);
      if (res.ok) {
         setMessages(await res.json());
      }
    } catch (e) { console.error(e); }
  }

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    
    const res = await fetch(`/api/groups/${groupId}/messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });

    if (res.ok) {
       setContent("");
       fetchMessages();
    } else if (res.status === 401) {
       router.push("/login");
    }
  }

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-140px)] flex flex-col bg-surface-container-lowest border border-outline-variant/30 rounded-3xl overflow-hidden shadow-[0_10px_30px_rgba(28,28,25,0.06)] mt-6">
      <div className="bg-surface-container p-6 border-b border-outline-variant/20 flex justify-between items-center shadow-sm z-10">
         <div>
           <h1 className="text-2xl font-headline font-bold text-primary italic font-serif">Community Chat</h1>
           <p className="text-sm text-on-surface-variant leading-relaxed">Live discussion board</p>
         </div>
         <button onClick={() => router.push("/")} className="text-outline hover:text-primary transition-colors material-symbols-outlined bg-white w-10 h-10 rounded-full shadow-sm flex items-center justify-center">close</button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[url('https://www.transparenttextures.com/patterns/rice-paper.png')] bg-surface-container-lowest/50">
         {messages.length === 0 ? (
           <div className="h-full flex flex-col items-center justify-center text-outline italic">
              <span className="material-symbols-outlined text-5xl mb-3 opacity-50">forum</span>
              <p className="font-medium text-lg text-on-surface-variant">No messages yet. Start the conversation!</p>
              <p className="text-sm">Be the first to share an update with the group.</p>
           </div>
         ) : (
           messages.map((m, i) => (
             <div key={m.id} className="flex flex-col gap-1.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="flex items-center gap-2 px-2">
                   <span className="text-xs font-bold text-primary">{m.user?.name || "Member"}</span>
                   <span className="text-[10px] text-outline font-medium tracking-wider">{new Date(m.createdAt).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                </div>
                <div className="bg-white border border-outline-variant/10 text-on-surface p-4 rounded-3xl rounded-tl-sm w-fit max-w-[85%] leading-relaxed shadow-sm">
                   {m.content}
                </div>
             </div>
           ))
         )}
         <div ref={bottomRef} />
      </div>

      <div className="p-5 bg-surface-container border-t border-outline-variant/20 z-10 shadow-[0_-10px_30px_rgba(28,28,25,0.04)]">
         <form onSubmit={sendMessage} className="flex gap-3">
            <input 
              type="text" 
              placeholder="Type your message..."
              value={content}
              onChange={e => setContent(e.target.value)}
              className="flex-1 bg-white border-none rounded-full px-6 py-4 focus:ring-2 focus:ring-primary outline-none shadow-sm transition-all text-sm"
            />
            <button type="submit" disabled={!content.trim()} className="bg-primary text-on-primary w-14 h-14 rounded-full flex items-center justify-center disabled:opacity-50 hover:bg-primary-container transition-colors shadow-md">
               <span className="material-symbols-outlined">send</span>
            </button>
         </form>
      </div>
    </div>
  );
}
