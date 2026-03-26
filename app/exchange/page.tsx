"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Exchange() {
  const [items, setItems] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Seed");
  const router = useRouter();

  useEffect(() => {
    fetch("/api/exchange").then(r => r.json()).then(setItems).catch(console.error);
  }, []);

  async function submitListing(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/exchange", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, location, type })
    });
    if (res.ok) {
      const newItem = await res.json();
      setItems([newItem, ...items]);
      setTitle("");
      setDescription("");
      setLocation("");
    } else if (res.status === 401) {
      router.push("/login");
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <div className="flex flex-col md:flex-row justify-between md:items-end mb-12 gap-6">
         <div>
           <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-2">Local Exchange</h1>
           <p className="text-lg text-on-surface-variant max-w-lg">Trade seeds, cuttings, and fully-grown plants with gardeners in your area.</p>
         </div>
         <div className="flex gap-2 text-sm font-semibold">
            <button className="bg-primary text-on-primary px-5 py-2 rounded-full shadow-md">All Available</button>
            <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full hover:bg-surface-container-high transition-colors">Seeds</button>
            <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full hover:bg-surface-container-high transition-colors">Cuttings</button>
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-1">
          <div className="bg-secondary-fixed/30 p-8 rounded-3xl sticky top-28 shadow-sm mt-2 border border-secondary-fixed/40">
            <h2 className="text-2xl font-serif italic text-on-secondary-container mb-6">List an Item</h2>
            <form onSubmit={submitListing} className="flex flex-col gap-4">
              <input type="text" placeholder="Title (e.g. Free Tomato Seeds)" value={title} onChange={e=>setTitle(e.target.value)} required className="bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none text-sm shadow-sm"/>
              <select value={type} onChange={e=>setType(e.target.value)} className="bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none text-sm shadow-sm cursor-pointer">
                 <option value="Seed">Seeds</option>
                 <option value="Cutting">Cuttings</option>
                 <option value="Plant">Fully Grown Plant</option>
              </select>
              <input type="text" placeholder="Location City/Zip" value={location} onChange={e=>setLocation(e.target.value)} required className="bg-white border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-secondary outline-none text-sm shadow-sm"/>
              <textarea placeholder="Description and desired trade..." value={description} onChange={e=>setDescription(e.target.value)} required className="bg-white border-none rounded-xl px-4 py-3 min-h-[120px] resize-none focus:ring-2 focus:ring-secondary outline-none text-sm shadow-sm"/>
              <button type="submit" className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold mt-4 hover:opacity-90 shadow-md">Post Listing</button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
           {items.map(item => (
             <div key={item.id} className="bg-surface-container-lowest border border-outline-variant/30 rounded-3xl p-6 hover:shadow-[0_10px_30px_rgba(28,28,25,0.06)] transition-all flex flex-col hover:-translate-y-1">
                <div className="flex justify-between items-start mb-4">
                   <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">{item.type}</span>
                   <span className="text-xs text-outline font-medium flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">location_on</span> {item.location}</span>
                </div>
                <h3 className="text-xl font-headline font-bold text-primary mb-2 line-clamp-2 leading-tight">{item.title}</h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-3 leading-relaxed flex-1">{item.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-outline-variant/20 mt-auto">
                   <span className="text-sm font-bold text-primary flex items-center gap-2">
                       <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px]">{item.user?.name?.charAt(0) || 'G'}</span>
                       {item.user?.name || "Gardener"}
                   </span>
                   <button className="bg-secondary/10 text-secondary hover:bg-secondary hover:text-on-secondary px-4 py-1.5 rounded-full text-xs font-bold transition-colors">Message</button>
                </div>
             </div>
           ))}
           {items.length === 0 && (
             <div className="col-span-2 text-center py-20 text-on-surface-variant italic border-2 border-dashed border-outline-variant/50 rounded-3xl bg-surface-container-lowest/50">
               <span className="material-symbols-outlined text-5xl text-outline mb-2">swap_calls</span>
               <p>No items listed for exchange yet. Be the first to swap!</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
}
