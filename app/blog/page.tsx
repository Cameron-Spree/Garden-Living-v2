export default function Blog() {
  return (
    <div className="w-full">
      {/* Category Sub-Nav */}
      <div className="flex items-center gap-8 mb-12 overflow-x-auto pb-4 scrollbar-hide">
        <button className="whitespace-nowrap text-sm font-bold text-primary border-b-2 border-primary pb-2">All Stories</button>
        <button className="whitespace-nowrap text-sm font-medium text-on-surface-variant hover:text-primary transition-colors pb-2">Seasonal Tips</button>
        <button className="whitespace-nowrap text-sm font-medium text-on-surface-variant hover:text-primary transition-colors pb-2">Plant Care Guides</button>
        <button className="whitespace-nowrap text-sm font-medium text-on-surface-variant hover:text-primary transition-colors pb-2">DIY Projects</button>
        <button className="whitespace-nowrap text-sm font-medium text-on-surface-variant hover:text-primary transition-colors pb-2">Urban Gardening</button>
      </div>

      {/* Featured Article (Hero) */}
      <section className="relative mb-20 rounded-3xl overflow-hidden min-h-[500px] flex items-end group">
        <img alt="Lush summer garden" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZCGwdy1yKkisBHHFNd_IfyZHL_rPukwd5etxMUOgATAlmPHWzcraEEtP0idhL8bHzgqqsqI7f2O8c5WEXLkBf20uWrNHznxZhiXvJY_38wLtR9isNXPtQXYv21i-ZoGGZjaus_jpXAg87zj7m9GhPMTIiQQw_SdcshMdSR9or4ey8xdUy0imcUeZYYo9EHIO5WWDDY7eaT2g3LrXfwgELJEex1-d7elcFU68vgoWBEBwZzKAJlb3ZICT23nFCjAdbWfznENwyZWM" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
        <div className="relative p-8 md:p-16 max-w-3xl">
          <span className="bg-secondary text-on-secondary px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block">Featured Guide</span>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">Mastering the Art of Perpetual Harvest: A Year-Round Strategy</h1>
          <p className="text-lg text-white/90 mb-8 font-body leading-relaxed max-w-xl">Learn how to structure your garden beds to provide fresh produce through all four seasons, even in challenging climates.</p>
          <div className="flex items-center gap-6">
            <button className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-surface-container-lowest transition-colors flex items-center gap-2">
              Read Article <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <span className="text-white/80 text-sm font-medium">12 min read • By Elena Vance</span>
          </div>
        </div>
      </section>

      {/* Grid Layout for Articles */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        <article className="flex flex-col">
          <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
            <img alt="Tomato seedlings" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX64nfRi0y7zSNgF-YYCe3M-dHHqXbhX5chmLSqrKDUW5mTQ6oWAy1yFuprSI4VQxgW8aNQMHqdw8adLy11c1ZSIVXbe-YOThhwRmDFdlUcGcvblQ9Hl6bXtIt-HEsIkCL3qHLcnRiQQyWMD3DQDTURgPTLXgBBqp5KmqBDyDHg1iJ475NHD6PqYtIoySyJvP3p9l9FDdC4UypwAuPytdgxgCS91aNPESz-DGpMzA-mNIyMskuBKW5uSvOqZYXdlZwn6IgY8KxLtY" />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Seasonal Tips</span>
            </div>
          </div>
          <h3 className="text-2xl font-serif text-on-surface mb-3 leading-snug hover:text-primary cursor-pointer transition-colors">Early Spring Seeding: Timing Your Success</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">The secret to a bountiful summer lies in the quiet weeks of late February. We explore which varieties crave the cold start.</p>
          <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/20">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Read More</span>
            <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
          </div>
        </article>

        <article className="flex flex-col">
          <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
            <img alt="Interior plants" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApcp9BJKU_Rpnq8OviWEkqkUNVb4BaWI4ZfQSRpsomR-RqxhKSgf1QYmJJn3lMm8MF9MtDwXXz1bMVIoShRoV_Lrh9VO4a933tMMko0VovFuR0VG-kiliRFRFwh86ympy_V1RKnDPND2dxUsWQyLDyYyVOtrAR0Bfx8UejvI5n_DHU4Nrkwi3lNqKbQW5b4RCDOwV7Dt48vd8LDIh5neRQ4MqJ50vPNTQczh6Q0gWKriIgKbf3J-OTuRWNje3JflnTeABZb4SVez8" />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">Care Guide</span>
            </div>
          </div>
          <h3 className="text-2xl font-serif text-on-surface mb-3 leading-snug hover:text-primary cursor-pointer transition-colors">The Houseplant Revival: Humidity &amp; Light</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">Don't let the dry indoor air wither your tropical beauties. Here are five simple hacks to maintain a jungle climate indoors.</p>
          <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/20">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Read More</span>
            <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
          </div>
        </article>

        <article className="flex flex-col">
          <div className="relative h-64 mb-6 rounded-2xl overflow-hidden">
            <img alt="Raised garden beds" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3RqowgIr0ekeB_OuvEHFzbPmyWn-TunqbKo92iIKgYNct9PUcAX2v5FcmlrDuGEPku7IXCuwH0i4dIiJKZ_oxQxoYi4uvrxAmjGgaybFqWSEzm9OJsYLbg4zV1q9bB_S8h-jYfIPNpMqsYihGZuFRKyhPPltthsDkiqcTPeBEyq1Tf2l3udUNc2Ab11-XZWrbFXGl3Ib7PAGPOh_LSAy-wEOiCJLxP5mp5i-ARxXV8Hn1stGTzcMbjyC-ZqiJBon-MOh71b-rbwI" />
            <div className="absolute top-4 left-4">
              <span className="bg-surface/90 backdrop-blur-md text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">DIY Project</span>
            </div>
          </div>
          <h3 className="text-2xl font-serif text-on-surface mb-3 leading-snug hover:text-primary cursor-pointer transition-colors">Build the Perfect Raised Bed for $50</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed mb-6 line-clamp-3">You don't need a massive budget to start your edible journey. This weekend project uses recycled materials for maximum impact.</p>
          <div className="mt-auto flex justify-between items-center pt-4 border-t border-outline-variant/20">
            <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Read More</span>
            <span className="material-symbols-outlined text-on-surface-variant">bookmark</span>
          </div>
        </article>
      </section>

      {/* Secondary Featured (Editorial Layout) */}
      <section className="mt-24 bg-surface-container-low rounded-[3rem] p-10 md:p-20 flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">Why Lavender is the Soul of the Modern Mediterranean Garden</h2>
          <p className="text-on-surface-variant leading-relaxed text-lg italic">"A garden without lavender is like a library without books—it lacks the scent of memory and the quiet hum of life."</p>
          <div className="flex gap-4 items-center">
            <div className="h-px bg-outline-variant flex-1"></div>
            <span className="text-secondary font-bold font-serif italic text-xl">The Essence Series</span>
          </div>
          <button className="text-primary font-bold border-b-2 border-primary py-1 flex items-center gap-2 hover:gap-4 transition-all">
            Discover the Variety Guide <span className="material-symbols-outlined">east</span>
          </button>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-fixed rounded-full -z-10 opacity-30"></div>
          <img alt="Lavender field close up" className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEEptE2q2R1Qpq8gD4pckUw6WLQFiSq_3FplLkyPGVC9N519unKt57ppL8Z1YtCKdcAyABd7bmTaXePQCt9e7BhlQ7QW2uWrua00dLk0Cz9r2prjyco0p-O-YOOy18QgB9KxQ-wSyNqQzQyEEvH8__nhlwJbnaOUCBfQGqJ6RQ2VQkd32x45YeX6NI91jN2dmyuYsXbX-l9IHAToEI7Cqp5qe1XNAt6AGbfMCxHJTql6b2GhRtdFX3XqCQNBK6QMICZmuNCjLdn2M" />
        </div>
      </section>

      {/* Newsletter Box */}
      <section className="mt-24 mb-12 bg-primary-container text-on-primary-container rounded-[2rem] p-12 text-center max-w-4xl mx-auto">
        <span className="material-symbols-outlined text-4xl mb-6">mail</span>
        <h2 className="text-3xl font-serif mb-4">Cultivate your inbox.</h2>
        <p className="text-on-primary-container/80 mb-8 max-w-md mx-auto">Get monthly seasonal planting guides, exclusive editorial deep-dives, and community stories delivered to your greenhouse.</p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 placeholder:text-white/40 focus:ring-2 focus:ring-primary-fixed text-white outline-none" placeholder="Your email address" type="email" />
          <button className="bg-primary-fixed text-on-primary-fixed px-8 py-3 rounded-full font-bold hover:bg-white transition-colors">Join the List</button>
        </div>
      </section>
    </div>
  );
}
