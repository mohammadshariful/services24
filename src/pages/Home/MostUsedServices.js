import React from "react";
import img from "../../assets/images/mostServices.jpg";
import ServiceCard from "../../shared/ServiceCard/ServiceCard";
const MostUsedServices = () => {
  const mostUsedService = [
    {
      picture: img,
      title: "Professional Deep Cleaning",
      description: "For spring  clean for  end of  lease clean",
    },
    {
      picture: img,
      title: "Professional Deep Cleaning",
      description: "For spring  clean for  end of  lease clean",
    },
    {
      picture: img,
      title: "Professional Deep Cleaning",
      description: "For spring  clean for  end of  lease clean",
    },
    {
      picture: img,
      title: "Professional Deep Cleaning",
      description: "For spring  clean for  end of  lease clean",
    },
  ];
  return (
    <section className="hidden lg:block w-[90%] mx-auto py-7">
      <h2 className="text-center text-primary text-xl lg:text-3xl font-semibold">
        Most Used Services
      </h2>
      <p className="text-center text-base lg:text-lg">Premium Home Services</p>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center mt-3 gap-x-3">
        {mostUsedService.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </section>
  );
};

export default MostUsedServices;
