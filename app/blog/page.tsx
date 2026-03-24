export default function Blog() {
  return (
    <div className="animate-in fade-in duration-500">
      <section className="mb-16">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Editorial</span>
        <h1 className="font-headline text-display-lg text-primary leading-tight mb-4 tracking-tight">The Botanical Journal</h1>
        <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">In-depth essays, seasonal guides, and the science of plant psychology.</p>
      </section>

      <div className="space-y-8">
        {[
          "The Myth of the Green Thumb", 
          "Wintering Your Tropical Exotics", 
          "Companion Planting for Beginners"
        ].map((post, i) => (
           <article key={i} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row border border-outline-variant/10">
            <div className="w-full md:w-1/3 h-48 md:h-auto bg-surface-container-high relative">
              <div className="absolute inset-0 bg-secondary/10"></div>
              <span className="absolute bottom-4 left-4 text-white bg-black/40 backdrop-blur-md px-2 py-1 rounded text-xs tracking-wider uppercase font-bold">5 Min Read</span>
            </div>
            <div className="p-8 md:w-2/3 flex flex-col justify-center">
              <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 block">Technique</span>
              <h3 className="font-headline text-2xl text-primary mb-3">{post}</h3>
              <p className="text-body-lg text-on-surface-variant mb-4">Discover the true mechanics behind successful cultivation and why observational patience matters more than innate talent.</p>
              <button className="self-start text-secondary font-bold hover:underline underline-offset-4 decoration-2">
                Read Article
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
