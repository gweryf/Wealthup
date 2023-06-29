import React from "react";
import { IoCheckboxOutline } from "react-icons/io5";
import iphone from "@/public/iphone.png";
import Image from "next/image";
export default function Header() {
  return (
    <section className=" relative flex gap-2 w-full flex-col items-center min-h-[700px] py-24 bg-gradient-to-br from-first-blue to-second-blue">
      <h1 className="font-bold text-5xl">Check your financial health</h1>
      <div className=" text-xl font-light">
        Use your WealthoMeter to get a free report card for your finances within
        minutes!
      </div>
      <button className=" bg-color-orange px-5 mb-16 py-2 mt-4 rounded-2xl font-semibold shadow-xl cursor-pointer">
        Get Started
      </button>
      <div className=" w-full flex justify-around items-center mt-16">
        <div className=" flex flex-col gap-5 items-center">
          <div className=" flex gap-1 justify-center items-center">
            <IoCheckboxOutline size="25px" />
            <p className=" text-xl font-semibold border-b-2 py-3">
              Expected Retirement Age
            </p>
          </div>
          <div className=" flex gap-1 justify-center items-center">
            <IoCheckboxOutline size="25px" />
            <p className=" text-xl font-semibold border-b-2 py-3">
              Identify Mistakes
            </p>
          </div>
        </div>

        <div className=" flex flex-col gap-5 items-center">
          <div className=" flex gap-1 justify-center items-center">
            <IoCheckboxOutline size="25px" />
            <p className=" text-xl font-semibold border-b-2 py-3">
              Personalised Roadmap
            </p>
          </div>
          <div className=" flex gap-1 justify-center items-center">
            <IoCheckboxOutline size="25px" />
            <p className=" text-xl font-semibold border-b-2 py-3">
              Tips to Improve
            </p>
          </div>
        </div>
      </div>
      <Image
        src={iphone}
        alt="phone"
        className=" absolute mx-auto bottom-0 w-96 h-96"
      />
      <div className=" spacer layer1 bg-gradient-to-br from-first-blue to-second-blue"></div>
    </section>
  );
}
