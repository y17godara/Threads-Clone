import { sidebarLinks } from "@/constants";
import React from "react";
import Link from "next/link";

function LeftSidebar() {
  return (
    <>
      <section className="custom-scrollbar leftsidebar">
        <div className="flex w-full flex-1 flex-col px-6">
          {sidebarLinks.map((link) => (
            <Link 
              key={link.label}
              href={link.route}
              className=""
            >
              Link
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default LeftSidebar;
