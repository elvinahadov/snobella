import React from "react";
import SingleCartProduct from "../singleCartProducts";

const CartProducts = () => {
  return (
    <section className="container max-w-[1128px]">
      <h1 className="text-[40px] text-[#212121] font-bold mb-12">
        Shopping bag
      </h1>
      <div className="flex flex-col gap-6">
        <SingleCartProduct />
        <SingleCartProduct />
        <SingleCartProduct />
      </div>
    </section>
  );
};

export default CartProducts;
