"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNavBar() {
  const pathname = usePathname();

  const navLinks = [
    { name: "Feed", path: "/feed", icon: "home" },
    { name: "Summits", path: "/summits", icon: "sensors" },
    { name: "Blog", path: "/blog", icon: "article" },
    { name: "Groups", path: "/", icon: "diversity_3" },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-2xl shadow-[0_-10px_40px_rgba(28,28,25,0.08)] rounded-t-[2rem] z-50">
      {navLinks.map((link) => {
        const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
        
        if (link.name === "Groups") {
          return (
            <Link key={link.name} href={link.path} className={`flex flex-col items-center justify-center rounded-full w-14 h-14 -mt-10 shadow-lg active:scale-90 transition-all ${isActive ? "bg-emerald-800 dark:bg-emerald-200 text-white dark:text-emerald-950 shadow-emerald-900/40" : "bg-emerald-700 dark:bg-emerald-300 text-white dark:text-emerald-900 shadow-emerald-900/20"}`}>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{link.icon}</span>
              <span className="sr-only">Groups</span>
            </Link>
          );
        }

        return (
          <Link key={link.name} href={link.path} className={`flex flex-col items-center justify-center transition-colors ${isActive ? "text-emerald-700 dark:text-emerald-400" : "text-stone-500 dark:text-stone-400 hover:text-emerald-600"}`}>
            <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{link.icon}</span>
            <span className="text-[10px] font-sans font-semibold uppercase tracking-widest mt-1">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
