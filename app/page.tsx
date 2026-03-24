"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  const ensureLogin = (actionName: string) => {
    const hasSession = document.cookie.includes("sessionUser=");
    if (!hasSession) {
      router.push("/login");
    } else {
      alert(`User Action triggered: ${actionName}`);
    }
  };

  return (
    <>
      <section className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-secondary font-bold tracking-widest uppercase text-xs mb-3 block">Community Hub</span>
            <h1 className="font-headline text-display-lg text-primary leading-tight mb-4 tracking-tight">The Greenhouse Collective</h1>
            <p className="text-body-lg text-on-surface-variant leading-relaxed">Join a specialized circle of enthusiasts. Share your growth, troubleshoot pests, and cultivate connections with gardeners around the world.</p>
          </div>
          <button onClick={() => ensureLogin("Create a New Group")} className="inline-flex items-center gap-2 bg-secondary-fixed text-on-secondary-fixed-variant px-8 py-4 rounded-full font-bold hover:brightness-95 transition-all">
            <span className="material-symbols-outlined">add_circle</span>
            Create a New Group
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
        <div className="md:col-span-3 bg-surface-container-low p-6 rounded-xl flex items-center gap-4">
          <span className="material-symbols-outlined text-primary text-3xl">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-xl font-headline w-full placeholder:text-outline-variant" placeholder="Search by interest, plant type, or region..." type="text"/>
        </div>
        <div className="bg-tertiary-fixed text-on-tertiary-fixed p-6 rounded-xl flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-label-md font-bold uppercase tracking-widest">Active Groups</span>
            <span className="text-2xl font-serif font-bold">142</span>
          </div>
          <span className="material-symbols-outlined text-4xl opacity-40">potted_plant</span>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <article className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500">
          <div className="relative h-64 overflow-hidden">
            <img alt="Succulent Lovers" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCauMQDHfWf-xt2rWWe8uCZNFvwwKGmqs-Oy4BJUOACPK0RnV-TqjGcCe9NY7JU6w2ekWM3XUPUhAK5_aKcX2z6k-WXb2PtGtTXlQFj3UnQ9i6S-gElA7DsMCKhsPRQAOebBbPUqVgLtUIVsxFNJFmVb8gZTX5Dc-sCGd6l1r_VHzsF3l3pi3g-4ptws3tpsjhkAdtcXOcY39CJzjDgZRhhz1wqj8y32aVEE6TyGDJNs9JVhyh52XU1ReXtuY1U_Ji5vt2JnZnQ_sw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <span className="text-label-md font-bold">2.4k Members</span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="font-headline text-headline-md text-primary mb-3">Succulent Lovers</h3>
            <p className="text-body-lg text-on-surface-variant mb-6 line-clamp-2">Master the art of neglect. Sharing propagation tips, soil mixes, and identification for desert flora enthusiasts.</p>
            <button onClick={() => ensureLogin("Join Succulent Lovers")} className="w-full bg-surface-container text-primary font-bold py-3 rounded-full hover:bg-primary hover:text-white transition-colors">Join Community</button>
          </div>
        </article>

        <article className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm lg:-mt-12 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500">
          <div className="relative h-64 overflow-hidden">
            <img alt="Urban Jungle" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7DAXm21vwb_N2gln0pHkOHBfZOEayclVK1LJ0glZrA7JU-BGG4V-b2mGrFLHAyJqolUixA7eLrsTzRkBvpDy1WJpZozrBk82DAWZer3OwZz2v66F8iYs-jCDm9sBeUiT02geuS7VD-xXOWh02dB8l7IeGlIkS0I2zI6LrHOO8oEt3XgkSKmbsA2zADEcSD-ruJTeogoec7FDsjuLmWDrvmTRbPGMoilv8HO0_n3kZg0GIWPnWApKy1fxP6dSWr9UZFr1oRuYlWAw"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <span className="text-label-md font-bold">5.8k Members</span>
            </div>
          </div>
          <div className="p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-tertiary-fixed text-on-tertiary-fixed px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Trending</span>
            </div>
            <h3 className="font-headline text-headline-md text-primary mb-3">Urban Jungle</h3>
            <p className="text-body-lg text-on-surface-variant mb-6 line-clamp-2">Turning city apartments into oxygen-rich sanctuaries. Focus on low-light plants and space optimization.</p>
            <button onClick={() => ensureLogin("Join Urban Jungle")} className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold py-3 rounded-full shadow-lg shadow-emerald-900/10 hover:brightness-110 transition-all">Join Community</button>
          </div>
        </article>

        <article className="group relative bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-500">
          <div className="relative h-64 overflow-hidden">
            <img alt="Vegetable Patch" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB4lJY3tFNVDPjBGJrE17H5pzw1U7y_th6qcx6WgBL6pZX9FwOy9pN3296gDYkDcdBKuiYmN9KWL0hNIVoU4g_WsGVWKZUN66kZRxv7eeEefcAHZOkNYRnwWIZUvaIbMbAuY2MNkMplV8v7AclPZ0_ws-Qkug9sXoJmAsO4hG2xAIaZpSfI2Shvh3jSf2h7InxmaYF67th09PZ1pST5c5ZshBvQnbSGu1eTdMEMTh90kYoHRjB8v6qMYJXT1tLQ6C2d4xJ9-CsGbE"/>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
              <span className="text-label-md font-bold">12k Members</span>
            </div>
          </div>
          <div className="p-8">
            <h3 className="font-headline text-headline-md text-primary mb-3">Vegetable Patch</h3>
            <p className="text-body-lg text-on-surface-variant mb-6 line-clamp-2">The farm-to-table journey starts here. Discuss seasonal rotations, organic pest control, and bumper harvests.</p>
            <button onClick={() => ensureLogin("Join Vegetable Patch")} className="w-full bg-surface-container text-primary font-bold py-3 rounded-full hover:bg-primary hover:text-white transition-colors">Join Community</button>
          </div>
        </article>
      </div>

      <section className="mt-20 bg-primary-container p-12 rounded-[2rem] relative overflow-hidden text-on-primary-container">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <span className="material-symbols-outlined text-[15rem]">potted_plant</span>
        </div>
        <div className="relative z-10 max-w-xl">
          <h2 className="font-headline text-headline-md mb-4">Can't find your tribe?</h2>
          <p className="text-body-lg mb-8 opacity-90">Start a unique circle for your specific niche. Whether it's "Bonsai Beginners" or "Hydroponic Herbs," there are others waiting to connect.</p>
          <button onClick={() => ensureLogin("Plant a New Group Seed")} className="bg-primary-fixed text-on-primary-fixed px-10 py-4 rounded-full font-bold flex items-center gap-3 hover:shadow-xl transition-all">
            Plant a New Group Seed
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </section>
    </>
  );
}
