import React from "react";

import bed from "../../assets/carpenterServices/Bed.png";
import curtain from "../../assets/carpenterServices/Curtain _ Blinds.png";
import door from "../../assets/carpenterServices/door 1.png";
import drawer from "../../assets/carpenterServices/Drawer___cupboard.png";
import fitting from "../../assets/carpenterServices/Fitting___minor_installations.png";
import furniture from "../../assets/carpenterServices/Furniture_assembly.png";
import ServiceSlider from "./ServiceSlider";

const CarpenterServices = () => {
  const carpenterServices = [
    {
      picture: bed,
      title: "Bed",
      description: "Repairing Support, Legs",
    },
    {
      picture: curtain,
      title: "Curtain & Blinds",
      description: "Motorized, Non-Motorized Blinds & Curtain Rod",
    },
    {
      picture: door,
      title: "Door",
      description: "Repairing, Accessories Installation",
    },
    {
      picture: drawer,
      title: "Drawer & Cupboard",
      description: "Channel, Hinge Repair",
    },
    {
      picture: fitting,
      title: "Fittings & Installations",
      description: "Holder, Hanger, Rod Installation",
    },
    {
      picture: furniture,
      title: "Furniture Assembly",
      description: "Bed, Table, Rack & Cabinet",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-7">
      <div className="mb-3 block sm:hidden">
        <h4 className="text-center text-primary font-semibold text-xl">
          Carpenter Services
        </h4>
        <p className="text-center font-normal">Premium Services</p>
      </div>
      <div className="flex items-center">
        <div className="lg:w-[40%] hidden lg:block">
          <h4 className="text-center text-primary font-semibold text-xl">
            Carpenter Services
          </h4>
          <p className="text-center font-normal">Premium Services</p>
        </div>
        <ServiceSlider services={carpenterServices} />
      </div>
    </section>
  );
};

export default CarpenterServices;
