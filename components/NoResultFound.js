import React from "react";

export default function NoResultFound() {
  return (
    <div className="w-full h-[50vh] flex-col flex justify-center items-center mr-4">
      <h1 className="text-4xl font-bold mb-4">No Results Found</h1>
      <p className="text-gray-600 ml-4">
        Sorry, we couldn&#39;t find any results related to this page.
      </p>
    </div>
  );
}