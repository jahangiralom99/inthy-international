import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo-new.png";
import PhoneLogo from "../../../assets/phone.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f97c00] " : ""
        }
      >
        Home
      </NavLink>
      <hr className="lg:hidden" />
      <NavLink
        to="/card"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "group text-[#f97c00]"
            : " hover:text-[#f97c00] group"
        }
      >
        <ul className="relative ">
          <Link
            to="/card"
            className="flex uppercase items-center  font-bold gap-1"
          >
            Product <IoIosArrowDown />
          </Link>
          <ul className="absolute bg-white top-4 -left-4 mt-2 text-black z-[999] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg border">
            <div className="p-5 lg:w-96 ">
              <li className="flex flex-col gap-4">
                <Link to="/product" className="text-sm font-semibold hover:text-[#f97c00]">
                  INTHYSUN Aqua Gel – Unique New Generation Efficient
                  Photostable Sunscreen
                </Link>
                <Link to="/product1" className="text-sm font-semibold hover:text-[#f97c00]">
                  INTHYOU SOAP – Skin Lightening & Brightening Soap
                </Link>
                <Link to="/product2" className="text-sm font-semibold hover:text-[#f97c00]">
                  Product 2
                </Link>
                <Link to="/product3" className="text-sm font-semibold hover:text-[#f97c00]">
                  Product 3
                </Link>
              </li>
            </div>
          </ul>
        </ul>
      </NavLink>
      <hr className="lg:hidden" />
      <NavLink
        to="/about-us"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f97c00]" : ""
        }
      >
        About Us
      </NavLink>
      <hr className="lg:hidden" />
      <NavLink
        to="/contact-us"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#f97c00]" : ""
        }
      >
        Contact Us
      </NavLink>
      <hr className="lg:hidden" />
    </>
  );

  return (
    <nav className="border">
      <div className="flex justify-between items-center  p-2 max-w-screen-xl mx-auto px-4">
        <div>
          <Link to="/">
            <img className="w-36" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="lg:flex gap-6 uppercase font-semibold hidden">
          {navLinks}
        </div>
        <div className="lg:flex items-center gap-2 font-semibold  hidden">
          <img className="w-8" src={PhoneLogo} alt="phone-icon" />
          <p>01925921227/01675957881</p>
        </div>
        {/* side Bar for Phone  */}
        <div className="lg:hidden z-50">
          <div onClick={() => setOpen(!open)}>
            <IoMenu className="text-5xl bg-[#549708] rounded-full text-white p-2" />
          </div>
          {open && (
            <div
              onClick={() => setOpen(false)}
              className="absolute top-0 left-0 h-screen w-full bg-black bg-opacity-60"
            ></div>
          )}
          <div
            className={`absolute bg-[#f5f5f5] flex flex-col transition duration-500 delay-200 gap-5 border p-5 ${
              open
                ? "w-[70%] md:w-[40%] h-full top-0 right-0 "
                : "-left-56 top-0"
            }`}
          >
            {navLinks}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
