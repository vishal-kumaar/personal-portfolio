"use client";

import React, { useContext, useEffect, useRef } from "react";
import Seperator from "./Seperator";
import technicalSkills from "@/portfolio/technicalSkills";
import softSkills from "@/portfolio/softSkills";
import AnimateContext from "@/contexts/animate/AnimateContext";

export default function Skills() {
  const refs = useRef([]);
  const { isAnimate, addElements, addAnimate } = useContext(AnimateContext);

  useEffect(() => {
    addElements(2);
    addAnimate(refs);
  }, []);

  return (
    <>
      <Seperator rotate={"rotate-0"} />
      <div className={`px-6`}>
        <div className="md:flex md:flex-col items-center py-14">
          <h1 className="text-2xl font-semibold font-firasans mb-10 md:mb-6 md:w-[70%]">
            Technical Skills
          </h1>
          <div
            ref={(myRef) => {
              refs.current.push(myRef);
            }}
            className="md:w-[70%]">
            {technicalSkills &&
              technicalSkills.map((skill, index) => (
                <div className="flex flex-col my-5 overflow-hidden" key={index}>
                  <p className="mb-4 font-signika font-semibold text-black/70">
                    {skill.name}
                  </p>
                  <div className="relative rounded-lg h-3 w-full md:w-full text-lg border border-black/70 flex items-center bg-transparent">
                    <p
                      className={`absolute -top-6 text-right text-red-900 text-md font-mono font-semibold overflow-hidden ${
                        isAnimate[0]
                          ? "animate-fadeInLeft"
                          : "-translate-x-full"
                      }`}
                      style={{ width: skill.proficiency }}>
                      {skill.proficiency}
                    </p>
                    <div
                      style={{ width: skill.proficiency }}
                      className={`bg-red-900 rounded-lg h-2 ${
                        isAnimate[0]
                          ? "animate-fadeInLeft"
                          : "-translate-x-full"
                      }`}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <hr className="border-black" />
        <div className="md:flex md:flex-col items-center py-14">
          <h1 className="text-2xl font-semibold font-firasans mb-10 md:mb-6 md:w-[70%]">
            Soft Skills
          </h1>
          <div
            ref={(myRef) => {
              refs.current.push(myRef);
            }}
            className="md:w-[70%]">
            {softSkills &&
              softSkills.map((skill, index) => (
                <div className="flex flex-col my-5 overflow-hidden" key={index}>
                  <p className="mb-4 font-signika font-semibold text-black/70">
                    {skill.name}
                  </p>
                  <div className="relative rounded-lg h-3 w-full md:w-full text-lg border border-black/70 flex items-center bg-transparent">
                    <p
                      className={`absolute -top-6 text-right text-red-900 text-md font-mono font-semibold overflow-hidden ${
                        isAnimate[1]
                          ? "animate-fadeInLeft"
                          : "-translate-x-full"
                      }`}
                      style={{ width: skill.proficiency }}>
                      {skill.proficiency}
                    </p>
                    <div
                      style={{ width: skill.proficiency }}
                      className={`bg-red-900 rounded-lg h-2 ${
                        isAnimate[1]
                          ? "animate-fadeInLeft"
                          : "-translate-x-full"
                      }`}></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
