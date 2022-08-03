import React from "react";
import { AiOutlineHeart, AiOutlineHome } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import booking from "../../assets/images/bookings.png";
const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 lg:hidden ">
      <div class="btm-nav bg-white py-2 font-semibold">
        <button className="text-secondary">
          <AiOutlineHome className="text-2xl" />
          <span class="btm-nav-label">Home</span>
        </button>
        <button>
          <img src={booking} alt="" />
          <span class="btm-nav-label">Bookings</span>
        </button>
        <button>
          <AiOutlineHeart className="text-2xl" />
          <span class="btm-nav-label">Favourite</span>
        </button>
        <button>
          <VscAccount className="text-xl" />
          <span class="btm-nav-label">Accounts</span>
        </button>
      </div>
    </div>
  );
};

export default BottomNav;
