import React from "react";
import { BsFillCartDashFill, BsSearch } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import playstore1 from "../../assets/images/playstore 1.png";
const Menubar = () => {
  return (
    <nav>
      <div className="block md:hidden">
        <p tabindex="0" className="collapse collapse-arrow">
          <span className="collapse-title pl-4 flex items-center font-medium text-primary">
            <HiOutlineLocationMarker size={24} />
            Sector-44, Real Estate, Sector- 62, Gurugram
          </span>
        </p>
        <div className="mt-4 relative w-[95%] mx-auto ">
          <input
            type="text"
            placeholder="Search for a service"
            className="input w-full px-10  border-primary"
          />
          <span className="absolute top-4 left-2 pr-2">
            <BsSearch />
          </span>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="w-[90%] mx-auto flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src={logo} alt="logo" />
            <p tabindex="0" className="collapse collapse-arrow">
              <span className="collapse-title pl-4 flex items-center font-medium">
                <HiOutlineLocationMarker size={24} />
                1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh
                201301
              </span>
            </p>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-6 font-semibold">
              <li>Blog</li>
              <li>Career</li>
              <li tabindex="0" className="collapse collapse-arrow">
                <span className="collapse-title">My Account</span>
              </li>
              <li className="text-xl">
                <BsFillCartDashFill />
              </li>
              <li>
                <button className="flex items-center border border-black  px-3 py-1 rounded-sm">
                  <img src={playstore1} alt="" />
                  <span>Download App</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menubar;
