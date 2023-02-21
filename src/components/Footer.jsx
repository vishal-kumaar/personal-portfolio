import React from "react";
import avatar from "../assets/images/avatar.svg";
import seperator from "../assets/images/seperator.svg";

export default function Footer() {
  return (
    <>
      <img src={seperator} alt="" className="rotate-180 w-full h-10" />
      <footer className="bg-transparent py-10">
        <img src={avatar} alt="avatar" className="w-16 m-auto" />
        <h1 className="text-white/90 text-md font-poppins font-medium text-center mt-2">
          &copy; 2023. No copyright issues. Project code is open source. Feel
          free to fork and make your own version.
        </h1>
      </footer>
    </>
  );
}