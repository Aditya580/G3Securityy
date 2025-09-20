import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a1931] text-white mt-16 overflow-hidden">
      {/* Wavy Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0a1931"
            fillOpacity="1"
            d="M0,192L48,213.3C96,235,192,277,288,272C384,267,480,213,576,213.3C672,213,768,267,864,277.3C960,288,1056,256,1152,240C1248,224,1344,224,1392,224L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Decorative Background */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative mx-auto w-full max-w-screen-xl px-6 pt-16">
        <div className="md:flex md:justify-between p-5">
          {/* Logo & Contact */}
          <div className="mb-6 md:mb-0 flex flex-col items-start">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="/G3Groupbg.png"
                className="h-20 mb-2 rounded-lg"
                alt="Logo"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                G3 Security
              </span>
            </Link>

            <p className="flex flex-col text-gray-300 space-y-2 mt-4">
              <span className="flex items-center">
                <FaPhoneAlt className="mr-2 text-yellow-400" /> +91 9685473316 / +91 8085853806
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-2 text-yellow-400" /> ganesh.giri76@gmail.com
              </span>
              <span className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-yellow-400" /> PLOT NO. 253,
                WARD NO. 17 , BINDIYA DHAM COLONY, MANDIDEEP DISTT., RAISEN
              </span>
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-3 relative">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Resources
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Follow us
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-400 transition" target="_blank" rel="noreferrer">
                    Contact
                  </a>
                </li>
                <li>
                  <Link to="/" className="hover:text-yellow-400 transition">Discord</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-yellow-400 uppercase tracking-wide">
                Legal
              </h2>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <Link to="#" className="hover:text-yellow-400 transition">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-yellow-400 transition">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            {/* ✅ Peacock Feather Image */}
            <img
              src="/peacock.png"
              alt="Peacock Feather"
              className="absolute -bottom-[72px] right-0 w-32 opacity-80 hover:opacity-100 transition"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#0d1b2a] p-5 mt-10 rounded-t-xl border-t border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
            <span>
              © 2025{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-semibold">
                G3 Security
              </span>
              . All Rights Reserved.
            </span>
            <span className="mt-2 md:mt-0">Made with ❤️ in Bhopal</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
