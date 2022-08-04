import React from "react";
import stump from "../../assets/images/stamp-02 1.png";
const Stump = () => {
  return (
    <section className="w-full lg:w-[60%] mx-auto my-5 flex justify-center items-center flex-row-reverse">
      <div className="w-1/2 lg:w-3/4 p-8 flex lg:justify-center">
        <h3 className="text-primary font-semibold lg:text-2xl">
          Hassle free services with OyeBusy
        </h3>
      </div>
      <div className="w-1/2 lg:w-1/4">
        <img className="h-full w-28 sm:w-96 object-cover" src={stump} alt="" />
      </div>
    </section>
  );
};

export default Stump;
