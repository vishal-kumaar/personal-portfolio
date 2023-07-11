"use client";

import React, { useContext, useEffect, useState } from "react";
import Link from "next/link.js";
import SidebarContext from "../contexts/sidebar/SidebarContext";
import { usePathname } from "next/navigation";
import Image from "next/image";
import user from "@/portfolio/user";

export default function Navbar() {
  const { toggleSidebar } = useContext(SidebarContext);
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const stickyThreshold = windowHeight * 0.01;
        const isScrollingPastThreshold = window.scrollY >= stickyThreshold;
        setIsSticky(isScrollingPastThreshold);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const isActive = (path) => {
    return pathname === path ? 'underline underline-offset-[6px]' : '';
  };

  return (
    <nav
      className={`text-white flex justify-between items-center px-4 md:px-10 pt-7 pb-3 bg-gradient-to-r from-sky-500 to-indigo-500 w-full z-20 ${
        isSticky ? "sticky top-0 left-0 shadow-xl" : "static"
      }`}>
      <div>
        <Link href="/" className="font-cursive text-3xl">
          {user.name}
        </Link>
      </div>
      <Image
        src="./images/hamburger.svg"
        alt="menu"
        width={24}
        height={0}
        onClick={toggleSidebar}
        className="visible md:invisible w-6 h-fit invert"
      />
      <div className="hidden md:block">
        <div className="flex gap-3">
          <Link
            href="/"
            className={`inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md ${isActive("/")}`}>
            Home
          </Link>
          <Link
            href="/projects?page=1"
            className={`inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md ${isActive("/projects")}`}>
            Project
          </Link>
          <Link
            href="/blogs?page=1"
            className={`inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md ${isActive("/blogs")}`}>
            Blogs
          </Link>
          <Link
            href="/contact"
            className={`inline cursor-pointer ml-6 p-1.5 rounded font-roboto text-white hover:bg-white hover:text-black hover:shadow-md ${isActive("/contact")}`}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
