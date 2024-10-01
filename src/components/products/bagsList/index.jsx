import React, { useEffect, useState } from "react";
import SingleProduct from "../../common/singleProduct";
import useStore from "../../../store/store";

const BagsList = () => {
  const [bags, setBags] = useState([]);
  const selectedCategoryId = useStore((state) => state.selectedCategoryId);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/bags");
    const result = await response.json();
    setBags(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log("Selected Category ID:", selectedCategoryId);
  console.log("Bags:", bags);

  let filteredBags = selectedCategoryId
    ? bags?.filter((bag) => {
        bag.categoryId === selectedCategoryId;
      })
    : bags;

  console.log("Filtered Bags:", filteredBags);
  return (
    <div className="grid grid-cols-2 gap-[23px] ">
      {filteredBags &&
        filteredBags.map((bag) => (
          <SingleProduct
            key={bag.id}
            name={bag.description}
            image={bag.image}
          />
        ))}
    </div>
  );
};

export default BagsList;
