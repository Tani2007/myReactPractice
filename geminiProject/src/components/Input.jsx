import axios from "axios";
import { useState } from "react";

export default function Input({ handleSetInput, generateAiAnswer }) {
  function handleInputChange(e) {
    handleSetInput(e);
  }
  return (
    <div className="px-4 mt-10 flex justify-center">
      <input
        onChange={(e) => handleInputChange(e)}
        className="bg-blue-300 w-100 rounded-l-lg h-10 md:w-200 px-3 focus:outline-none"
        type="text"
      />
      <button
        onClick={generateAiAnswer}
        className="bg-blue-500 rounded-r-lg px-2 hover:bg-zinc-600 hover:text-zinc-300 active:bg-zinc-600 active:text-zinc-300 "
      >
        SEARCH
      </button>
    </div>
  );
}
