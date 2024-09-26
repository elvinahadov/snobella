import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { FiFacebook, FiInstagram } from "react-icons/fi";

const SubFooter = () => {
  return (
    <footer className="">
      <div className="container max-w-[1128px] mx-auto py-[22px] flex items-center justify-between">
        <div className="text-[#212121] text-opacity-75">
          © 2020. All rights reserved.
        </div>
        <div>
          <div className="flex gap-8">
            <FiInstagram className="text-[20px] text-[#212121]"/>
            <FiFacebook className="text-[20px] text-[#212121]"/>
            <FaWhatsapp className="text-[20px] text-[#212121]"/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;
