import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import TopBar from "@shared/TopBar";
import BottomBar from "@shared/BottomBar";
import LeftSidebar from "@shared/LeftSidebar";
import RightSidebar from "@shared/RightSidebar";

export const metadata: Metadata = {
  title: "Threads",
  description: "A Next.js 13 Threads",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={`${inter.className} `}>
            {/* App */}
            <TopBar />
            <main className="flex flex-row">
              <LeftSidebar />
              <section className="flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10">
                <div className="w-full max-w-4xl">{children}</div>
              </section>
              <RightSidebar />
            </main>
            <BottomBar />
            {/* App */}
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
