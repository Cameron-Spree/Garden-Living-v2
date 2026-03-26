"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Clinic() {
  const [posts, setPosts] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/clinic").then(r => r.json()).then(setPosts).catch(console.error);
  }, []);

  async function submitPost(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/clinic", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description })
    });
    if (res.ok) {
      const newP = await res.json();
      setPosts([newP, ...posts]);
      setTitle("");
      setDescription("");
    } else if (res.status === 401) {
      router.push("/login");
    }
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-4">The Plant Clinic</h1>
      <p className="text-lg text-on-surface-variant mb-12">Ask the community to diagnose your sick plants or identify mysterious sprouts.</p>

      <section className="bg-surface-container-lowest p-8 rounded-3xl mb-12 shadow-[0_10px_30px_rgba(28,28,25,0.04)] border border-surface-container-high transition-transform hover:-translate-y-1">
        <h2 className="text-2xl font-serif italic text-primary mb-6">Open a Clinic Ticket</h2>
        <form onSubmit={submitPost} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="What's wrong? (e.g. Yellowing Monstera leaves)"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            className="bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary outline-none"
          />
          <textarea 
            placeholder="Describe the problem, when it started, and your current care routine..."
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="bg-surface-container-low border-none rounded-xl px-4 py-3 min-h-[120px] resize-none focus:ring-2 focus:ring-primary outline-none"
          />
          <div className="flex justify-end mt-2">
            <button type="submit" className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold hover:opacity-90 transition-opacity">Ask the Community</button>
          </div>
        </form>
      </section>

      <div className="space-y-8">
        {posts.length === 0 ? (
           <div className="text-center py-20 text-on-surface-variant italic">The clinic is calm. No sick plants today!</div>
        ) : (
          posts.map(p => (
            <article key={p.id} className="bg-surface-container-lowest p-8 rounded-3xl shadow-[0_10px_30px_rgba(28,28,25,0.04)] border border-surface-container-high transition-transform flex gap-6">
              <div className="hidden sm:flex flex-col items-center gap-1 text-on-surface-variant font-bold">
                 <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">keyboard_arrow_up</button>
                 <span>0</span>
              </div>
              <div className="flex-1">
                <span className="bg-error-container text-on-error-container text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-3 inline-block">Diagnosis Needed</span>
                <h3 className="text-2xl font-headline font-bold text-primary mb-2 leading-tight">{p.title}</h3>
                <p className="text-on-surface-variant mb-6 leading-relaxed">{p.description}</p>
                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/20 text-sm">
                  <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-[12px] font-bold text-primary shadow-inner">{p.user?.name?.charAt(0) || '?'}</div>
                     <div>
                        <span className="font-semibold text-primary block leading-tight">{p.user?.name || "Anonymous"}</span>
                        {p.user?.hardinessZone && <span className="text-xs text-outline block">{p.user.hardinessZone}</span>}
                     </div>
                  </div>
                  <button className="text-primary font-bold hover:text-secondary transition-colors flex items-center gap-1"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> Reply</button>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
