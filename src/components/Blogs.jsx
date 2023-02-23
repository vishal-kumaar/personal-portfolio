import React, { useState } from "react";
import { blogs } from "../utils/portfolio";
import nextIcon from "../assets/images/next.svg";

export default function Blog(props) {
  const [firstIndex, setFirstIndex] = useState(0);
  const [lastIndex, setLastIndex] = useState(9);
  const [nextBtn, setNextBtn] = useState("visible");
  const [prevBtn, setPrevBtn] = useState("invisible");
  const [isLoading, setLoading] = useState(false);

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  };

  const nextBlog = () => {
    if (lastIndex + 9 >= blogs.length) {
      setNextBtn("invisible");
    }
    setFirstIndex(lastIndex);
    setLastIndex(lastIndex + 9);
    setPrevBtn("visible");
    handleLoading();
  };

  const previousBlog = () => {
    if (firstIndex === 9) {
      setPrevBtn("invisible");
    }
    setLastIndex(firstIndex);
    setFirstIndex(firstIndex - 9);
    setNextBtn("visible");
    handleLoading();
  };

  return (
    <>
      {isLoading ? (
        <div className="py-14 bg-white"></div>
      ) : (
        <div
          className={`${props.opacity} py-14 bg-white transition-opacity ease-in-out duration-500`}
        >
          <h1 className="mb-4 text-3xl font-signika text-black mx-4 md:mx-10">
            Blogs
          </h1>
          <hr className="border-black/40 mx-4 md:mx-10" />
          <div className="flex flex-wrap">
            {blogs &&
              blogs.slice(firstIndex, lastIndex).map((blog, index) => (
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                  className="w-full sm:w-[44%] lg:w-[28%] mx-4 sm:mx-[3%] lg:mx-[2.66%] mt-10 p-4 rounded-lg bg-black/5 mb-4 hover:shadow-2xl hover:scale-105 hover:bg-black/0 transition ease-in-out duration-300"
                >
                  <img
                    src={blog.coverImg}
                    alt={blog.title}
                    className="w-full rounded-xl"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-teal-700 font-medium font-poppins text-base">
                      {blog.date}
                    </p>
                    <p className="text-red-500 text-sm font-bold font-poppins">
                      {blog.readTime}
                    </p>
                  </div>
                  <h1 className="font-signika text-xl text-black mt-2">
                    {blog.title}
                  </h1>
                  <p className="font-firasans text-base text-slate-600">
                    {blog.subtitle}
                  </p>
                </a>
              ))}
          </div>
          {blogs.length > 9 && (
            <div className="flex justify-between font-signika mx-4 md:mx-10 mt-10">
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
      )}
    </>
  );
}
