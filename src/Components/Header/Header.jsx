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
    <header className="w-full z-40">
      {/* Glassmorphic Navbar */}
      <nav className="backdrop-blur-lg bg-[#0A192F]/80 border-b border-white/10 shadow-md">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="g3group.jpg"
              className="h-10 w-auto rounded-lg shadow-sm"
              alt="Logo"
            />
            <span className="text-lg font-bold text-white tracking-wide">
              G3<span className="text-yellow-400">Security</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-medium text-base transition duration-300 
                  ${
                    isActive
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right Button (Desktop Only) */}
          <div className="hidden lg:block">
            <Link
              to="/connect"
              className="ml-4 font-medium text-sm px-4 py-2 rounded-lg bg-yellow-400 text-[#0A192F] shadow-sm hover:bg-yellow-300 transition-all duration-300"
            >
              Connect
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
            className="fixed top-0 right-0 h-full w-64 bg-[#0A192F] shadow-lg z-50 flex flex-col px-6 py-6"
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
                    `font-medium text-lg transition duration-300 
                    ${
                      isActive
                        ? "text-yellow-400"
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
              className="mt-10 font-medium text-sm px-4 py-2 rounded-lg bg-yellow-400 text-[#0A192F] shadow-md hover:bg-yellow-300 transition-all duration-300 text-center"
            >
              Connect
            </Link>
          </motion.div>
        </>
      )}
    </header>
  );
}
