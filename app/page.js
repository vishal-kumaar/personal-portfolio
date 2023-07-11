import React from "react";
import Skills from "../components/Skills";
import Image from "next/image";
import user from "@/portfolio/user";
import pageDescriptions from "@/portfolio/pageDesc.";
import socialLinks from "@/portfolio/socialLinks";

export const metadata = {
  title: `Home | ${user.name}`,
  description: pageDescriptions.allPages,
};

export default function Home() {
  return (
    <>
      <main
        className={`bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center flex-col-reverse lg:flex-row text-white px-6 py-14 lg:my-0`}>
        <section className="max-w-2xl">
          <div className="text-4xl font-bold font-poppins mb-4">
            {user.title}
          </div>
          <div className="text-4xl text-white font-medium font-signika mb-6 relative w-full">
            I&#39;m
            {user.subtitle.length >= 3 && (
              <>
                <span className="block opacity-0 overflow-hidden ml-14 absolute top-0 left-0 right-0 animate-bottomToTop">
                  {user.subtitle[0]}
                </span>
                <span
                  style={{ animationDelay: "2s" }}
                  className="block opacity-0 overflow-hidden ml-14 absolute top-0 left-0 right-0 animate-bottomToTop">
                  {user.subtitle[1]}
                </span>
                <span
                  style={{ animationDelay: "4s" }}
                  className="block opacity-0 overflow-hidden ml-14 absolute top-0 left-0 right-0 animate-bottomToTop">
                  {user.subtitle[2]}
                </span>
              </>
            )}
          </div>
          <div className="text-xl font-firasans mb-12">{user.description}</div>
          <div className="flex item-center mb-12">
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-600 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-black/80 h-10">
                <Image
                  height={0}
                  width={24}
                  src="./images/linkedin.svg"
                  alt="linkedin"
                  className="w-6 invert"
                />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="bg-black rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-black/80 hover:shadow-black/80 h-10">
                <Image
                  height={0}
                  width={24}
                  src="./images/github.svg"
                  alt="github"
                  className="w-6 invert"
                />
              </a>
            )}
            {socialLinks.facebook && (
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-800 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-900 hover:shadow-black/80 h-10">
                <Image
                  height={0}
                  width={24}
                  src="./images/facebook.svg"
                  alt="facebook"
                  className="w-6 invert"
                />
              </a>
            )}
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-red-700 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-red-800 hover:shadow-black/80 h-10">
                <Image
                  height={0}
                  width={24}
                  src="./images/instagram.svg"
                  alt="facebook"
                  className="w-6 invert"
                />
              </a>
            )}
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 rounded-full p-2 mr-2 shadow-xl shadow-black/30 outline-white transition ease-in-out duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-black/80 h-10">
                <Image
                  height={0}
                  width={24}
                  src="./images/twitter.svg"
                  alt="twitter"
                  className="w-6 invert"
                />
              </a>
            )}
          </div>
          <div>
            <a
              href={user.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="w-fit flex items-center py-2 px-4 bg-white rounded shadow-xl shadow-black/20 outline-black transition ease-in-out duration-300 hover:-translate-y-1 hover:shadow-black/30 h-10">
              <Image
                height={0}
                width={16}
                src="./images/file.svg"
                alt="resume"
                className="w-4"
              />
              <div className="ml-2 text-sm font-bold font-signika text-black/90">
                SEE MY RESUME
              </div>
            </a>
          </div>
        </section>
        <section className="lg:ml-10 mb-8 lg:mb-0 h-64 lg:h-72">
          <Image
            src={user.profilePic}
            alt=""
            width={288}
            height={0}
            className="rounded-full w-64 lg:w-72"
          />
        </section>
      </main>
      <Skills />
    </>
  );
}
