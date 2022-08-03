import React from "react";
import safeImg from "../../assets/images/safe.png";
const Safe = () => {
  return (
    <section className="w-full lg:w-[60%] mx-auto my-5 flex justify-center bg-base-100 shadow-lg rounded-md">
      <div className="w-1/2 lg:w-3/4 p-8">
        <h3 className="text-primary font-semibold text-xl">
          100% Safe Services
        </h3>
        <div className="flex  items-center gap-8">
          <ul className="list-disc">
            <li>Masks</li>
            <li>Gloves</li>
          </ul>
          <ul className="list-disc">
            <li>Temperature Checks</li>
            <li>Sanitized Tools</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img className="h-full object-cover" src={safeImg} alt="" />
      </div>
    </section>
  );
};

export default Safe;
