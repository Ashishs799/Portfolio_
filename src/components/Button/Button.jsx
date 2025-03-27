import React from "react";
import { BsDownload } from "react-icons/bs";

const Button = ({ label }) => {
  return (
    <div>
      <button
        type="button"
        className=" text-xs 2xl:text-[16px] px-6 py-2 2xl:py-3 flex justify-between items-center gap-x-2 2xl:px-10 text-pink-100 border border-pink-800 hover:bg-pink-800 transition delay-75 duration-200 ease-in cursor-pointer"
      >
        {label}
        <BsDownload/>
      </button>
    </div>
  );
};

export default Button;
