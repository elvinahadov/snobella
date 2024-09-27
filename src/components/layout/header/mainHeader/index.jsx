import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";

const MainHeader = () => {
  const navElements = [
    { title: "Evening bags", href: "/eveningBags" },
    { title: "Shoulder bag", href: "/shoulderBags" },
    { title: "Backpacks", href: "/backpacks" },
    { title: "Handbag", href: "/handbag" },
    { title: "Postman bag", href: "/postmanBag" },
    { title: "Belt bags", href: "/beltBags" },
  ];

  return (
    <section className="py-6">
      <div className="container max-w-[1128px] flex mx-auto flex-col gap-8">
        <div className="flex items-center gap-[60px]">
          <div>
            <Link to={"/"}>
              <h1 className="text-[40px] font-bold ">Snobella</h1>
            </Link>
          </div>
          <div className="relative">
            <div className="absolute right-4 top-3">
              <IoSearchSharp className="text-2xl text-[#273142BF]" />
            </div>
            <input
              type="text"
              className="bg-[#F7F9FC] pl-4 pr-[341px] py-[15px] rounded-[8px] placeholder:"
              placeholder="Search all products"
            />
          </div>

          <div className="flex gap-[26px] items-center">
            <div className="flex gap-2.5 items-center">
              <div>
                <IoPersonOutline className="text-2xl text-[#273142E5]" />
              </div>
              <div>
                <p className="text-[14px] font-[500px] text-[#2E2E2E]">
                  Sign up
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center">
              <div>
                <IoMdHeartEmpty className="text-2xl text-[#273142E5]" />
              </div>
              <div>
                <p className="text-[14px] font-[500px] text-[#2E2E2E]">
                  Wishlist
                </p>
              </div>
            </div>
            <div className="flex gap-2.5 items-center">
              <div>
                <HiOutlineShoppingBag className="text-2xl text-[#273142E5]" />
              </div>
              <div>
                <p className="text-[14px] font-[500px] text-[#2E2E2E]">
                  Basket
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex gap-[54px] items-center">
            {navElements.map((item) => (
              <li className="text-[#273142] font-[400px] text-[16px]">
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainHeader;
