import React from "react";

export default function NoResultFound() {
  return (
    <div className="w-full flex-col flex justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">No Results Found</h1>
      <p className="text-gray-600">
        Sorry, we couldn't find any results related to this page.
      </p>
    </div>
  );
}
