import React, { useState, useMemo } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About" },
      { to: "/services", label: "Services" },
      { to: "/contact", label: "Contact" },
    ],
    []
  );

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Navbar */}
      <nav className="backdrop-blur-md bg-[#0A192F]/80 border-b border-yellow-500/20 shadow-md">
        <div className="flex justify-between items-center mx-auto max-w-7xl px-6 py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="G3Groupbg.png"
              className="h-14 w-auto rounded-lg shadow-sm border border-yellow-500/30"
              alt="Logo"
            />
            <span className="text-xl font-bold tracking-wider bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 bg-clip-text text-transparent">
              G3<span className="text-gray-200">Group</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-10">
            {navLinks.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-semibold text-base uppercase tracking-wide transition duration-200
                  ${
                    isActive
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg"
                      : "text-gray-300 hover:text-yellow-400"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Connect Button */}
          <div className="hidden lg:block">
            <Link
              to="/connect"
              className="ml-4 font-semibold text-sm px-5 py-2 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-[#0A192F] shadow-md hover:shadow-lg hover:scale-105 transition duration-200"
            >
              SECURITY SOLUTION
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-yellow-400 focus:outline-none"
          >
            <Bars3Icon className="w-8 h-8" />
          </button>
        </div>
      </nav>

    {/* Mobile Sidebar */}
<div
  className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-b from-[#0A192F] via-[#1A1F2C] to-[#0A192F] shadow-xl z-50 transform transition-transform duration-300 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  } flex flex-col justify-between`}
>
  {/* Close Button */}
  <div className="flex justify-end p-6">
    <button
      onClick={() => setIsOpen(false)}
      className="text-yellow-400"
    >
      <XMarkIcon className="w-8 h-8" />
    </button>
  </div>

  {/* Nav Links (Centered Vertically) */}
  <div className="flex flex-col justify-center flex-grow space-y-6 px-6">
    {navLinks.map((link, index) => (
      <NavLink
        key={index}
        to={link.to}
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `font-semibold text-lg uppercase tracking-wide transition duration-200 ${
            isActive
              ? "bg-gradient-to-r from-yellow-400 to-yellow-200 bg-clip-text text-transparent drop-shadow-lg"
              : "text-gray-300 hover:text-yellow-400"
          }`
        }
      >
        {link.label}
      </NavLink>
    ))}
  </div>

  {/* Connect Button at Bottom */}
  <div className="px-6 pb-6">
    <Link
      to="/connect"
      onClick={() => setIsOpen(false)}
      className="w-full block text-center font-semibold text-sm px-5 py-3 rounded-lg bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-300 text-[#0A192F] shadow-md hover:shadow-lg transition duration-200"
    >
      SECURITY SOLUTION
    </Link>
  </div>
</div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-200"
        />
      )}
    </header>
  );
}
