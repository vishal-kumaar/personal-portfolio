import React from "react";
import seperator from "../assets/images/seperator.svg";

export default function Seperator(props) {
  return (
    <div
      className={`${props.opacity} bg-gradient-to-r from-sky-500 to-indigo-500 transition-opacity ease-in-out duration-500`}
    >
      <img src={seperator} alt="" className={`${props.rotate} w-full h-10`} />
    </div>
  );
}
