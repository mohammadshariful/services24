import React from "react";
const SwiperSliderContainer = ({ service }) => {
  return (
    <div className="border shadow-xl rounded-xl bg-white p-4 mt-10  h-40">
      <img
        className="relative mt-[-40px]  mx-auto w-24 h-24"
        src={service.picture}
        alt={service.title}
      />
      <p className="text-center text-sm mt-3 font-semibold lg:whitespace-nowrap">
        {service.title}
      </p>
      <p className="text-center text-gray-700">
        <small>{service.description}</small>
      </p>
    </div>
  );
};

export default SwiperSliderContainer;
