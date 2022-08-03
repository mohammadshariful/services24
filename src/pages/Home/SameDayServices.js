import React from "react";
import img1 from "../../assets/sameDayServices/img1.png";
import img2 from "../../assets/sameDayServices/img2.png";
import img3 from "../../assets/sameDayServices/img3.png";
import img4 from "../../assets/sameDayServices/img4.png";
import img5 from "../../assets/sameDayServices/img5.png";
import CardTool from "../../shared/CardTool/CardTool";
const SameDayServices = () => {
  const dayServices = [
    {
      title: "Carpentery Services",
      picture: img1,
    },
    {
      title: "Plumbing Services",
      picture: img2,
    },
    {
      title: "Electrical Services",
      picture: img3,
    },
    {
      title: "Painting Services",
      picture: img4,
    },
    {
      title: "Pest Control Serviecs",
      picture: img5,
    },
  ];
  return (
    <section className="w-[90%] mx-auto py-7">
      <h2 className="text-center text-primary text-xl lg:text-3xl font-semibold">
        Same Day Services
      </h2>
      <p className="text-center text-base lg:text-lg">Premium Home Services</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-items-center mt-3 gap-x-3">
        {dayServices.map((service, index) => (
          <CardTool key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default SameDayServices;
