import React from "react";
import Hero from "../../../assets/pictures/heroSec.svg"


const HeroSection = () => {
  return (
    <section className="bg-[#FFE2E0]">
      <div className="container max-w-[1128px] mx-auto py-[50px] flex justify-between items-center gap-[110px]">
        <div className="w-[453px]">
          <p className="text-[#DF4244] text-[24px] font-medium text-left">
            30% off
          </p>
          <h1 className="text-[#212121] text-[40px] font-bold text-left mb-2">
            Handbag products
          </h1>
          <p className="text-[#212121] text-opacity-75 text-[16px] text-left mb-12">
            It is a long established fact that a reader will be distracted by
            the readable content expound the actual teachings of the great
            explorer
          </p>
          <button className="bg-[#206363] text-white py-3 px-[56px] rounded-lg text-[16px] font-medium">Shop now</button>
        </div>
        <div className="">
            <img src={Hero}/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
