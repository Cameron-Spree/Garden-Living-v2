"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SideNavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Feed", path: "/feed", icon: "eco" },
    { name: "Summits", path: "/summits", icon: "video_library" },
    { name: "Blog", path: "/blog", icon: "menu_book" },
    { name: "Groups", path: "/", icon: "groups" },
    { name: "Exchange", path: "/exchange", icon: "swap_calls" },
    { name: "Clinic", path: "/clinic", icon: "health_and_safety" },
    { name: "Profile", path: "/profile", icon: "person" },
  ];

  return (
    <aside className="hidden md:flex flex-col h-[calc(100vh-5rem)] w-72 bg-stone-50 dark:bg-stone-950 p-6 gap-8 fixed left-0 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-serif italic text-emerald-900 dark:text-emerald-50">Garden Living</span>
        <span className="text-xs text-on-surface-variant font-medium tracking-widest uppercase">The Digital Greenhouse</span>
      </div>
      <nav className="flex flex-col gap-2">
        {navLinks.map((link) => {
          const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
          return (
            <Link 
              key={link.name} 
              href={link.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${isActive ? "bg-emerald-100/50 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100" : "text-stone-600 dark:text-stone-400 hover:bg-stone-200/50 dark:hover:bg-stone-800/50 hover:translate-x-1"}`}
            >
              <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          );
        })}
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
