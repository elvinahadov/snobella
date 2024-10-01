import React from "react";

const SingleCartProduct = () => {
  return (
    <div className="container max-w-[744px] border-[#E4E4E4] rounded-lg border-[1px] p-4 flex gap-6">
      <div className="p-4 bg-[#F9F9F9] rounded-lg w-[150px] h-[180px]">
        <img src="" alt="" />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <p className="font-medium text-[#212121] text-[16px]">
            Hotel Magique Love and Magique Tote Bag
          </p>
          <p className="font-medium text-[#212121] text-[18px]">US $20.00</p>
        </div>
        <div className="flex items-center gap-6 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">Size : XS</p>
          <p className="text-[#212121] text-opacity-75 text-[14px]">Color : Grey</p>
        </div>
        <div>
          <p className="text-[#212121] text-opacity-75 text-[14px]">Delivery : 25-32 days</p>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
