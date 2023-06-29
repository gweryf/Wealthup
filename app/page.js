"use client";
import Image from "next/image";
import "./globals.css";
import iphone from "@/public/iphone.png";
import { IoCheckboxOutline } from "react-icons/io5";
import { PiNotePencilThin } from "react-icons/pi";
import { MdPhonelinkLock } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { useState } from "react";
import Header from "./components/header";
import Body from "./components/body";
import Task from "./components/task";
export default function Home() {
  const [newItem, setNewItem] = useState("");
  const [tasks, setTasks] = useState([]);
  const [query, setQuery] = useState("");
  const [btnState, setBtnState] = useState(false);

  const handleComplete = () => {
    setBtnState((btnState) => !btnState);
  };
  let toggleClass = btnState ? "text-light-gray opacity-50" : "";

  const getFilteredItems = (query, tasks) => {
    if (!query) return tasks;
    return tasks.filter((task) => task.value.includes(query));
  };

  const filtered = getFilteredItems(query, tasks);
  const addItem = (e) => {
    e.preventDefault();
    if (!newItem) {
      alert("Enter an item");
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setTasks([...tasks, item]);
    console.log(tasks);
    setNewItem("");
  };
  const delTask = (targetId) => {
    const updatedArray = tasks.filter((task) => task.id !== targetId);
    setTasks(updatedArray);
  };
  return (
    <div className="lol">
      <Header />
      <Body />
      <section className=" flex flex-col gap-3 justify-center items-center text-dark-black p-5">
        <h1 className=" text-3xl font-bold">To-Do App</h1>
        <form
          className=" flex items-center justify-center gap-2"
          onSubmit={addItem}
        >
          <input
            className=" border-2 p-2 rounded-md"
            type="text"
            placeholder="Enter a task"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <button
            className=" bg-dark-black text-ultra-white font-semibold px-4 py-2 rounded"
            type="submit"
          >
            Add
          </button>
        </form>
        <input
          className=" border-2 p-2 rounded-md"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className=" w-[300px] grid grid-cols-1 gap-2">
          {filtered.map((task) => {
            return (
              <div className=" flex justify-between items-center gap-2">
                <Task task={task} />
                <div className=" flex justify-center items-center gap-2">
                  <button
                    className=" bg-nice-red text-ultra-white py-2 px-4 rounded"
                    onClick={() => delTask(task.id)}
                  >
                    X
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
