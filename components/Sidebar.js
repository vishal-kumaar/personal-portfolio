"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { user, socialLinks } from "../utils/portfolio";
import SidebarContext from "../contexts/sidebar/SidebarContext";
import Image from "next/image";

export default function Sidebar() {
  const { sidebar, toggleSidebar } = useContext(SidebarContext);

  return (
    <div
      className={`${
        sidebar ? "z-50 fixed top-0 left-0" : "-z-50 static"
      } bg-transparent/60 w-full h-full`}>
      <div
        id="sidebar"
        className={`bg-transparent ${
          sidebar ? "translate-x-0" : "-translate-x-full"
        } w-full h-full fixed top-0 left-0 z-30 transition duration-700 ease-in-out`}>
        <aside
          className={`flex flex-col justify-between fixed overflow-y-auto w-fit h-screen pt-8 px-6 bg-white transform ease-in-out duration-500`}>
          <div>
            <div className="flex items-center justify-between">
              <Image
                width={64}
                height={0}
                src="./images/avatar.svg"
                alt="developer"
                className="w-16"
              />
              <Image
                height={0}
                width={28}
                src="./images/close.svg"
                alt="close"
                className="w-7 cursor-pointer"
                onClick={toggleSidebar}
              />
            </div>
            <h1 className="font-firasans font-bold mt-3 text-lg text-black/80">
              {user.name}
            </h1>
            <hr className="border mt-5" />
            <div className="text-gray-600 font-bold mt-5 flex flex-col">
              <Link
                href="/"
                className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
                onClick={toggleSidebar}>
                <Image
                  height={0}
                  width={24}
                  src="./images/home.svg"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <p>Home</p>
              </Link>
              <Link
                href="/projects"
                className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
                onClick={toggleSidebar}>
                <Image
                  height={0}
                  width={24}
                  src="./images/project.svg"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <p>Projects</p>
              </Link>
              <Link
                href="/blogs"
                className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
                onClick={toggleSidebar}>
                <Image
                  height={0}
                  width={24}
                  src="./images/blog.svg"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <p>Blogs</p>
              </Link>
              <Link
                href="/contact"
                className="text-lg font-roboto my-1 py-1 px-2 w-52 flex items-center"
                onClick={toggleSidebar}>
                <Image
                  height={0}
                  width={24}
                  src="./images/contact.svg"
                  alt=""
                  className="w-6 h-6 mr-2"
                />
                <p>Contact</p>
              </Link>
            </div>
          </div>
          <div className="mb-20">
            <hr className="border mb-10" />
            <h1 className="text-xl font-bold font-firasans text-black/90 drop-shadow-lg">
              GET IN TOUCH
            </h1>
            <div className="mt-4">
              <div className="flex flex-wrap item-center">
                {socialLinks.linkedin && (
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-600 rounded-full p-2 mr-2 mb-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-black/80">
                    <Image
                      height={0}
                      width={32}
                      src="./images/linkedin.svg"
                      alt="linkedin"
                      className="w-8 invert"
                    />
                  </a>
                )}
                {socialLinks.github && (
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-black rounded-full p-2 mr-2 mb-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-black/80 hover:shadow-black/80">
                    <Image
                      height={0}
                      width={32}
                      src="/images/github.svg"
                      alt="github"
                      className="w-8 invert"
                    />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-800 rounded-full p-2 mr-2 mb-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-black/80">
                    <Image
                      height={0}
                      width={32}
                      src="./images/facebook.svg"
                      alt="facebook"
                      className="w-8 invert"
                    />
                  </a>
                )}
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-red-700 rounded-full p-2 mr-2 mb-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-black/80">
                    <Image
                      height={0}
                      width={32}
                      src="./images/instagram.svg"
                      alt="facebook"
                      className="w-8 invert"
                    />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 rounded-full p-2 mr-2 mb-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-black/80">
                    <Image
                      height={0}
                      width={32}
                      src="./images/twitter.svg"
                      alt="twitter"
                      className="w-8 invert"
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
