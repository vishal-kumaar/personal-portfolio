import React from "react";
import Seperator from "./Seperator";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <Seperator rotate={"rotate-180"}/>
      <footer
        className={`py-10 bg-gradient-to-r from-sky-500 to-indigo-500`}
      >
        <Image width={64} height={0} src="./images/avatar.svg" alt="avatar" className="w-16 m-auto" />
        <h1 className="text-white/90 text-md font-poppins font-medium text-center mt-2">
          &copy; 2023. No copyright issues. Project code is open source. Feel
          free to fork and make your own version.
        </h1>
      </footer>
    </>
  );
}