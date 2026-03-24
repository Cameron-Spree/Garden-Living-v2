import "./globals.css";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { TopAppBar } from "@/components/TopAppBar";
import { SideNavBar } from "@/components/SideNavBar";
import { BottomNavBar } from "@/components/BottomNavBar";

export const metadata: Metadata = {
  title: "Garden Living - Community Groups",
  description: "Join a specialized circle of enthusiasts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  let sessionUser = null;
  try {
    const sessionCookie = cookieStore.get("sessionUser")?.value;
    if (sessionCookie) sessionUser = JSON.parse(decodeURIComponent(sessionCookie));
  } catch(e) {}

  return (
    <html lang="en" className="h-full">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          }
        `}</style>
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed h-full">
        <TopAppBar user={sessionUser} />
        <div className="flex min-h-screen pt-20">
          <SideNavBar />
          <main className="flex-1 md:ml-72 p-8 lg:p-12 max-w-7xl mx-auto w-full pb-28 md:pb-8">
            {children}
          </main>
        </div>
        <BottomNavBar />
      </body>
    </html>
  );
}
