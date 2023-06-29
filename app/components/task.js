"use client";
import React from "react";
import { useState } from "react";

export default function Task({ task }) {
  const [btnState, setBtnState] = useState(false);
  const handleComplete = () => {
    setBtnState((btnState) => !btnState);
  };
  let toggleClass = btnState ? "text-light-gray opacity-50" : "";
  return (
    <li
      className={`${toggleClass} w-full h-full border-2 flex justify-between items-center border-light-gray px-1 py-2 rounded-lg`}
      key={task.id}
    >
      {task.value}
      <button
        className=" bg-dirty-green text-ultra-white py-2 px-4 rounded"
        onClick={handleComplete}
      >
        Complete
      </button>
    </li>
  );
}
