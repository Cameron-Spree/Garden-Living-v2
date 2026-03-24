export default function Summits() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="mb-16">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Masterclasses</span>
        <h1 className="font-headline text-display-lg text-primary leading-tight mb-4 tracking-tight">Horticulture Summits</h1>
        <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">Join live streams and recorded sessions with world-renowned botanists and landscape architects.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          "Urban Oasis Planning", 
          "Advanced Soil Biomes", 
          "Regenerative Agriculture", 
          "Water-wise Desert Scaping"
        ].map((summit, i) => (
          <article key={i} className="group relative bg-surface-container-lowest p-8 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between min-h-[300px] border border-outline-variant/10">
            <div>
              <div className="flex justify-between items-start mb-6">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{i === 0 ? 'Live Now' : 'Upcoming'}</span>
                <span className="material-symbols-outlined text-primary text-3xl opacity-50">sensors</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-3 group-hover:text-emerald-600 transition-colors">{summit}</h3>
              <p className="text-body-lg text-on-surface-variant mb-6 line-clamp-2">Learn the structural foundations of maximizing growth in minimalist constraint spaces.</p>
            </div>
            <button className="self-start px-6 py-2 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-on-primary transition-colors">
              {i === 0 ? "Join Stream" : "Register"}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
