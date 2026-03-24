export default function Feed() {
  return (
    <div className="flex gap-8">
      {/* Main Content Canvas */}
      <div className="flex-1 max-w-4xl mx-auto md:px-4 pb-12">
        {/* Welcome Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary tracking-tight mb-2">Morning, Clara.</h1>
          <p className="text-on-surface-variant font-body">Your seedlings are showing their first leaves today. See what's growing in the community.</p>
        </div>

        {/* Create Post Box */}
        <section className="bg-surface-container-lowest rounded-xl p-6 shadow-[0_20px_40px_rgba(28,28,25,0.06)] mb-12">
          <div className="flex gap-4">
            <img alt="Clara" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCM_qZ5HKM5Ar0W1rhNbmHl5ckhmfBvHRXQQTdmfy9_SyhEowMa8y5czX3mu_D9PoiaaScOL1p7NIB1wsWf0WG3MSoKnSefszw-ece404z23QfFvZf_h8vNFP20FDvuVXGqqg4y1yg-h7Jd-WyVFk5KXZwHsVWYhayGjjCRZ55OspRzYbPgB9gSuXAXBZ61GQVA7AVgojpUS1MSOq-POquOj545zyd8MW4mRQ7ap8orq4hcYrqpulM20uWKDoZNoLuJCJktKWfaAsg" />
            <div className="flex-1">
              <textarea className="w-full bg-surface-container-low border-none rounded-xl p-4 focus:ring-2 focus:ring-primary/20 text-on-surface font-body resize-none h-24 placeholder:text-stone-400 outline-none" placeholder="Share your garden's progress..."></textarea>
              <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors flex items-center gap-2 text-primary font-medium text-sm">
                    <span className="material-symbols-outlined text-lg">image</span>
                    <span className="hidden sm:inline">Photo</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors flex items-center gap-2 text-primary font-medium text-sm">
                    <span className="material-symbols-outlined text-lg">videocam</span>
                    <span className="hidden sm:inline">Video</span>
                  </button>
                  <button className="p-2 hover:bg-surface-container-high rounded-full transition-colors flex items-center gap-2 text-primary font-medium text-sm">
                    <span className="material-symbols-outlined text-lg">location_on</span>
                    <span className="hidden sm:inline">Tag Garden</span>
                  </button>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">Post</button>
              </div>
            </div>
          </div>
        </section>

        {/* Feed Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2 no-scrollbar">
          <button className="bg-primary text-on-primary px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold">For You</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold hover:bg-surface-container-high transition-colors">Trending</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold hover:bg-surface-container-high transition-colors">Success Stories</button>
          <button className="bg-surface-container-low text-on-surface-variant px-5 py-2 rounded-full whitespace-nowrap text-sm font-semibold hover:bg-surface-container-high transition-colors">Plant ID</button>
        </div>

        {/* Feed List */}
        <div className="space-y-12">
          {/* Post 1 */}
          <article className="relative group">
            <div className="bg-surface-container-low rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-8 p-6 md:p-8">
                <div className="md:col-span-5 relative">
                  <img alt="Garden project" className="rounded-xl w-full h-[300px] md:h-full object-cover shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCWd5NTQGLrq9tKQAuS2nhwKKfIWVxr6Vh0vOxwN3lpyXWzohd6_Hsr-SAeOdRX3h6Cd4xKYbTsG5gHFQ30RrMB6rfTTmXwKg7JmksfUMd9Z-6OVaDPD_TikJeNEd5vtWasyo181gbLEz6D2LL56EDRHOAJbg-6LDKvW8t-k2ZIfYjvyPlDaVOcs0ZnsWfTTtcYuBhmOyvbkscQYHM8pcny5YYz5vVfmJRX5uv7hnaem8_8nh_aU05Pr2ljyhQNRIpjRIrpbwxMRo" />
                </div>
                <div className="md:col-span-7 flex flex-col justify-center pt-8 md:pt-0">
                  <div className="flex items-center gap-3 mb-4">
                    <img alt="Julian" className="w-8 h-8 rounded-full object-cover border-2 border-primary-fixed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4HTbBERTLPatK2KKopQinKcXPvoKxjgMqhTKveunbjwTdtpbvrDTYe_1sW96F4VjzI5PPLFRd7XoUIEJpYAWgR0OfDLFKR73nWwmKVnX8Mb0aEG_Ye3iGwOG4_v-jjD_SYXBDpFV4nDhJJURnqCQ0lMoECnnfM56tSTehR3Slq6PbXoNfRKrXbdF0LIK-AyWubHTeWYasfiwniBksHnbhzyB21tP1wNVxFzOZL_85vfMe1EaNJlQEjA0KnSjpmv3Y6wGO8qgZe6w" />
                    <div>
                      <p className="text-sm font-bold text-primary">Julian Thorne</p>
                      <p className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold">2 hours ago • Portland, OR</p>
                    </div>
                  </div>
                  <h2 className="text-2xl font-headline font-bold text-primary leading-tight mb-4 italic">Transitioning to a Winter Harvest</h2>
                  <p className="text-on-surface-variant font-body mb-6 line-clamp-3">Finally got the cold frames built! This year I'm attempting to grow kale, spinach, and even some hardy carrots through the frost. It's an experiment in resilience. Anyone else in Zone 8b doing the same?</p>
                  <div className="flex items-center gap-6 text-on-surface-variant border-t border-stone-200/50 pt-6">
                    <button className="flex items-center gap-2 hover:text-secondary transition-colors group/btn">
                      <span className="material-symbols-outlined text-xl">favorite</span>
                      <span className="text-xs font-semibold">142</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined text-xl">chat_bubble</span>
                      <span className="text-xs font-semibold">28</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Post 2: Bento Grid Image Gallery */}
          <article className="bg-surface-container-lowest rounded-xl p-8 shadow-[0_4px_24px_rgba(0,0,0,0.03)]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <img alt="Amara" className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCv2zi8UCc8HwqhsxvbbF73Jue-c0w64zI1UESnN28VOpzmrr_zX6x9oOqC3dTqdLng7yEjGIyGVS4yaOGe8sCBY597n9Os8tNuaMaWfgVBzEZb4ZDNFVPMft-8A_vkQRd7OATsWDf5O2kkD5ktk-S2m_mCMcGNt5ehYbj3R_AvzHHZfwEWA-pPOzYJApqtEm4XMHPdTVE2GvsUvgOCoxftOfvuWrkg5pXCHTN_fHUBPyxSqB6y6DsBK9ynKYVvsnfrxOVTpKMP-Ww" />
                <div>
                  <p className="font-bold text-primary">Amara Okafor</p>
                  <p className="text-xs text-on-surface-variant">4 hours ago</p>
                </div>
              </div>
              <button className="material-symbols-outlined text-on-surface-variant">more_horiz</button>
            </div>
            <p className="text-on-surface font-body mb-6 text-lg leading-relaxed">
              My Monster Deliciosa is finally producing a second fenestrated leaf! 🌿 The humidity levels this week have been perfect. 
            </p>
            <div className="grid grid-cols-2 gap-3 h-[400px]">
              <img alt="Plant detail" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWECW7OxhOos2mTEoOB0M89IhVf1JVHy9lzP3_XDLAB9h_KJ1PRj9Vu8Y0UZiweAZuFXhoVquyFVg_d57gFaFiROosPiySH77PmXMODKSzRuWzXw8iwGk8W72xpCsQhh9nP8mIyDlyCHHNoKRXqgd_0GYFL3BwsIhWJNgx0YKXqJ07SM8fPjzElEnbkqN-KPhErBpVRYoGuWw3JOsKm3hFh8jp8Gmfh2doM1U6lyIpttK_EIU0EsER91mNtIFW4Epp_g85UEpI8aw" />
              <div className="grid grid-rows-2 gap-3">
                <img alt="Plant setup" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNFXkXUaSMqahsKvN0WwZTossGmeVESbzSpGkYakhd89tFItZVvyNe2-jeIoVNiOpWT1eaWS4YKid42yzfyHYJs7jnY4ZrRHegVqTkSVTK24MmutT3TKkGwZVuHe3e2vdWz-SJOM3wwR_l0vQDgCptf0yQX-Hr8h3XhpJOOxV2K4hddWdCMG47vLy8D4kufYf5ambsfxkRzJIZsCQ8SCEXMeDtsxGazIesgip37dH-fRmJ7GMsIDWGwOc1L0-yyas9UbelEwimCaE" />
                <img alt="Dew on leaf" className="w-full h-full object-cover rounded-xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO1cSTo6Z9gO9GUjb6lc3EZThDmf0KcKuX8lh6xMF8Uf9gYe8y8Rh-ucalHkYct7goMcuLmn6TKkbB9bE9wEc3oAl8uzawCbH1Duv-dPukWEnm3oHNJqijlBggj6MHp1zSH6IcHo01rZzbPBohyfn0potcc9oiByKqw-xWX8fXk--TMYpz4XcnoNB06Uoonu2t5kNC2sRSjmerhaX27SLcjlkWFQdaetPP4EdlqG7277i7c9TpJyppXOhUaJXBxtEzrlftXMJjNV4" />
              </div>
            </div>
            <div className="mt-6 flex gap-4">
              <button className="bg-secondary-fixed text-on-secondary-fixed-variant px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold transition-transform active:scale-95">
                <span className="material-symbols-outlined text-base" style={{ fontVariationSettings: "'FILL' 1" }}>thumb_up</span>
                Keep Growing
              </button>
              <button className="bg-surface-container-low text-on-surface-variant px-4 py-2 rounded-full flex items-center gap-2 text-xs font-bold hover:bg-surface-container-high transition-colors">
                <span className="material-symbols-outlined text-base">comment</span> 12 Comments
              </button>
            </div>
          </article>

          {/* Post 3: Seed Card */}
            <article className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-tertiary-fixed/20 p-8 rounded-3xl">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-on-secondary shadow-lg z-10">
                  <span className="material-symbols-outlined">help</span>
                </div>
                <img alt="Question image" className="w-full aspect-square object-cover rounded-2xl shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3bSOnM6u78Q5SgIxuAqvIqjPF1IKRbQ3LEb2op2sWK-3lkb93vVFCndBOpT8467ak73e6cqasFIksK9273RPUBAUMlMPAYTFjI6QjuswY-n19F8oq-7GG82ZGi8A2c2iqTKMRy6onj4u9ecbeLb9gyDgdqijOwUlYs8RojJ2TT8WmsJc2F5gNTsBPDCTNXKqXli9M378lb7Nip_0Ouh81nwR9RUidRfY5gVxccmuAV1Ei8Hvf_sAhlQuqW507fG8idCr7prfU7NY" />
              </div>
              <div className="flex flex-col gap-4">
                <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit">Gardening Help</span>
                <h3 className="text-3xl font-headline font-bold text-primary italic leading-tight">Can anyone identify these sprouts?</h3>
                <p className="text-on-surface-variant font-body">I planted some "mystery seeds" from an old packet found in the shed. They seem to be growing incredibly fast! They have fuzzy stems and heart-shaped leaves. Any ideas?</p>
                <div className="flex items-center gap-4 mt-2">
                  <button className="bg-primary text-on-primary px-6 py-3 rounded-full font-bold shadow-md hover:bg-primary-container transition-colors">Answer Now</button>
                  <button className="text-primary font-bold text-sm underline decoration-secondary underline-offset-4">Save for later</button>
                </div>
              </div>
            </article>
        </div>
      </div>

      {/* Right Sidebar (Community Stats/Trending) */}
      <aside className="hidden xl:flex flex-col w-80 p-6 gap-8 sticky top-28 h-[calc(100vh-7rem)] shrink-0">
        <div className="bg-surface-container-low rounded-xl p-6">
          <h4 className="font-headline font-bold text-primary text-xl mb-4 italic">Trending Sprouts</h4>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-secondary"></div>
              <div><p className="text-sm font-bold text-primary">#IndoorJungle</p><p className="text-[10px] text-on-surface-variant">2.4k posts this week</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-tertiary"></div>
              <div><p className="text-sm font-bold text-primary">#CompostTips</p><p className="text-[10px] text-on-surface-variant">890 posts this week</p></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary-fixed-dim"></div>
              <div><p className="text-sm font-bold text-primary">#RareSucculents</p><p className="text-[10px] text-on-surface-variant">1.1k posts this week</p></div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-tertiary to-tertiary-container rounded-xl p-6 text-on-tertiary relative overflow-hidden">
          <div className="relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-2">Member Highlight</p>
            <h4 className="text-2xl font-headline font-bold mb-4">Mastering Orchid Care</h4>
            <p className="text-sm font-body opacity-90 mb-6 leading-relaxed">Join Sarah Jenkins tonight for a live greenhouse session on winter orchid health.</p>
            <button className="bg-on-tertiary text-tertiary px-6 py-2 rounded-full font-bold text-sm shadow-xl active:scale-95 transition-transform">Remind Me</button>
          </div>
          <div className="absolute -bottom-6 -right-6 text-white/10">
            <span className="material-symbols-outlined text-[120px]">eco</span>
          </div>
        </div>
      </aside>
    </div>
  );
}
