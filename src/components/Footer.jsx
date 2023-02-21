import React from "react";
import avatar from "../assets/images/avatar.svg";
import Seperator from "./Seperator";

export default function Footer(props) {
  return (
    <>
      <Seperator rotate={"rotate-180"} opacity={props.opacity} />
      <footer
        className={`py-10 bg-gradient-to-r from-sky-500 to-indigo-500 ${props.opacity}`}
      >
        <img src={avatar} alt="avatar" className="w-16 m-auto" />
        <h1 className="text-white/90 text-md font-poppins font-medium text-center mt-2">
          &copy; 2023. No copyright issues. Project code is open source. Feel
          free to fork and make your own version.
        </h1>
      </footer>
    </>
  );
}
