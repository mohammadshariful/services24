import React from "react";
const CardTool = ({ service }) => {
  return (
    <div className="border shadow-xl rounded-xl bg-white p-4 mt-10 hover:shadow-2xl">
      <img
        className="w-16 lg:w-20 relative mt-[-40px]  mx-auto"
        src={service.picture}
        alt={service.title}
      />
      <p className="text-center mt-3 font-semibold">{service.title}</p>
    </div>
  );
};

export default CardTool;
