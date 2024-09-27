import React, { useEffect, useState } from "react";
import SingleCategory from "../singleCat";
import axios from "axios";

const CategoriesSec = () => {
    const [data,setData]= useState([])

  const getAllData = async () => {
    const res = await axios("http://localhost:3001/bags");
    setData(res?.data);

  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div className="container max-w-[1128px] mx-auto flex items-center justify-between pt-20 pb-24">
      {data &&
        data.map((category, index) => (
          <SingleCategory
            key={index}
            name={category.name}
            image={category.image}
          />
        ))}
    </div>
  );
};

export default CategoriesSec;
