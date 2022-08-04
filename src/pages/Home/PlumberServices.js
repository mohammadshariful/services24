import React from "react";

import washBasing from "../../assets/plumberServices/Basin___sink.png";
import bathFitting from "../../assets/plumberServices/Bath_fittings.png";
import Blockage from "../../assets/plumberServices/Blockage.png";
import drillHole from "../../assets/plumberServices/Drill___hang.png";
import minor from "../../assets/plumberServices/Minor_installations.png";
import mixer from "../../assets/plumberServices/Tap.png";
import ServiceSlider from "./ServiceSlider";

const PlumberServices = () => {
  const plumberServices = [
    {
      picture: washBasing,
      title: "Wash Basin & Sink",
      description: "Repairing & Installation",
    },
    {
      picture: bathFitting,
      title: "Bath Fittings",
      description: "Shower, Faucets & Holder Installation & Repair",
    },
    {
      picture: Blockage,
      title: "Blockage",
      description: "Toilet pot, Sink, Bathroom, Balcony pipe ",
    },
    {
      picture: drillHole,
      title: "Drill & Hole",
      description: "Painting, Clock & Photoframe",
    },
    {
      picture: minor,
      title: "Minor Installations",
      description: "Holder, Hanger, Rod Installation",
    },
    {
      picture: mixer,
      title: "Mixer, Tap & Nozzle",
      description: "Bed, Table, Rack & Cabinet",
    },
  ];

  return (
    <section className="w-[90%] mx-auto py-7">
      <div className="mb-3 block sm:hidden">
        <h4 className="text-center text-primary font-semibold text-xl">
          Plumber Services
        </h4>
        <p className="text-center font-normal">Premium Services</p>
      </div>
      <div className="flex items-center">
        <div className="lg:w-[40%] hidden lg:block">
          <h4 className="text-center text-primary font-semibold text-xl">
            Plumber Services
          </h4>
          <p className="text-center font-normal">Premium Services</p>
        </div>
        <ServiceSlider services={plumberServices} />
      </div>
    </section>
  );
};

export default PlumberServices;
