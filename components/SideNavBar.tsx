import Link from "next/link";

export function SideNavBar() {
  return (
    <aside className="hidden md:flex flex-col h-[calc(100vh-5rem)] w-72 bg-stone-50 dark:bg-stone-950 p-6 gap-8 fixed left-0 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-serif italic text-emerald-900 dark:text-emerald-50">Garden Living</span>
        <span className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">The Digital Greenhouse</span>
      </div>
      <nav className="flex flex-col gap-2">
        <Link className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-xl hover:translate-x-1 transition-transform duration-200" href="/">
          <span className="material-symbols-outlined">eco</span>
          <span>Feed</span>
        </Link>
        <Link className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-xl hover:translate-x-1 transition-transform duration-200" href="/">
          <span className="material-symbols-outlined">video_library</span>
          <span>Summits</span>
        </Link>
        <Link className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-3 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 rounded-xl hover:translate-x-1 transition-transform duration-200" href="/">
          <span className="material-symbols-outlined">menu_book</span>
          <span>Blog</span>
        </Link>
        <Link className="flex items-center gap-3 bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100 rounded-xl px-4 py-3 active:scale-98 duration-150" href="/">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>groups</span>
          <span>Groups</span>
        </Link>
      </nav>
      <div className="mt-auto flex flex-col gap-4">
        <Link href="/login" className="text-center bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold py-4 px-6 rounded-full shadow-lg shadow-emerald-900/20 hover:opacity-90 transition-opacity active:scale-95 block w-full">
          Start Planting
        </Link>
        <div className="pt-4 border-t border-outline-variant/15 flex flex-col gap-1">
          <Link className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-2 text-sm hover:translate-x-1 transition-transform" href="/">
            <span className="material-symbols-outlined text-lg">settings</span>
            <span>Settings</span>
          </Link>
          <Link className="flex items-center gap-3 text-stone-600 dark:text-stone-400 px-4 py-2 text-sm hover:translate-x-1 transition-transform" href="/">
            <span className="material-symbols-outlined text-lg">help_outline</span>
            <span>Support</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
