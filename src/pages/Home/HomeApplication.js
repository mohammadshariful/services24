import React from "react";
import ac from "../../assets/home-application/acrepair.png";
import led from "../../assets/home-application/led.png";
import Microwave from "../../assets/home-application/microwave.png";
import Refrigarator from "../../assets/home-application/Refrigerator.png";
import roService from "../../assets/home-application/roservice.png";
import washingMachin from "../../assets/home-application/washingMachine.png";
import CardTool from "../../shared/CardTool/CardTool";

const HomeApplication = () => {
  const homeApplication = [
    {
      title: "Washing Machine Repair",
      picture: washingMachin,
    },
    {
      title: "Refrigerator Repair / Service",
      picture: Refrigarator,
    },
    {
      title: "Microwave Repair",
      picture: Microwave,
    },
    {
      title: "RO Service",
      picture: roService,
    },
    {
      title: "LED TV Repair",
      picture: led,
    },
    {
      title: "AC Services",
      picture: ac,
    },
  ];
  return (
    <section className="w-[90%] mx-auto py-7">
      <h2 className="text-center text-primary text-xl lg:text-3xl font-semibold">
        Home Appliances Services
      </h2>
      <p className="text-center text-base lg:text-lg">Premium Home Services</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center mt-3 gap-x-3">
        {homeApplication.map((service, index) => (
          <CardTool key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default HomeApplication;
