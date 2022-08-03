import React from "react";
import { BsSearch } from "react-icons/bs";
import ac from "../../assets/images/acser.png";
import bannerImg from "../../assets/images/bannerImg.jpg";
import Carpenter from "../../assets/images/carpenter.png";
import cctv from "../../assets/images/cctv.png";
import Cleaning from "../../assets/images/cleaner.png";
import Disinfection from "../../assets/images/disinfection.png";
import Electrician from "../../assets/images/electrician.png";
import HomeAppliances from "../../assets/images/homeapplication.png";
import HousePainting from "../../assets/images/housepainting.png";
import PackersMovers from "../../assets/images/packer.png";
import PestControl from "../../assets/images/pestControl.png";
import Plumber from "../../assets/images/plumber.png";
import salon from "../../assets/images/sallon.png";
import BannerSlider from "./BannerSlider";
const BannerSection = () => {
  const tools = [
    {
      id: "094d",
      name: "Salon at Home",
      picture: salon,
    },
    {
      id: "948cs",
      name: "Electrician",
      picture: Electrician,
    },
    {
      id: "884ds",
      name: "Plumber",
      picture: Plumber,
    },
    {
      id: "14dss",
      name: "CCTV",
      picture: cctv,
    },
    {
      id: "13sdc",
      name: "AC Service",
      picture: ac,
    },
    {
      id: "163df",
      name: "Packers & Movers",
      picture: PackersMovers,
    },
    {
      id: "534sd",
      name: "Cleaning",
      picture: Cleaning,
    },
    {
      id: "1e3s",
      name: "House Painting",
      picture: HousePainting,
    },
    {
      id: "5cse3",
      name: "Home Appliances",
      picture: HomeAppliances,
    },
    {
      id: "98emdf",
      name: "Disinfection",
      picture: Disinfection,
    },
    {
      id: "ed4s",
      name: "Pest Control",
      picture: PestControl,
    },
    {
      id: "1des3",
      name: "Carpenter",
      picture: Carpenter,
    },
  ];
  return (
    <div className="flex justify-center ">
      <div
        style={{
          backgroundImage: `url(${bannerImg})`,
          backgroundPosition: "center",
        }}
        className="w-1/2 h-[75vh] relative hidden lg:block"
      >
        <div className=" absolute top-1/2  left-1/2 translate-x-[-50%] translate-y-[-50%] w-full">
          <h2 className="text-center text-3xl text-secondary font-semibold">
            Home services, on demand
          </h2>

          <div className="mt-4 relative w-3/5 mx-auto ">
            <input
              type="text"
              placeholder="Searc for a service"
              className="input w-full px-10 "
            />
            <span className="absolute top-4 left-2 pr-2">
              <BsSearch />
            </span>
          </div>
          <p className="text-center font-bold text-secondary pt-2">
            Examples:Salon, Women's hair, Men's grooming & Many more..
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 ">
        <h2 className="text-center font-semibold text-3xl">
          What are you looking for?
        </h2>
        <p className="relative py-4 hidden lg:block">
          <span className="bg-secondary text-white  font-bold p-2 absolute top-0 right-0">
            FLAT $400 OFF
          </span>
        </p>
        <div className="grid grid-cols-4 justify-items-center mt-3">
          {tools.map((tool) => {
            return (
              <div key={tool.id} className="p-2">
                <img className="w-10 mx-auto" src={tool.picture} alt="" />
                <p className="text-center font-normal mt-2 text-base">
                  {tool.name}
                </p>
              </div>
            );
          })}
        </div>
        <div className="lg:px-6">
          <BannerSlider />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
