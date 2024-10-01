import React from "react";
import SingleCartProduct from "../singleCartProducts";

const CartProducts = () => {
  return (
    <section className="container max-w-[1128px]">
      <h1 className="text-[40px] text-[#212121] font-bold mb-12">
        Shopping bag
      </h1>
      <div className="flex gap-6">
        <div className="flex flex-col gap-6">
          <SingleCartProduct />
          <SingleCartProduct />
          <SingleCartProduct />
        </div>
        <div className="flex flex-col gap-6">
          <div className="bg-[#F9F9F9] w-[360px] rounded-lg py-8 px-6 flex flex-col">
            <div className="flex w-[312px] justify-between mb-3">
              <p className="text-[16px] text-[#212121]">Your subtotal</p>
              <p className="text-[16px] text-[#212121]">US $20.00</p>
            </div>
            <div className="flex w-[312px] justify-between mb-5">
              <p className="text-[16px] text-[#212121]">Shipping changes</p>
              <p className="text-[16px] text-[#212121]">Free</p>
            </div>
            <div className="flex w-[312px] justify-between mb-6">
              <p className="text-[18px] font-medium text-[#212121]">Total</p>
              <p className="text-[18px] font-medium text-[#212121]">
                US $20.00
              </p>
            </div>
            <div className="border-dashed w-full border mb-6"></div>
            <div className="relative">
              <input
                type="text"
                className="p-4 border border-[#DBDBDB] rounded-lg w-full relative"
                placeholder="Discount promo code"
              />
              <button className="bg-[#FF695E] h-full rounded-r-lg text-white font-medium py-2.5 px-7 absolute right-0 top-0">
                Apply
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="font-medium text-white bg-[#DF4244] text-center py-4 w-full rounded-lg">Confirm cart</button>
            <button className="font-medium text-[#212121] border border-[#212121] text-center py-4 w-full rounded-lg">Confirm cart</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartProducts;
