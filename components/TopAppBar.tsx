"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function TopAppBar({ user }: { user: any }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.refresh();
  };

  const navLinks = [
    { name: "Feed", path: "/feed" },
    { name: "Summits", path: "/summits" },
    { name: "Blog", path: "/blog" },
    { name: "Groups", path: "/" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-900/80 backdrop-blur-xl shadow-sm shadow-emerald-900/5 tonal-transition h-20">
      <div className="flex justify-between items-center px-8 h-full max-w-full mx-auto">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-2xl font-bold text-emerald-900 dark:text-emerald-100 italic font-serif tracking-tight leading-relaxed">Garden Living</Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.name} 
                  href={link.path}
                  className={`${isActive ? "text-emerald-800 dark:text-emerald-200 border-b-2 border-emerald-800 dark:border-emerald-200 pb-1" : "text-stone-600 dark:text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"} font-sans text-sm font-medium tracking-wide`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center bg-surface-container-low px-4 py-2 rounded-full border border-outline-variant/15">
            <span className="material-symbols-outlined text-on-surface-variant text-xl">search</span>
            <input className="bg-transparent border-none focus:ring-0 text-sm w-48 font-body" placeholder="Search communities..." type="text"/>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined p-2 text-stone-600 hover:text-emerald-700 transition-all">notifications</button>
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-emerald-800 dark:text-emerald-200 hidden md:block">Hi, {user.name}</span>
                <button onClick={handleLogout} className="text-sm font-bold text-secondary hover:text-secondary/80 transition-all">Logout</button>
              </div>
            ) : (
              <Link href="/login" className="material-symbols-outlined p-2 text-stone-600 hover:text-emerald-700 transition-all">person</Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
