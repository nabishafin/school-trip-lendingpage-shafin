import Image from "next/image";
import React from "react";

const DynamicBanner = ({ img, text }) => {
  return (
    <div className="bg-gradient-to-r from-[#8f9e93] to-white w-full">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full md:w-10/12 mx-auto px-10 py-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center md:text-left leading-tight">
          {text}
        </h1>
        <div className="flex justify-center items-center">
          <Image
            src={img}
            alt="Banner Icon"
            width={500}
            height={500}
            priority
            className="w-60 md:w-[300px] lg:w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default DynamicBanner;
