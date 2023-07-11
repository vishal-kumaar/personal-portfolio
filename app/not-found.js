import React from "react";

export default function Custom404() {
  return (
    <>
      <head>
        <title>404 page not found</title>
      </head>
      <section className="text-xl font-firasans flex items-center justify-center h-[52vh]">
        <div className="flex items-center gap-5">
          <h1 className="font-signika text-2xl">404</h1>
          <div className="h-10 w-px bg-gray-400"></div>
          <p className="font-roboto text-base">This page could not be found.</p>
        </div>
      </section>
    </>
  );
}
