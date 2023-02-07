import React from "react";
import vishalKumar from "../assets/images/vishalKumar.png"

export default function Home(props) {
  return (
    <div className={`px-5 flex justify-between items-center flex-col-reverse ${props.opacity}`}>
      <div className="py-6">
        <div className="text-gray-300 text-lg font-[monospace] mb-4">Welcome to my porfolio site!</div>
        <div className="">
          <div className="text-red-600 text-5xl font-signika mb-3">Vishal Kumar</div>
          <div className="text-white text-4xl font-medium mb-4 font-[arial]">a Web Developer</div>
        </div>
        <div className="text-gray-400 text-lg font-medium">
          Building a successful product is a challenge. I am highly energetic in
          user experience design, interfaces and web development.
        </div>
      </div>
      <div className="py-6">
        <img src={vishalKumar} alt="vishal-kumar" className="w-96"/>
      </div>
    </div>
  );
}