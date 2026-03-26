"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [plants, setPlants] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [savingZone, setSavingZone] = useState(false);
  const [zone, setZone] = useState("");

  const [newPlantName, setNewPlantName] = useState("");
  const [newPlantSpecies, setNewPlantSpecies] = useState("");
  const [newPlantNotes, setNewPlantNotes] = useState("");

  useEffect(() => {
    fetchProfileAndPlants();
  }, []);

  async function fetchProfileAndPlants() {
    try {
      const pRes = await fetch("/api/profile");
      if (!pRes.ok) {
        router.push("/login");
        return;
      }
      const pData = await pRes.json();
      setUser(pData);
      setZone(pData.hardinessZone || "");

      const plRes = await fetch("/api/plants");
      if (plRes.ok) {
        setPlants(await plRes.json());
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function updateZone() {
    setSavingZone(true);
    await fetch("/api/profile/zone", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hardinessZone: zone })
    });
    setSavingZone(false);
  }

  async function addPlant(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newPlantName, species: newPlantSpecies, notes: newPlantNotes })
    });
    if (res.ok) {
      const plant = await res.json();
      setPlants([plant, ...plants]);
      setNewPlantName("");
      setNewPlantSpecies("");
      setNewPlantNotes("");
    }
  }

  if (loading) return null;

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-serif text-primary italic mb-2">My Digital Greenhouse</h1>
      <p className="text-on-surface-variant mb-10">Manage your hardiness zone and track your personal plant journals.</p>

      {/* Zone Selector */}
      <section className="bg-surface-container-low rounded-2xl p-8 mb-12 shadow-sm">
        <h2 className="text-xl font-bold text-primary mb-4">Hardiness Zone</h2>
        <p className="text-sm text-on-surface-variant mb-4">Set your USDA Hardiness Zone. We'll use this to filter the community feed so you only see advice strictly relevant to your current climate.</p>
        <div className="flex items-center gap-4">
          <select 
            value={zone} 
            onChange={(e) => setZone(e.target.value)}
            className="bg-white border-none rounded-full px-6 py-3 shadow-[0_4px_12px_rgba(0,0,0,0.05)] focus:ring-2 focus:ring-primary w-48 text-on-surface outline-none cursor-pointer"
          >
            <option value="">Select Zone</option>
            {["Zone 1", "Zone 2", "Zone 3", "Zone 4", "Zone 5", "Zone 6", "Zone 7", "Zone 8", "Zone 9", "Zone 10", "Zone 11", "Zone 12"].map((z) => (
              <option key={z} value={z}>{z}</option>
            ))}
          </select>
          <button 
            onClick={updateZone}
            disabled={savingZone}
            className="bg-secondary text-on-secondary px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            {savingZone ? "Saving..." : "Save Zone"}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <div className="bg-tertiary-fixed/30 p-6 rounded-2xl sticky top-28 shadow-sm">
            <h3 className="font-bold text-primary mb-4 text-lg italic font-serif">Log a New Plant</h3>
            <form onSubmit={addPlant} className="flex flex-col gap-4">
              <input 
                type="text" 
                placeholder="Nickname (e.g. Freddie)" 
                value={newPlantName}
                onChange={e => setNewPlantName(e.target.value)}
                required
                className="w-full bg-white rounded-xl border-none shadow-sm outline-none focus:ring-2 focus:ring-primary px-4 py-3 text-sm"
              />
              <input 
                type="text" 
                placeholder="Species (e.g. Monstera)" 
                value={newPlantSpecies}
                onChange={e => setNewPlantSpecies(e.target.value)}
                required
                className="w-full bg-white rounded-xl border-none shadow-sm outline-none focus:ring-2 focus:ring-primary px-4 py-3 text-sm"
              />
              <textarea 
                placeholder="Care notes..." 
                value={newPlantNotes}
                onChange={e => setNewPlantNotes(e.target.value)}
                className="w-full bg-white rounded-xl border-none shadow-sm outline-none focus:ring-2 focus:ring-primary px-4 py-3 min-h-[100px] resize-none text-sm"
              />
              <button type="submit" className="bg-primary text-white font-bold py-3 rounded-full mt-2 hover:bg-primary-container transition-colors text-sm">
                Add to Greenhouse
              </button>
            </form>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <h3 className="text-2xl font-bold text-primary font-serif italic mb-6">Your Growing Collection</h3>
          {plants.length === 0 ? (
            <div className="p-10 border-2 border-dashed border-outline-variant/50 text-center rounded-3xl bg-surface-container-lowest/50">
              <span className="material-symbols-outlined text-5xl text-outline mb-3">potted_plant</span>
              <p className="text-on-surface-variant font-bold text-lg">Your greenhouse is empty!</p>
              <p className="text-sm text-outline/80 mt-1 max-w-xs mx-auto mb-4">Start by logging your first seedling or houseplant on the left panel to begin your journal.</p>
            </div>
          ) : (
             plants.map((p) => (
               <div key={p.id} className="bg-surface-container-lowest p-6 rounded-3xl shadow-[0_10px_30px_rgba(28,28,25,0.04)] border border-surface-container-high transition-transform hover:-translate-y-1">
                 <div className="flex justify-between items-start mb-2">
                   <div>
                     <h4 className="text-2xl font-bold text-primary italic font-serif leading-tight">{p.name}</h4>
                     <span className="inline-block mt-2 bg-tertiary-fixed text-on-tertiary-fixed-variant tracking-widest font-semibold text-[10px] uppercase px-3 py-1 rounded-full">{p.species}</span>
                   </div>
                   <button className="material-symbols-outlined text-stone-300 hover:text-primary transition-colors">more_vert</button>
                 </div>
                 {p.notes && <p className="text-sm text-on-surface-variant mt-4 leading-relaxed bg-surface/50 p-4 rounded-xl">"{p.notes}"</p>}
                 <div className="mt-6 flex gap-4 text-xs font-semibold text-stone-500 pt-4 border-t border-outline-variant/10">
                    <button className="flex items-center gap-1.5 hover:text-primary transition-colors bg-surface-container py-1.5 px-3 rounded-full"><span className="material-symbols-outlined text-[16px]">water_drop</span> Watered</button>
                    <button className="flex items-center gap-1.5 hover:text-primary transition-colors bg-surface-container py-1.5 px-3 rounded-full"><span className="material-symbols-outlined text-[16px]">photo_camera</span> Gallery</button>
                 </div>
               </div>
             ))
          )}
        </div>
      </div>
    </div>
  );
}
