import Image from "next/image";
import React from "react";

export default function Seperator(props) {
  return (
    <div
      className={`bg-gradient-to-r from-sky-500 to-indigo-500`}
    >
      <Image height={0} width={100} src="./images/seperator.svg" alt="" className={`${props.rotate} w-full h-10`} />
    </div>
  );
}