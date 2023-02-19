import React, { useEffect, useRef, useState } from "react";
import { skills } from "../utils/portfolio";

export default function Skills() {
  const myRef = useRef();
  const [animate, setAnimate] = useState("-translate-x-full");

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setAnimate("animate-fadeInLeft");
      }
    });
    observer.observe(myRef.current);
  }, [animate]);

  return (
    <div className="my-20 md:flex md:flex-col items-center mx-4">
      <h1 className="text-2xl font-semibold font-firasans mb-10 md:mb-6 md:w-[70%]">
        Technical Skills
      </h1>
      <div ref={myRef} className="md:w-[70%]">
        {skills &&
          skills.map((skill, index) => (
            <div className="flex flex-col my-5 overflow-hidden" key={index}>
              <p className="mb-3 font-signika text-black/70">{skill.name}</p>
              <div className="relative rounded-lg h-3 w-full md:w-full text-lg border border-white/70 flex items-center bg-transparent">
                <p
                  className={`absolute -top-6 text-right text-red-900 text-md font-mono font-semibold overflow-hidden ${animate}`}
                  style={{ width: skill.proficiency }}
                >
                  {skill.proficiency}
                </p>
                <div
                  style={{ width: skill.proficiency }}
                  className={`bg-red-900 rounded-lg h-2 ${animate}`}
                ></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
