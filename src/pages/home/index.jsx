import React from "react";
import HeroSection from "../../components/home/hero/index";
import GraySec from "../../components/home/graySec";
import CategoriesSec from "../../components/home/categoriesSec";

const Home = () => {
  return (
    <section>
      <HeroSection />
      <GraySec/>
      <CategoriesSec/>
    </section>
  );
};

export default Home;
