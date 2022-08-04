import React from "react";
import Appliances from "../../assets/electricianServices/appliance.png";
import Chandelier from "../../assets/electricianServices/chandelier.png";
import doorBell from "../../assets/electricianServices/door_bell.png";
import fuse from "../../assets/electricianServices/mcb___fuse.png";
import switchImg from "../../assets/electricianServices/switches___sockets.png";
import wiring from "../../assets/electricianServices/wiring.png";
import ServiceSlider from "./ServiceSlider";

const ElectricianServices = () => {
  const electricianServices = [
    {
      picture: fuse,
      title: "MCB & Fuse",
      description: "Repairing & Installation",
    },
    {
      picture: switchImg,
      title: "Switch & Socket",
      description: "Shower, Faucets & Holder Installation & Repair",
    },
    {
      picture: wiring,
      title: "Wiring",
      description: "Toilet pot, Sink, Bathroom, Balcony pipe ",
    },
    {
      picture: Appliances,
      title: "Appliances",
      description: "Painting, Clock & Photoframe",
    },
    {
      picture: Chandelier,
      title: "Chandelier",
      description: "Painting, Clock & Photoframe",
    },
    {
      picture: doorBell,
      title: "Door Bell",
      description: "Bed, Table, Rack & Cabinet",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-7">
      <div className="mb-3 block sm:hidden">
        <h4 className="text-center text-primary font-semibold text-xl">
          Electrician Services
        </h4>
        <p className="text-center font-normal">Premium Services</p>
      </div>
      <div className="flex items-center">
        <div className="lg:w-[40%] hidden lg:block">
          <h4 className="text-center text-primary font-semibold text-xl">
            Electrician Services
          </h4>
          <p className="text-center font-normal">Premium Services</p>
        </div>
        <ServiceSlider services={electricianServices} />
      </div>
    </section>
  );
};

export default ElectricianServices;
