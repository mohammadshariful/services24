import React from "react";
import ACInstallation from "../../assets/trending-services/AC Installation.png";
import AirCServ from "../../assets/trending-services/Air-Conditioner Services (2).png";
import HomeCleaningService from "../../assets/trending-services/Home Deep Cleaning Service.png";
import SofaCleaningService from "../../assets/trending-services/Sofa Cleaning Service.png";
import CardTool from "../../shared/CardTool/CardTool";
const TrendingServices = () => {
  const trendService = [
    {
      title: "Air-Conditioner Services",
      picture: AirCServ,
    },
    {
      title: "AC Installation",
      picture: ACInstallation,
    },
    {
      title: "Sofa Cleaning Service",
      picture: SofaCleaningService,
    },
    {
      title: "Home Deep Cleaning Service",
      picture: HomeCleaningService,
    },
    {
      title: "Air-Conditioner Services",
      picture: AirCServ,
    },
  ];
  return (
    <section className="w-[90%] mx-auto py-7">
      <h2 className="text-center text-primary text-xl lg:text-3xl font-semibold">
        Trending Services
      </h2>
      <p className="text-center text-base lg:text-lg">Premium Home Services</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-items-center mt-3 gap-x-3">
        {trendService.map((service, index) => (
          <CardTool key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default TrendingServices;
