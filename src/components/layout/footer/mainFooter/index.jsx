import React from "react";
import { IoPaperPlaneOutline, IoSearchSharp } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const MainFooter = () => {
  const shopList = [
    { title: "Shoulder Bag", href: "" },
    { title: "Backpack", href: "" },
    { title: "Tote Bag", href: "" },
    { title: "Hand Bag", href: "" },
    { title: "Evening bags", href: "" },
    { title: "Purse", href: "" },
  ];
  const companyList = [
    { title: "About us", href: "" },
    { title: "Contact", href: "" },
    { title: "Terms of Use", href: "" },
    { title: "Customer service", href: "" },
  ];
  const helpList = [
    { title: "FAQ", href: "" },
    { title: "Delivery", href: "" },
    { title: "Cancellation of the order", href: "" },
    { title: "Don't go back", href: "" },
  ];
  return (
    <footer className="bg-[#F7F7F9]">
      <div className="container max-w-[1128px] flex mx-auto py-9">
        <div className="flex w-full justify-between items-center">
          <div>
            <h1 className="text-[40px] font-bold">Snobella</h1>
          </div>
          <div className="relative">
            <div className="absolute right-4 top-4">
              <IoSearchSharp className="text-2xl text-[#273142BF]" />
            </div>
            <input
              type="text"
              className="text-[#AAAAAA] border-[1px] border-opacity-25 pl-4 pr-[341px] py-[15px] rounded-[8px] placeholder:text-[#AAAAAA]"
              placeholder="Search all products"
            />
          </div>
        </div>
      </div>
      <div div className=" border-t-2 border-[#273142] border-opacity-15 ">
        <div className="container max-w-[1128px] flex mx-auto py-[56px] justify-between">
          <div className="flex flex-col">
            <div className="mb-10 w-[325px]">
              <p className="text-[#212121] text-opacity-75 text-left">
                The wise man therefore always holds selectionThe wise man
                therefore always rejects pleasures to secure other greater
              </p>
            </div>
            <div className="flex gap-2.5 items-center mb-6">
              <div>
                <FaRegEnvelope className="text-[22px]" />
              </div>
              <div>
                <p className="text-[#212121] text-opacity-75 text-[16px]">
                  Snobella@gmail.com
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-center mb-12">
              <div>
                <BsTelephone className="text-2xl text-black" />
              </div>
              <div>
                <span className="text-[#212121] text-opacity-75 font-[500px] text-[16px]">
                  +748 383 23 14
                </span>
              </div>
            </div>
            <div className="mb-20">
              <button className="text-[#212121] text-opacity-90 px-4 py-2.5 border-[1px] rounded-lg border-[#212121] flex items-center gap-2">
                <IoPaperPlaneOutline className="text-[20px]" />
                Send message
              </button>
            </div>
          </div>
          <div className="flex gap-[120px]">
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-medium text-[#212121]">Shop</h1>
              {shopList.map((item,index) => (
                <p key={index} className="text-[#212121] text-opacity-75 text-[16px]">
                  {item.title}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="text-lg font-medium text-[#212121]">Company</h1>
              {companyList.map((item,index) => (
                <p key={index} className="text-[#212121] text-opacity-75 text-[16px]">
                  {item.title}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-5 w-[120px]">
              <h1 className="text-lg font-medium text-[#212121]">Help</h1>
              {helpList.map((item,index) => (
                <p key={index} className="text-[#212121] text-opacity-75 text-[16px]">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
