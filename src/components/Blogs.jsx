import React, { useState } from "react";
import { blogs } from "../utils/portfolio";
import nextIcon from "../assets/images/next.svg";
import clock from "../assets/images/clock.svg";

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
          className={`${props.opacity} py-14 px-5 md:px-10 bg-white transition-opacity ease-in-out duration-500`}
        >
          <div className="mx-auto w-fit">
            <h1 className="mb-4 text-3xl font-signika text-black">Blogs</h1>
            <hr className="border-black/40 mb-12 md:mb-0" />
            {blogs &&
              blogs.slice(firstIndex, lastIndex).map((blog, index) => (
                <div
                  key={index}
                  className="flex mt-0 mb-16 md:mt-0 md:mb-16 items-center flex-col-reverse sm:flex-row"
                >
                  <div className="mr-10">
                    <h1 className="font-signika text-2xl text-black mt-2">
                      {blog.title}
                    </h1>
                    <div className="flex items-center mt-2 mb-3">
                      <p className="text-red-500 font-bold font-poppins text-sm mr-5">
                        {blog.date}
                      </p>
                      <div className="flex items-center">
                        <img src={clock} alt="" className="w-4 invert" />
                        <p className="text-green-500 text-sm font-bold font-poppins ml-1">
                          {blog.readTime}
                        </p>
                      </div>
                    </div>
                    <h3 className="font-firasans text-base text-slate-600 max-w-xl">
                      {blog.brief} {" "}
                      <span className="text-blue-500">
                        <a href={blog.link} target="_blank" rel="noreferrer">
                          read more
                        </a>
                      </span>
                    </h3>
                  </div>
                  <img
                    src={blog.coverImg}
                    alt="blog-img"
                    className="border rounded-lg mb-4 sm:mb-0 w-full sm:w-72"
                  />
                </div>
              ))}
            {blogs.length > 9 && (
              <div className="flex justify-between font-signika mt-20">
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
        </div>
      )}
    </>
  );
}
