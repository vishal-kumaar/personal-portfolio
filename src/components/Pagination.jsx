import React from "react";
import { useSearchParams } from "react-router-dom";
import nextIcon from "../assets/images/next.svg";

export default function Pagination({ totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));

    // const handlePage = move => {
    //     if (move === "prev"){
    //         searchParams.set("page", page + 1);
    //     }
    //     else{
    //         searchParams.set("page", p + )
    //     }
    // }

  return (
    <div className="flex justify-between font-signika mt-10">
      <button
        onClick={() => {
          searchParams.set("page", page - 1);
          setSearchParams(searchParams);
        }}
        className={`${
          page === 1 ? "invisible" : "visible"
        } flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}
      >
        <img
          src={nextIcon}
          alt="previous"
          className="rotate-180 invert w-3 h-3 mr-[5px]"
        />
        <p>Previous</p>
      </button>
      <button
        onClick={() => {
          searchParams.set("page", page + 1);
          setSearchParams(searchParams);
        }}
        className={`${
          totalPages === page ? "invisible" : "visible"
        } flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}
      >
        <p>Next</p>
        <img src={nextIcon} alt="next" className="invert w-3 h-3 ml-[5px]" />
      </button>
    </div>
  );
}
