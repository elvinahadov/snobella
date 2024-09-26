import React from "react";
import { BsTelephone  } from "react-icons/bs";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <section className="bg-[#007878] py-3  justify-between w-full h-[48px]">
      <div className=" container max-w-[1128px] flex justify-between mx-auto">
      <div className="flex gap-3 items-center">
        <div>
            <BsTelephone  className="text-2xl text-white"/>
        </div>
        <div>
            <span className="text-white font-[500px] text-[14px]">+748 383 23 14</span>
        </div>
      </div>
      <div className="flex gap-[18px]">
            <p className="font-[500px] text-white">Terms of Use</p>
            <p className="font-[500px] text-white border-x-2 border-white px-[18px]">FAQ</p>
            <p className="font-[500px] text-white">Customer Service</p>
      </div>
      </div>
    </section>
  );
};

export default SubHeader;
