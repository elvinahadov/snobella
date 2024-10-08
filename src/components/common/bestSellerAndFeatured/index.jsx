import React, { useEffect, useState } from "react";
import SingleProduct from "../singleProduct";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const BestSellerAndFeatured = ({ title, property }) => {
  const [bags, setBags] = useState([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/bags");
    const result = await response.json();
    
    const filteredData = result.filter(item => item[property] === true);
    setBags(filteredData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-[#fff]">
      <div className="container max-w-[1128px] mx-auto py-[80px] flex flex-col gap-8">
        <div className="flex justify-between items-center">
          <p className="text-[32px] font-medium">{title}</p>
          <div className="flex gap-2 items-center">
            <p className="text-[16px] font-normal">View all products</p>
            <MdOutlineKeyboardArrowRight />
          </div>
        </div>
        <div className="flex justify-between items-center">
          {bags.length > 0 ? (
            bags.slice(0, 3).map((bag) => (
              <SingleProduct
                key={bag.id}
                name={bag.description}
                image={bag.image}
                id={bag.id}
              />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BestSellerAndFeatured;
