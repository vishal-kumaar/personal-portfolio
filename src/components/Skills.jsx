import React, { useEffect, useRef, useState } from "react";
import { technicalSkills, softSkills } from "../utils/portfolio";
import Seperator from "./Seperator";

export default function Skills(props) {
  const myRef1 = useRef();
  const myRef2 = useRef();
  const [animate1, setAnimate1] = useState("-translate-x-full");
  const [animate2, setAnimate2] = useState("-translate-x-full");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAnimate1("animate-fadeInLeft");
      }
    });
    observer.observe(myRef1.current);
  }, [animate1]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAnimate2("animate-fadeInLeft");
      }
    });
    observer.observe(myRef2.current);
  }, [animate2]);

  return (
    <>
      <Seperator rotate={"rotate-0"} opacity={props.opacity} />
      <div className={`px-6 bg-white ${props.opacity} transition-opacity duration-500 ease-in-out`}>
        <div className="md:flex md:flex-col items-center py-14">
          <h1 className="text-2xl font-semibold font-firasans mb-10 md:mb-6 md:w-[70%]">
            Technical Skills
          </h1>
          <div ref={myRef1} className="md:w-[70%]">
            {technicalSkills &&
              technicalSkills.map((skill, index) => (
                <div className="flex flex-col my-5 overflow-hidden" key={index}>
                  <p className="mb-4 font-signika font-semibold text-black/70">
                    {skill.name}
                  </p>
                  <div className="relative rounded-lg h-3 w-full md:w-full text-lg border border-black/70 flex items-center bg-transparent">
                    <p
                      className={`absolute -top-6 text-right text-red-900 text-md font-mono font-semibold overflow-hidden ${animate1}`}
                      style={{ width: skill.proficiency }}
                    >
                      {skill.proficiency}
                    </p>
                    <div
                      style={{ width: skill.proficiency }}
                      className={`bg-red-900 rounded-lg h-2 ${animate1}`}
                    ></div>
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
          <div ref={myRef2} className="md:w-[70%]">
            {softSkills &&
              softSkills.map((skill, index) => (
                <div className="flex flex-col my-5 overflow-hidden" key={index}>
                  <p className="mb-4 font-signika font-semibold text-black/70">
                    {skill.name}
                  </p>
                  <div className="relative rounded-lg h-3 w-full md:w-full text-lg border border-black/70 flex items-center bg-transparent">
                    <p
                      className={`absolute -top-6 text-right text-red-900 text-md font-mono font-semibold overflow-hidden ${animate2}`}
                      style={{ width: skill.proficiency }}
                    >
                      {skill.proficiency}
                    </p>
                    <div
                      style={{ width: skill.proficiency }}
                      className={`bg-red-900 rounded-lg h-2 ${animate2}`}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
