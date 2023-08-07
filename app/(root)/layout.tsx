import "@styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import {
  TopBar,
  BottomBar,
  LeftSidebar,
  RightSidebar,
} from "@components/index";

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
            <main>
              <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
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
