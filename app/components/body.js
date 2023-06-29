import React from "react";
import { PiNotePencilThin } from "react-icons/pi";
import { MdPhonelinkLock } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
export default function Body() {
  return (
    <section className=" relative flex flex-col gap-5 items-center min-h-[300px] py-24 bg-third-blue">
      <h1 className="font-bold text-4xl">How it works?</h1>
      <div className=" grid grid-cols-5 mx-60 gap-1">
        <div className=" flex flex-col gap-1 justify-center items-center">
          <PiNotePencilThin size="40px" />
          <p className=" text-center">Answer Few Questions</p>
        </div>
        <div className=" flex justify-center items-center">
          <div className="border-t-2 border-dashed w-full"></div>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <MdPhonelinkLock size="40px" />
          <p className=" text-center">Register using phone and OTP</p>
        </div>
        <div className=" flex justify-center items-center">
          <div className="border-t-2 border-dashed w-full"></div>
        </div>
        <div className=" flex flex-col gap-1 justify-center items-center">
          <TbReportAnalytics size="40px" />
          <p className=" text-center">Get report and personal roadmap</p>
        </div>
      </div>
      <button className=" bg-color-orange px-5 mb-16 py-2 mt-4 rounded-2xl font-semibold shadow-xl cursor-pointer">
        Get Started
      </button>
    </section>
  );
}
