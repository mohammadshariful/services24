import React from "react";
import BannerSection from "./BannerSection";
import HomeApplication from "./HomeApplication";
import PeaceMind from "./PeaceMind";
import PeopleChoice from "./PeopleChoice";
import Safe from "./Safe";
import SameDayServices from "./SameDayServices";
import Stump from "./Stump";
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
      <PeopleChoice />
      <Testimonial />
      <Stump />
    </>
  );
};

export default Home;
