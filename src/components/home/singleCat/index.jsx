import React from "react";
import ReactDOM from "react-dom";

const SingleCategory = ({name,image}) => {
  return (
    <div className="bg-[#F5F5F5] pt-6 pl-6 rounded-lg w-[264px] h-[162px] relative">
      <h1 className="text-black font-medium text-[18px]">{name}</h1>
      <div className="absolute bottom-0 right-0 overflow-hidden rounded-lg">
        <img src={`${image}`}/>
      </div>
    </div>
  );
};

export default SingleCategory;
