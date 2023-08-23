'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const AboutMenu = () => {
    const pathname = usePathname()
    return (
      <div>
        <ul>
          <li className="mb-4">
            <Link
              href={"/about/mission"}
              className={` ${
                pathname === "/about/mission" && "text-red-400"
              } underline text-xl" `}
            >
              Our Mission
            </Link>
          </li>
          <li className="mb-4">
            <Link
              href={"/about/vision"}
              className={`${
                pathname === "/about/vision" && "text-red-400"
              }  underline text-xl" `}
            >
              Our Vision
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    );
};

export default AboutMenu;