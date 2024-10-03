import React from "react";

const SingleCartProduct = ({name,image,size,color,price,count}) => {
  return (
    <div className="container max-w-[744px] border-[#E4E4E4] rounded-lg border-[1px] p-4 flex gap-6">
      <div className="p-4 bg-[#F9F9F9] rounded-lg w-[150px] h-[180px] flex justify-center">
        <img src={image} alt="" className="rounded-lg"/>
      </div>
      <div className="flex flex-col">
        <div className="flex w-[534px] justify-between">
          <p className="font-medium text-[#212121] text-[16px]">
            {name}
          </p>
          <p className="text-[18px] font-medium text-[#212121]">US ${(price*count).toFixed(2)}</p>
        </div>
        <div className="flex items-center gap-6 mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Size : {size}
          </p>
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Color : {color}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">
            Count : {count}
          </p>
        </div>
        <div className="mb-2">
          <p className="text-[#212121] text-opacity-75 text-[14px]">Quality</p>
        </div>
        <div>
          <select>
            <option>2-9</option>
            <option>10-49</option>
            <option>50</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SingleCartProduct;
