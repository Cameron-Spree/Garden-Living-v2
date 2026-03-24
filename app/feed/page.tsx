export default function Feed() {
  return (
    <div className="animate-in fade-in zoom-in duration-500">
      <section className="mb-16">
        <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Daily Digest</span>
        <h1 className="font-headline text-display-lg text-primary leading-tight mb-4 tracking-tight">Your Botanical Feed</h1>
        <p className="text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">Discover inspiring gardens, expert planting guides, and community achievements.</p>
      </section>

      <div className="space-y-8">
        {[1, 2, 3].map((post) => (
          <article key={post} className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-surface-container-high rounded-full overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/bottts/svg?seed=${post}`} alt="Avatar" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-on-surface">Gardener_{post}</h4>
                <span className="text-xs text-on-surface-variant uppercase tracking-wider">{post * 2} hours ago</span>
              </div>
            </div>
            <p className="text-body-lg text-on-surface-variant mb-6">
              Just transferred my root cuttings into a new premium terracotta pot. The root growth over the past six months has been absolutely phenomenal. Using a well-draining aroid mix this time around to ensure proper aeration.
            </p>
            <div className="w-full h-64 bg-surface-container-high rounded-xl mb-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/10 animate-pulse"></div>
            </div>
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-stone-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">favorite</span>
                <span className="font-bold text-sm">24 Likes</span>
              </button>
              <button className="flex items-center gap-2 text-stone-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="font-bold text-sm">8 Comments</span>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
