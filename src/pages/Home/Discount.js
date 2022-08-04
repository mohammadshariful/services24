import React from "react";
import people from "../../assets/images/discountImg.png";
const Discount = () => {
  return (
    <section
      style={{
        background: "#FBD268",
      }}
      className="w-full  my-5 flex flex-row-reverse justify-center"
    >
      <div className="w-1/2 lg:w-3/4 p-8 flex justify-center">
        <div className="px-10 py-4">
          <h3 className="lg:text-2xl font-bold">
            TRY OUR TRENDING SERVICES WITH UPTO 50% OFF!
          </h3>
          <p className="text-center font-normal sm:text-lg">
            On any service you book
          </p>
          <button
            type="button"
            className="border border-secondary text-secondary mt-7 rounded-full block text-sm px-2 py-1 mx-auto font-semibold"
          >
            Book A Service
          </button>
        </div>
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img className="h-full object-cover" src={people} alt="" />
      </div>
    </section>
  );
};

export default Discount;
