import React from "react";
import playStore from "../../assets/images/black-playstore 1.png";
import facebook from "../../assets/socail-icons/facebook 1.png";
import instaram from "../../assets/socail-icons/icons8-instagram 1.png";
import twitter from "../../assets/socail-icons/icons8-twitter.png";
import linkedIn from "../../assets/socail-icons/linkedin-logo 1.png";
import pinterest from "../../assets/socail-icons/pinterest-social-logo.png";
import youtube from "../../assets/socail-icons/youtube.png";
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#343434",
      }}
      className="py-7 text-white mt-5"
    >
      <section className="w-[90%] mx-auto font-normal">
        <div className="flex lg:gap-5">
          <p className="mr-3">RELATED SERVICES</p>
          <ul className="flex flex-wrap gap-3">
            <li>Electrician |</li>
            <li>Plumber |</li>
            <li>Carpenter |</li>
            <li>Packers & Movers |</li>
            <li>Salon For Woman|</li>
            <li>Electronic Appliances|</li>
            <li>CCTV Installation & Repair|</li>
            <li>Ro- repair & service|</li>
            <li> house Painter|</li>
            <li>Pest Control|</li>
            <li>Kitchen Cleaning|</li>
            <li>Bathroom Cleaning|</li>
            <li>Sofa Cleaning|</li>
            <li>Carpet Cleaning|</li>
            <li>Home Deep Cleaning|</li>
          </ul>
        </div>
        <div className="flex lg:gap-5 mt-3">
          <p className="mr-3">TOP LOCATIONS</p>
          <ul className="flex flex-wrap gap-3">
            <li> Delhi|</li>
            <li> Gurgaon |</li>
            <li> Noida |</li>
            <li> Ghaziabad |</li>
            <li> Faridhabad |</li>
            <li> Greater Noida|</li>
          </ul>
        </div>
        <div className="flex lg:gap-5 mt-6 mb-3">
          <p className="mr-3">About Us</p>
          <ul className="flex flex-wrap gap-3 lg:gap-10">
            <li>Blog</li>
            <li>Near me</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Offers & Gift Cards</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <p className="flex justify-center gap-10 ">
          <span className="text-green-400">Contact Us</span>
          <span className="text-green-400">Download Oyebusy App</span>
        </p>
        <div className="flex justify-center items-center flex-col sm:flex-row gap-3 lg:gap-10 my-5 ">
          <ul>
            <li>Phone : +91 9990001089 </li>
            <li>Email : support@oyebusy.com</li>
          </ul>
          <img className="w-28 sm:w-36" src={playStore} alt="" />
        </div>
        <ul className="flex justify-center flex-wrap items-center gap-6 my-5">
          <li>
            <img className="w-6" src={instaram} alt="" />
          </li>
          <li>
            <img className="w-6" src={twitter} alt="" />
          </li>
          <li>
            <img className="w-6" src={linkedIn} alt="" />
          </li>
          <li>
            <img className="w-6" src={facebook} alt="" />
          </li>
          <li>
            <img className="w-6" src={youtube} alt="" />
          </li>
          <li>
            <img className="w-6" src={pinterest} alt="" />
          </li>
        </ul>
        <p className="text-center">
          &copy; 2021 OyeBusy Technologies Pvt. Ltd.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
