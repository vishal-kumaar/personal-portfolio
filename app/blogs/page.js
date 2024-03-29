"use client";

import React, { useEffect } from "react";
import NoResultFound from "../../components/NoResultFound";
import Pagination from "../../components/Pagination";
import { useSearchParams, redirect } from "next/navigation";
import Image from "next/image";
import user from "@/portfolio/user";
import pageDescriptions from "@/portfolio/pageDesc.";
import blogs from "@/portfolio/blogs";

export default function Blog() {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    const metaTag = document.querySelector('meta[name="description"]');
    document.title = `Blogs | ${user.name}`;
    metaTag.setAttribute("content", pageDescriptions.blogs);
  }, []);

  useEffect(
    () => {
      if (!page || page <= 0) {
        redirect("?page=1");
      }
    },
    // eslint-disable-next-line
    [page]
  );

  if (!page) {
    return null;
  }

  if (blogs.length === 0) {
    return <NoResultFound />;
  }

  const numOfBlogsInPage = 8;

  const blogObj = blogs.slice(
    numOfBlogsInPage * (page - 1),
    page * numOfBlogsInPage
  );

  if (blogObj.length === 0) {
    return <NoResultFound />;
  }

  return (
    <div className={`py-14 px-5 md:px-10`}>
      <div className="mx-auto w-fit">
        <h1 className="mb-4 text-3xl font-signika text-black">Blogs</h1>
        <hr className="border-black/40" />
        {blogObj.map((blog, index) => (
          <div
            key={index}
            className="flex mt-12 items-center flex-col-reverse sm:flex-row">
            <div className="mr-10">
              <h1 className="font-signika text-2xl text-black mt-2">
                {blog.title}
              </h1>
              <div className="flex items-center mt-2 mb-3">
                <p className="text-red-500 font-bold font-poppins text-sm mr-5">
                  {blog.date}
                </p>
                <div className="flex items-center">
                  <Image
                    src="./images/clock.svg"
                    alt=""
                    width={100}
                    height={100}
                    className="w-4 invert"
                  />
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
            <Image
              src={blog.coverImg}
              alt="blog-img"
              width={288}
              height={0}
              className="border rounded-lg mb-4 sm:mb-0 w-full sm:w-72"
            />
          </div>
        ))}
        <Pagination totalPages={Math.ceil(blogs.length / numOfBlogsInPage)} />
      </div>
    </div>
  );
}
