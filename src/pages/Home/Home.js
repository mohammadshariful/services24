import React from "react";
import BannerSection from "./BannerSection";
import SameDayServices from "./SameDayServices";
import TrendingServices from "./TrendingServices";

const Home = () => {
  return (
    <>
      <BannerSection />
      <TrendingServices />
      <SameDayServices />
    </>
  );
};

export default Home;
