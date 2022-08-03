import React from "react";
import { BsFillCartDashFill } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import logo from "../../assets/images/logo.png";
import playstore1 from "../../assets/images/playstore 1.png";
const Menubar = () => {
  return (
    <div className="hidden lg:block">
      <div className="w-[90%] mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" />
          <p className="pl-4 flex items-center font-medium">
            <HiOutlineLocationMarker />
            1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
          </p>
        </div>
        <div>
          <ul className="flex justify-center items-center gap-6 font-semibold">
            <li>Blog</li>
            <li>Career</li>
            <li tabindex="0" class="collapse collapse-arrow">
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
  );
};

export default Menubar;
