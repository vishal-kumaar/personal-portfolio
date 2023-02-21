import React, { useState } from "react";
import { blogs } from "../utils/portfolio";
import nextIcon from "../assets/images/next.svg";

export default function Blog() {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(4);
  const [nextBtn, setNextBtn] = useState("visible");
  const [prevBtn, setPrevBtn] = useState("invisible");

  const scrollToTop = () => {
    window.scrollTo({
      top: 10,
      behavior: "smooth",
    });
  };

  const nextBlog = () => {
    if (lastIndex + 4 >= blogs.length) {
      setNextBtn("invisible");
    }
    setFirstIndex(lastIndex);
    setLastIndex(lastIndex + 4);
    setPrevBtn("visible");
    scrollToTop();
  };

  const previousBlog = () => {
    if (firstIndex === 4) {
      setPrevBtn("invisible");
    }
    setLastIndex(firstIndex);
    setFirstIndex(firstIndex - 4);
    setNextBtn("visible");
    scrollToTop();
  };

  return (
    <div className="px-4 md:px-10 py-14 bg-white">
      <h1 className="mb-4 text-3xl font-signika text-black">Blogs</h1>
      <hr className="border-black/40" />
      <div className="flex flex-wrap justify-between">
        {blogs &&
          blogs.slice(firstIndex, lastIndex).map((blog, index) => (
            <a
              href={blog.link}
              target="_blank"
              rel="noreferrer"
              key={index}
              className="w-full md:w-[48%] mt-10 p-4 rounded-lg bg-black/5 mb-10 hover:shadow-2xl hover:scale-105 hover:bg-black/0 transition ease-in-out duration-300"
            >
              <img
                src={blog.coverImg}
                alt={blog.title}
                className="w-full rounded-xl"
              />
              <div className="flex justify-between mt-3">
                <p className="text-red-600 font-medium font-poppins text-base">
                  {blog.date}
                </p>
                <p className="text-black font-bold font-poppins">
                  {blog.readTime}
                </p>
              </div>
              <h1 className="font-signika text-xl mt-2">{blog.title}</h1>
              <p className="font-firasans text-base text-black">
                {blog.subtitle}
              </p>
            </a>
          ))}
      </div>
      {blogs.length > 4 && (
        <div className="flex justify-between font-signika">
          <button
            onClick={previousBlog}
            className={`${prevBtn} flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}
          >
            <img
              src={nextIcon}
              alt="previous"
              className="rotate-180 invert w-3 h-3 mr-[5px]"
            />
            <p>Previous</p>
          </button>
          <button
            onClick={nextBlog}
            className={`${nextBtn} flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}
          >
            <p>Next</p>
            <img
              src={nextIcon}
              alt="next"
              className="invert w-3 h-3 ml-[5px]"
            />
          </button>
        </div>
      )}
    </div>
  );
}