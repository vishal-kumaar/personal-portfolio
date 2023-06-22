import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full px-8">
      <div>
        <h1 className="text-5xl font-bold font-signika text-gray-800 mb-1.5">
          404
        </h1>
        <p className="text-xl font-roboto text-gray-600 mb-1">
          Oops! Page not found.
        </p>
        <p className="font-firasans text-base text-gray-500">
          The page you are looking for might have been removed or does not
          exist.
        </p>
        <button
          className="mt-5 px-4 py-2 text-white bg-gradient-to-r  from-sky-500 to-indigo-500 rounded-md shadow-md hover:from-sky-600 hover:to-indigo-600 font-poppins font-bold text-base"
          onClick={() => navigate("/")}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
