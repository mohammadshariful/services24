import React from "react";
import BannerSection from "./BannerSection";
import Discount from "./Discount";
import ElectricianServices from "./ElectricianServices";
import HomeApplication from "./HomeApplication";
import PeaceMind from "./PeaceMind";
import PeopleChoice from "./PeopleChoice";
import RefferLink from "./RefferLink";
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
      <Discount />
      <ElectricianServices />
      <PeopleChoice />
      <Testimonial />
      <RefferLink />
      <Stump />
    </>
  );
};

export default Home;
