import Link from "next/link";
import React from "react";
import Image from "next/image";
import "@styles/globals.css";

function TopBar() {
  return (
    <>
      <nav className="top-bar">
        <Link href="/" className="flex items-center gap-4">
          <Image src="/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-heading3-bold text-light-1 max-xs:hidden">
            Threads
          </p>
        </Link>
      </nav>
    </>
  );
}

export default TopBar;
