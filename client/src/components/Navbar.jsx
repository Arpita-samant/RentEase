import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets, menuLinks } from "../assets/assets";
import {motion} from 'motion/react'

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
    initial={{y: -20, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    transition={{duration: 0.5}}
      className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 text-gray-600 border-b border-borderColor relative transition-all ${
        location.pathname === "/" ? "bg-light" : "bg-white"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} alt="Logo" className="h-15" />
      </Link>

      {/* Navigation Menu */}
      <div
        className={`max-sm:fixed max-sm:top-16 max-sm:right-0 max-sm:w-full max-sm:h-screen max-sm:border-t border-borderColor flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 max-sm:p-4 transition-all duration-300 z-50 ${
          location.pathname === "/" ? "bg-light" : "bg-white"
        } ${
          open ? "max-sm:translate-x-0" : "max-sm:translate-x-full"
        }`}
      >
        {/* Menu Links */}
        {menuLinks.map((link, index) => (
          <Link
            key={index}
            to={link.path}
            onClick={() => setOpen(false)}
          >
            {link.name}
          </Link>
        ))}

        {/* Search Bar */}
        <div className="hidden lg:flex items-center gap-2 border border-borderColor px-3 rounded-full max-w-56">
          <input
            type="text"
            placeholder="Search products"
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500 text-sm"
          />
          <img src={assets.search_icon} alt="Search" />
        </div>

        {/* Buttons */}
        <div className="flex max-sm:flex-col items-start sm:items-center gap-6">
          <button
            onClick={() => navigate("/owner")}
            className="cursor-pointer"
          >
            Dashboard
          </button>

          <button
            onClick={() => setShowLogin(true)}
            className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition-all text-white rounded-lg"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden cursor-pointer"
        aria-label="Menu"
        onClick={() => setOpen(!open)}
      >
        <img
          src={open ? assets.close_icon : assets.menu_icon}
          alt="Menu"
          className="w-6 h-6"
        />
      </button>
    </motion.div>
  );
};

export default Navbar;

