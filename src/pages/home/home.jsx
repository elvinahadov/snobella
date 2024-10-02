import React from "react";
import Hero from "../../components/home/hero";
import Delivery from "../../components/home/delivery";
import Category from "../../components/home/category";
import BestSellerAndFeatured from "../../components/common/bestSellerAndFeatured";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Delivery />
      <Category />
      <BestSellerAndFeatured title="Featured Products" property="featured" />
      <BestSellerAndFeatured title="Bestseller" property="bestseller" />
      <BestSellerAndFeatured title="Discount Products" property="discount" />
    </>
  );
};

export default HomePage;
