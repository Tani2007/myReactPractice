import { useState } from "react";

export default function Content({ data, loading }) {
  if (loading) {
    return (
      <div className=" bg-gray-300 flex  items-center justify-center h-110">
        <h1 className="font-bold text-5xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          What Up New User ?
        </h1>
      </div>
    );
  } else if (!loading) {
    return (
      <div className=" bg-gray-300 flex   h-110 ">
        <div className="h-full  overflow-x-auto bg-scroll px-2">{data}</div>
      </div>
    );
  }
}
