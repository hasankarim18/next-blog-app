"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  { slug: "/", name: "home" },
  { slug: "/about", name: "about" },
  { slug: "/blog", name: "blog" },
];

const MainMenu = () => {
  const pathname = usePathname();
  
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href={"/"} className="btn btn-ghost normal-case text-xl">
            Next Simple Blog
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map((nav, i) => {
              return (
                <li key={i}>
                  <Link
                    className={`capitalize ${
                      pathname === nav.slug && "bg-gray-200"
                    }`}
                    href={`${nav.slug}`}
                  >
                    {nav.name}{" "}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
