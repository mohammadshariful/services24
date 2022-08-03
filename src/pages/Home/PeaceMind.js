import React from "react";
import layer2 from "../../assets/images/Layer 2.png";
import layer1 from "../../assets/images/layer1.png";
import layer3 from "../../assets/images/layer3.png";
const PeaceMind = () => {
  const serviceLayer = [
    {
      title: "High Quality Work",
      description:
        "Only authorized service experts and genuine spare parts and equipments",
      picture: layer1,
    },
    {
      title: "Hassle Free",
      description: "Sit back and relax. We do all the work",
      picture: layer2,
    },
    {
      title: "Totally Cashless",
      description:
        "Pay online for Safe & Secure payment.Many benefits and offers available with online payment",
      picture: layer3,
    },
  ];
  return (
    <section className="py-7 bg-base-100 ">
      <div className="w-[90%] mx-auto ">
        <h2 className="text-center text-primary text-xl lg:text-3xl font-semibold">
          Assured Peace of Mind
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center mt-4 gap-x-3">
          {serviceLayer.map((layer, index) => {
            return (
              <div
                key={index}
                className="lg:w-96 flex items-center gap-2 mb-3 lg:mb-0"
              >
                <div>
                  <img src={layer.picture} alt="" />
                </div>
                <div>
                  <h4 className="font-bold  lg:text-lg">{layer.title}</h4>
                  <p className="text-sm font-semibold">{layer.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PeaceMind;
