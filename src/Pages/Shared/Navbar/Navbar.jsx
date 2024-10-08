import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/WhatsApp Image 2024-08-19 at 18.56.57_1c51588e.jpg";
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
          <li className="flex uppercase items-center  gap-1">
            Product <IoIosArrowDown />
          </li>
          <ul className="absolute bg-white top-4 -left-4 mt-2 text-black z-[9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden group-hover:block rounded-lg border">
            <div className="p-5 lg:w-96 ">
              <li className="flex flex-col gap-4">
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
                  All Product
                </NavLink>
                <NavLink
                  to="/product1"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYON SOAP
                </NavLink>
                <NavLink
                  to="/product"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYSUN Aqua Gel
                </NavLink>
                <NavLink
                  to="/product2"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYZOL CREAM
                </NavLink>
                <NavLink
                  to="/product3"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYZOL SOAP
                </NavLink>
                <NavLink
                  to="/product4"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYZOL SHAMPOO
                </NavLink>
                <NavLink
                  to="/product5"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYGLOW CREAM
                </NavLink>
                <NavLink
                  to="/product6"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "group text-[#f97c00]"
                      : " hover:text-[#f97c00] group"
                  }
                >
                  INTHYGLOW FACEWASH
                </NavLink>
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
    <nav className="border shadow-md  bg-white z-50">
      <div className="flex justify-between items-center  p-2 max-w-screen-xl mx-auto px-4">
        <div>
          <Link to="/">
            <img className="w-40" src={logo} alt="logo" />
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
            className={`absolute bg-white z[9999] flex flex-col transition duration-500 delay-200 gap-5 border p-5 ${
              open
                ? "w-[70%] md:w-[40%] bg-white h-full z[9999] top-0 right-0 "
                : "-left-56 top-0 "
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
