import React from "react";
import BannerSection from "./BannerSection";
import HomeApplication from "./HomeApplication";
import PeaceMind from "./PeaceMind";
import Safe from "./Safe";
import SameDayServices from "./SameDayServices";
import Testimonial from "./Testimonial";
import TrendingServices from "./TrendingServices";

const Home = () => {
  return (
    <>
      <BannerSection />
      <TrendingServices />
      <SameDayServices />
      <Safe />
      <PeaceMind />
      <HomeApplication />
      <Testimonial />
    </>
  );
};

export default Home;
