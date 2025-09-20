import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Glassmorphic Navbar */}
      <nav className="backdrop-blur-lg bg-[#0A192F]/80 border-b border-yellow-500/30 shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="G3Groupbg.png"
              className="h-14 w-auto rounded-lg shadow-md border border-yellow-500/40"
              alt="Logo"
            />
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              G3<span className="text-gray-200">Group</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-semibold text-base uppercase tracking-wide transition duration-300 
                  ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                      : "text-gray-300 hover:text-yellow-400"
                  }`
                }
              >
                {link.label}
                {/* underline effect */}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-yellow-200 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Right Button (Desktop Only) */}
          <div className="hidden lg:block">
            <Link
              to="/connect"
              className="ml-4 font-semibold text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-[#0A192F] shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              SECURITY SOLUTION
            </Link>
          </div>

          {/* Hamburger Icon (Mobile Only) */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-yellow-400 focus:outline-none"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </nav>

      {/* Sidebar Menu (Mobile) */}
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black z-40"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#0A192F] via-[#1A1F2C] to-[#0A192F] shadow-xl z-50 flex flex-col px-6 py-6"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-yellow-400 mb-6"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Nav Links */}
            <div className="flex flex-col space-y-6">
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `font-semibold text-lg uppercase tracking-wide transition duration-300 
                    ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,215,0,0.8)]"
                        : "text-gray-300 hover:text-yellow-400"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Connect Button */}
            <Link
              to="/connect"
              onClick={() => setIsOpen(false)}
              className="mt-10 font-semibold text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-[#0A192F] shadow-md hover:shadow-xl transition-all duration-300 text-center"
            >
              SECURITY SOLUTION
            </Link>
          </motion.div>
        </>
      )}
    </header>
  );
}
