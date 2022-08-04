import React from "react";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import appleStore from "../../assets/images/appleStore.png";
import appPhone1 from "../../assets/images/appPhone1.png";
import appPhone2 from "../../assets/images/appPhone2.png";
import playstore from "../../assets/images/black-playstore 1.png";
const RefferLink = () => {
  return (
    <section className="hidden lg:block">
      <div className="w-[90%] mx-auto my-5 flex justify-center  bg-base-100">
        <div className="w-1/2  p-8 ">
          <h3 className="text-primary text-center font-semibold lg:text-2xl">
            Refer and or get link
          </h3>
          <p className="text-center font-normal text-primary">
            Invite your friends
          </p>
          <div className="mt-4 relative w-3/5 mx-auto">
            <input
              type="text"
              placeholder="Enter your 10 digit mobile number"
              className="input w-full px-10 bg-white shadow-lg"
            />
            <span className="absolute top-4 right-2 pr-2">
              <BsFillArrowRightSquareFill fontSize={24} />
            </span>
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <img className="w-24" src={playstore} alt="" />
            <img className="w-24" src={appleStore} alt="" />
          </div>
        </div>
        <div className="w-1/2 flex gap-10">
          <img className="" src={appPhone1} alt="" />
          <img className="h-46 relative mt-36" src={appPhone2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default RefferLink;
