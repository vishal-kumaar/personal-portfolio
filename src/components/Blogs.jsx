import React, { useState } from "react";
import { blogs } from "../utils/portfolio";
import clock from "../assets/images/clock.svg";
import Pagination from "./Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export default function Blog(props) {
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  let page = Number(searchParams.get("page"));
  if (!page) {
    page = 1;
  }

  const handleLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1);
  };

  useEffect(
    () => {
      searchParams.set("page", page);
      setSearchParams(searchParams);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(() => {
    handleLoading();
  }, [page]);

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
            <hr className="border-black/40" />
            {blogs.length > 0 &&
              blogs.slice(6 * (page - 1), page * 6).map((blog, index) => (
                <div
                  key={index}
                  className="flex mt-12 items-center flex-col-reverse sm:flex-row"
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
                      {blog.brief}{" "}
                      <span className="text-blue-500">
                        <a href={blog.link}>read more</a>
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
            <Pagination totalPages={Math.ceil(blogs.length / 6)} />
          </div>
        </div>
      )}
    </>
  );
}
