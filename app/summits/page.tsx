export default function Summits() {
  return (
    <div className="w-full">
      {/* Search & Header */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-5xl font-headline font-bold text-primary tracking-tight mb-2">Video Summits</h1>
          <p className="text-body-lg text-on-surface-variant max-w-lg leading-relaxed">Cultivate your knowledge with masterclasses led by the world's leading horticulturalists and landscape designers.</p>
        </div>
        <div className="relative w-full md:w-80">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input className="w-full bg-surface-container-low border-none rounded-full py-4 pl-12 pr-6 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all outline-none" placeholder="Search summit topics..." type="text"/>
        </div>
      </div>

      {/* Hero: Upcoming Live Summit */}
      <section className="relative mb-20 group overflow-hidden rounded-[2.5rem] bg-tertiary-container min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img alt="Greenhouse interior" className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105 group-hover:scale-100 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHwOHYWnT1v1u7tmZK4g48E9y4NH_4Gan_TKWMzF-rcNALbXVlIhntA4rbqVpRdbvjTzBIeUriNfZTmrNYqJkv5EWUEXp_pQGN8WbssYMMguwDyGCie0yVlJcMKHyS6fhKc5-3x5GgEpob3uvRHQjB0GgPAxBlCH02qEgJ6hOOlhKuxN1NNLCFEQ1ZTCFWpm-Yhxycb5ATzpMaweRXcd4fcMMiOusS_byj7ZPlXf60pnOagbQIrVACYiETesOzETj5poT3EuLEAEc" />
        </div>
        <div className="relative z-10 p-10 md:p-16 max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary text-on-secondary text-xs font-bold tracking-widest uppercase mb-6 shadow-xl shadow-secondary/20">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            Live in 02:45:12
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-bold leading-[1.1] mb-6">Vertical Orchards: Urban Spaces Reimagined</h2>
          <p className="text-lg opacity-90 mb-10 leading-relaxed font-light">Join Dr. Elena Vance as she demonstrates how to transform small balconies into high-yield fruit gardens using modular hydroponic systems.</p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-primary-fixed to-primary-fixed-dim text-primary px-8 py-4 rounded-full font-bold shadow-2xl shadow-black/20 hover:scale-105 transition-transform">
              Join Live Now
            </button>
            <button className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md">
              Add to Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <div className="space-y-16">
        {/* Beginner Basics */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-headline font-bold text-primary">Beginner Basics</h3>
            <a className="text-primary font-semibold flex items-center gap-1 hover:underline" href="#">View all <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <img alt="Seedling" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6sAB-ODZ6dIK2opD2sydy1Y7j0E563tOiYDK2-C3m0ecEAB1ksHmrjJ6N84znEoHQKZZ-VIjGqTWhf0Vmtc24YZwBwotrW8AJXRk2tyOlp5xoAedEmRjlbX5uCJjDtVuiuzJ6HPO38yjs-MdjuLn1O3JLbt4RdpbeZ4bmrHciRqMnD3pxX5tA8A7MqdUwnO_1t9K_4WTYVMVn3dJ-PPw_NlFKsudtr0K8Sfu0cqPsbXUrDYh-ep3Vwvjl2s1lD_UJMgScTcpKqvg" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">12:45</div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-headline font-bold mb-2 leading-tight">Mastering Soil pH for New Gardeners</h4>
                <p className="text-sm text-on-surface-variant mb-4">Expert: Julian Thorne</p>
                <div className="flex items-center justify-between border-t border-outline-variant/15 pt-4">
                  <span className="text-xs text-outline flex items-center gap-1"><span className="material-symbols-outlined text-xs">visibility</span> 12.4k views</span>
                  <span className="text-xs text-outline">Oct 2023</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <img alt="Garden tools" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLP9XvWiTw-XTmcFzkiHdiqSBn81-oaDqomianOs5h9B6L_fYNCy8S6ym_Df3zqsWMNFad8v6P5xJnyqAtib-1xex_KK4tfbP1FiGjUysO7d1pckuvwLQU6JQV6IY7aNLYoCUHY_qoq1cMgmxEe2YAcBThbyTsbO28IxG4OL6T3uRt6qK70g1fMx4w_pIkathw7o8PtAsRbvgtAMpOAG0c-TZ8hL-BYJtfSXHr6fT4uyHwzcPkQmPUxMXHyqfHKbhDmvcbbXbTuuM" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">08:20</div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-headline font-bold mb-2 leading-tight">Essential Tools for Your First Season</h4>
                <p className="text-sm text-on-surface-variant mb-4">Expert: Sarah Jenkins</p>
                <div className="flex items-center justify-between border-t border-outline-variant/15 pt-4">
                  <span className="text-xs text-outline flex items-center gap-1"><span className="material-symbols-outlined text-xs">visibility</span> 8.9k views</span>
                  <span className="text-xs text-outline">Nov 2023</span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
              <div className="relative aspect-video">
                <img alt="Watering can" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUYb_uqKEIUeHf_fH3phI_RGfGdGJvkxF9SZ2Yh5SMV840KaOncun8gA4klCtmXzVqG2ta1D45znmb090NS8KcgRghEpZ3Bic7HXoQHRBW7GK68QfnYFpNy5uTFagkA3mcBQ8AZdsoD08-IOR1RtzPCcryPqOKEIoBZA2pXSD-k5dn70H54dPfYQ2-6vlugZzZxHUOPjHp8hFfIpzZPVTCGZZLe_Dm-QEaEsiBhvpDuxzbtgocBZ88tb8AkmG4AX7tBU9Tn3uH1qU" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">15:10</div>
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity cursor-pointer">
                  <span className="material-symbols-outlined text-white text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-headline font-bold mb-2 leading-tight">The Art of Mindful Watering</h4>
                <p className="text-sm text-on-surface-variant mb-4">Expert: Marcus Chen</p>
                <div className="flex items-center justify-between border-t border-outline-variant/15 pt-4">
                  <span className="text-xs text-outline flex items-center gap-1"><span className="material-symbols-outlined text-xs">visibility</span> 15k views</span>
                  <span className="text-xs text-outline">Dec 2023</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Organic Gardening Section */}
        <section className="bg-surface-container-low -mx-0 lg:-mx-12 px-6 lg:px-12 py-16 rounded-[2rem]">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h3 className="text-2xl font-headline font-bold text-primary">Organic Gardening</h3>
              <p className="text-on-surface-variant text-sm mt-1">Sustainable methods for a chemical-free harvest.</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary shadow hover:bg-primary hover:text-white transition-all">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto pb-6 scrollbar-hide no-scrollbar">
            {/* Card 1 */}
            <div className="flex-none w-80 group">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img alt="Compost" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSLoNtMO-U3nQ4LyYoeBfo-0527XOwn3dtGz0bdf6ub6_0wCSn5psecH-NyCaT_OMN3nB4ofZziISATy-WwPKEFO6A_e_Zh9d0zj5wWsAerImu0VfxPFXXjqjbNC2-cprme4XsmXVJN-pqxtKN1crE46RCBJAkBGAmcNLoEkOrdMMrS56h08tBan_0pUHEA3O8mrZs9ZyO1PQEHd-1lNjyEaGIacKlV5mKG4_m1ZnU130F66g_lmNB5f8fj_vzJ-G8rdrpa8mltTU" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">Organic Mastery</p>
                  <p className="font-headline font-semibold">Gold Standard Composting</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-tertiary flex items-center justify-center text-white text-[10px] font-bold">DT</div>
                <div><p className="text-sm font-semibold">David Tilling</p><p className="text-xs text-outline">45 mins</p></div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex-none w-80 group">
              <div className="relative rounded-2xl overflow-hidden mb-4">
                <img alt="Honey bee" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAT0ntG9sPpUFYzGiZqgrMiC2ItlnndH5HVSfUkrn4N2OLUkEEcwtmQ4IG7O7pRABOnDbIQwqdnIVtKCtSrNYFKEm-HJ3tHQxgIXHEhBQyQwZD-uIjH3-NdfH3kBkP5qqVQjbRa427xdYjukOUtud8yaWhDxkeh9-4A3MPOWvDKQBXzmui9H4I_pLcC0IhNaIe_AiPH2yo1uPa1xeNv0VE5zB4grwibbznI9POx216efGVlYQanNpaVg9CEmTDE_N4B-BNSvfTS7EU" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">Biodiversity</p>
                  <p className="font-headline font-semibold">Attracting Native Pollinators</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white text-[10px] font-bold">LM</div>
                <div><p className="text-sm font-semibold">Lisa Moss</p><p className="text-xs text-outline">32 mins</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* Indoor Plants & Sustainable Living */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <h3 className="text-2xl font-headline font-bold text-primary mb-8">Indoor Plants</h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-center p-4 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
                <img alt="Monstera" className="w-24 h-24 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvHHbhZ5E31h9uLIsvPBuVC3ZLrz3CAJnY3upITIItfBiuNW8XkAWeDp8aflpNf3-O_NRm5RLfcrqLBPqiy1Q5zlLHRcbjYJSWmlnGm0PPbOxNUXdO5YsYeUU05LbcQgOb91JaIS2J9DMm6P1g-5A7y-76sqMg9cfIEThyVvS1soAO7ec2pBD2TVfnbsOjQrmHIrdHwOeMMsJsqgFJQ9mNc-gwgAZ7m2cOPUz-knUD6TaMvpFF2VkFCuLplQiiIFo8qG9ah44G_1E" />
                <div>
                  <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">Monstera propagation for experts</h4>
                  <p className="text-sm text-outline">Dr. Hiroshi Sato • 18 mins</p>
                </div>
              </div>
              <div className="flex gap-6 items-center p-4 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
                <img alt="Succulents" className="w-24 h-24 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaDwe9M5HJi1anxbpXMSx04k5ezGjXveAzWY_FK37UykmLHpxD98jJIhaYfBC5ynPdykH6qp_pRc_Botvj9r9ZstF0OVmqiyJ2HTeIkjJQEgcMyzpN1dD8ZGgm9WRp2OTxvzJBChjxtVIUgeUbPqBCwkFN9R6S3697AcXFAWWtDHXB2RrfZitwlot5r6mZN9PK2Kssd2Wu4qbfAIwMW2LSDbXjBVVWa1pL3GsSujubEE-REgfZjg2qjyw3OsDO-SZfRKOA9P5pplI" />
                <div>
                  <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">Terrarium building from scratch</h4>
                  <p className="text-sm text-outline">Emma White • 24 mins</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-2xl font-headline font-bold text-primary mb-8">Sustainable Living</h3>
            <div className="space-y-6">
              <div className="flex gap-6 items-center p-4 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
                <img alt="Rain barrels" className="w-24 h-24 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFob7_vLpUu-g57H0w4zzqTNY-tPoZIAzsw4-TvCgWDnd0nxZTTqIXxlgsdyR7zh_D9WPUofHOG-U8UFSvTAMe25bN-Fy_ugylZ8HDw_199Gh0wjSR2zuAN_Vnz2zNM2jQ9hJF4tnnd9xfxJy93a7WalyEzfVTrqPeJhoili8oL8DeOzzJGgfF7P4qvUMH0axWZt2IZn634X6phd3pOOVfBZruljuKjSoQvYRFGyeANEUvWnqjkSyrYE5zJB54PW21vOb_8KiurzA" />
                <div>
                  <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">Rainwater harvesting systems</h4>
                  <p className="text-sm text-outline">Oliver Reed • 42 mins</p>
                </div>
              </div>
              <div className="flex gap-6 items-center p-4 bg-surface-container rounded-2xl hover:bg-surface-container-high transition-colors cursor-pointer group">
                <img alt="No-dig garden" className="w-24 h-24 rounded-xl object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcG_0FQ3ONWQxiuc2SoVHJ100xRfiaqe5gEHeEEqjNy2-PIxk08ZRSH8ppJ3geJBASPHdEJju-rm8B1sIc5nLo0Ka-znvpEBFtUFTImdK7Mjff8cDi0gf4TQBSksfXqRv00JvOxEKiMOHT4ruOvjEIe8nKXUjZa-e5CCVhFyzmbJJEMcs_2bGLIJoCEfR9xhoKHXMO5J-rxdfLWdhF1fr7WBaBLsLPOXLZCA_0qzKrJIt2cVJYvZ4k2rcRQWmMBEyjK735fTxROBs" />
                <div>
                  <h4 className="font-headline font-bold text-lg leading-tight group-hover:text-primary transition-colors">Intro to no-dig gardening</h4>
                  <p className="text-sm text-outline">Charles Dowding • 55 mins</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
