import React, { useEffect, useState } from "react";
import SingleProduct from "../../common/singleProduct";
import useStore from "../../../store/store";

const BagsList = () => {
  const [bags, setBags] = useState([]);
  const [filteredBags, setFilteredBags] = useState([]);
  const selectedCategoryId = useStore((state) => state.selectedCategoryId);

  const fetchData = async () => {
    const response = await fetch("http://localhost:3001/bags");
    const result = await response.json();
    setBags(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() =>{
    if(!selectedCategoryId){
      setFilteredBags(bags);
    } else {
      setFilteredBags(bags.filter(bag => Number(bag.categoryId) === Number(selectedCategoryId)));
    }
   },[selectedCategoryId, bags]);

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
