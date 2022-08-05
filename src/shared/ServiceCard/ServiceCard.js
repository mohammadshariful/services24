import React from "react";
const ServiceCard = ({ service }) => {
  return (
    <div className=" max-w-sm  mb-4 border rounded-lg">
      <img className="w-full  mx-auto" src={service.picture} alt="" />
      <div className="text-center py-2">
        <h4 className="font-semibold">{service.title}</h4>
        <p>
          <small>{service.description}</small>
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
