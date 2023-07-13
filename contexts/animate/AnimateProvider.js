"use client";

import React, { useState } from "react";
import AnimateContext from "./AnimateContext";

export default function AnimateProvider({ children }) {
  const [isAnimate, setAnimate] = useState([]);

  const addElements = (length) => {
    const initialArr = Array.from({ length }, () => false);
    setAnimate(initialArr);
  };

  const addAnimate = (elemRefs) => {
    elemRefs.current.forEach((elemRef, index) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setAnimate((prevAnimate) => {
            const updatedAnimate = [...prevAnimate];
            updatedAnimate[index] = true;
            return updatedAnimate;
          });
        }
      });
      observer.observe(elemRef);
    });
  };

  return (
    <AnimateContext.Provider value={{ isAnimate, addElements, addAnimate }}>
      {children}
    </AnimateContext.Provider>
  );
}
