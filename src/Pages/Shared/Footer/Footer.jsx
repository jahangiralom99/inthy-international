import logo from "../../../assets/Logo-new.png";
import sslcommerz from "../../../assets/sslcommerz.jpg";
import point from "../../../assets/point.png";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaTelegram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#158436] mt-12">
      <div className="max-w-screen-xl mx-auto px-4 p-8 flex flex-col lg:flex-row gap-8 justify-between ">
        {/* logo */}
        <div className="lg:flex-1">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <p className="text-white text-[17px] mt-8 font-semibold">
            Inthy International has been in the retail trade of stylish and
            affordable watches for about 5 years. Currenofficial.com.bd has been
            able to provide its customers the best prices, selections and
            service. Our goal is to satisfy our customers with quality Cosmetic
            at an amazing price.
          </p>
          {/* Icon social Media */}
          <div className="mt-6 flex items-center gap-2">
            <div>
              <FaFacebookF className=" bg-[#f2f2f2] hover:bg-[#f97c00] hover:text-white text-[#00000066] text-4xl p-2 rounded-lg " />
            </div>
            <div>
              <FaTwitter className=" bg-[#f2f2f2] hover:bg-[#f97c00] hover:text-white text-[#00000066] text-4xl p-2 rounded-lg " />
            </div>
            <div>
              <FaPinterest className=" bg-[#f2f2f2] hover:bg-[#f97c00] hover:text-white text-[#00000066] text-4xl p-2 rounded-lg " />
            </div>
            <div>
              <FaLinkedinIn className=" bg-[#f2f2f2] hover:bg-[#f97c00] hover:text-white text-[#00000066] text-4xl p-2 rounded-lg " />
            </div>
            <div>
              <FaTelegram className=" bg-[#f2f2f2] hover:bg-[#f97c00] hover:text-white text-[#00000066] text-4xl p-2 rounded-lg " />
            </div>
          </div>
        </div>
        {/* Contact us */}
        <div className="lg:flex-1">
          <h1 className="text-2xl text-white font-bold">Contact Us</h1>
          <div className="mt-8 flex gap-4 items-center">
            <img className="w-6" src={point} alt="point" />
            <p className="text-white text-[17px]  font-semibold">
              md.humayunkabir282@yahoo.com
            </p>
          </div>
          <div className="mt-8 flex gap-4 items-center">
            <img className="w-6" src={point} alt="point" />
            <p className="text-white text-[17px]  font-semibold">
              01925921227 , 01675957881
            </p>
          </div>
          <div className="mt-8 flex gap-4 items-center">
            <img className="w-6" src={point} alt="point" />
            <p className="text-white text-[17px]  font-semibold">
              7/16 Block -C, Tajmohol Road, Mohammadpur, Dhaka -1207
            </p>
          </div>
          <h1 className="text-[17px] mt-8 text-white">Pay With</h1>
          <h1 className="text-[17px] mt-4 text-white">Terms and Conditions</h1>
          <h1 className="text-[17px] mt-4 text-white">Privacy Policy</h1>
          <hr className="mt-5" />
        </div>
        {/* Pay With
         */}
        <div className="lg:flex-1">
          <h1 className="text-2xl text-white font-bold">Pay With</h1>
          <img className="mt-8 rounded-2xl" src={sslcommerz} alt="sslcommerz" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
