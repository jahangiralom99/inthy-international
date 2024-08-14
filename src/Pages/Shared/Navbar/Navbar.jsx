import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/Logo-new.png";
import PhoneLogo from "../../../assets/phone.png";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
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
        to="/product"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#f97c00]"
            : " hover:text-[#f97c00]"
        }
      >
        Product
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
        to="/contact"
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
