import Link from "next/link";

export function BottomNavBar() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(28,28,25,0.08)] rounded-t-[2rem] z-50">
      <Link className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:text-emerald-600" href="/">
        <span className="material-symbols-outlined">home</span>
        <span className="text-[10px] font-sans font-semibold uppercase tracking-widest mt-1">Feed</span>
      </Link>
      <Link className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:text-emerald-600" href="/">
        <span className="material-symbols-outlined">sensors</span>
        <span className="text-[10px] font-sans font-semibold uppercase tracking-widest mt-1">Summits</span>
      </Link>
      <Link className="flex flex-col items-center justify-center text-stone-500 dark:text-stone-400 hover:text-emerald-600" href="/">
        <span className="material-symbols-outlined">article</span>
        <span className="text-[10px] font-sans font-semibold uppercase tracking-widest mt-1">Blog</span>
      </Link>
      <Link className="flex flex-col items-center justify-center bg-emerald-800 dark:bg-emerald-200 text-white dark:text-emerald-950 rounded-full w-14 h-14 -mt-10 shadow-lg shadow-emerald-900/20 active:scale-90 transition-all" href="/">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>diversity_3</span>
        <span className="sr-only">Groups</span>
      </Link>
    </nav>
  );
}
