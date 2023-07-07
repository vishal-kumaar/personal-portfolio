import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

export default function Pagination({ totalPages }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));

  const updateSearchParams = (param, value) => {
    const params = new URLSearchParams(router.query);
    params.set(param, value);

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-between font-signika mt-10">
      <button
        onClick={() => {
          updateSearchParams("page", page - 1);
        }}
        className={`${
          page === 1 ? "invisible" : "visible"
        } flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}>
        <Image
          src="./images/next.svg"
          alt="previous"
          height={0}
          width={12}
          className="rotate-180 invert w-3 h-3 mr-[5px]"
        />
        <p>Previous</p>
      </button>
      <button
        onClick={() => {
          updateSearchParams("page", page + 1);
        }}
        className={`${
          totalPages === page ? "invisible" : "visible"
        } flex items-center bg-blue-700 hover:bg-blue-500 shadow-xl py-1 px-2 text-white ouline-white border-none rounded`}>
        <p>Next</p>
        <Image
          src="./images/next.svg"
          alt="next"
          height={0}
          width={12}
          className="invert w-3 h-3 ml-[5px]"
        />
      </button>
    </div>
  );
}
