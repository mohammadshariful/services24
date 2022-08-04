import React from "react";
import PeopleChoicePic from "../../assets/images/peoplechoice.png";
const PeopleChoice = () => {
  return (
    <section className="w-[90%] mx-auto my-5 flex flex-row-reverse justify-center bg-base-100 shadow-lg rounded-md">
      <div className="w-1/2 lg:w-3/4 p-8 flex justify-center">
        <div className="bg-white px-10 py-4">
          <h3 className="text-primary font-semibold lg:text-xl">
            Why People Choose Us
          </h3>
          <ul className="font-semibold list-disc mt-3">
            <li>Affordable Rates</li>
            <li>Rates On Time Service</li>
            <li>Verified Professionals</li>
            <li>Excellent Service</li>
          </ul>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img className="h-full object-cover" src={PeopleChoicePic} alt="" />
      </div>
    </section>
  );
};

export default PeopleChoice;
