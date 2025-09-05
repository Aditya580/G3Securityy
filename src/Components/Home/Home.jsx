import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import TestimonialSection from "../TestimonialSection/TestimonialSection";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#133864] text-white">
        {/* Top Decorative SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 0L0 0 0 46.29c47.66 22 98.12 29.13 146.25 24 48.13-5.14 95.07-21.85 143.2-29.57 66.3-10.74 132.24-1.78 198.6 9.1 70.59 11.52 141.5 23.9 212.6 20.58 63.81-3 127.15-19.81 190.9-28.77 75.65-10.81 151.19-6.6 225.67 8.65 54.62 11.12 108.76 27.35 163.78 40.19 24.54 5.65 49.12 10.9 74 14.52V0z"
              className="fill-white opacity-10"
            ></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 lg:px-12 py-20 relative z-10">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-yellow-400 font-semibold uppercase tracking-wide">
              We Are G3 Security
            </p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mt-3">
              Professional Security <br />
              Services for Your Business
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              We provide trusted security & monitoring solutions. From corporate
              offices to residential premises, we safeguard what matters most.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/services"
                className="flex items-center gap-2 bg-yellow-400 text-[#0A192F] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition-all"
              >
                Take Our Service <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                to="/about"
                className="flex items-center gap-2 border border-yellow-400 text-yellow-400 font-semibold px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-[#0A192F] transition-all"
              >
                Learn More
              </Link>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://i.pinimg.com/1200x/c6/3e/d1/c63ed10f3f4ed8d9f70cc6adb9e5bcd3.jpg"
              alt="Security Service"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            {/* Floating SVG Shield Icon */}
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-16 h-16 text-yellow-400 absolute -top-8 -left-8"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <path d="M12 1l9 4v6c0 5.55-3.84 10.74-9 12-5.16-1.26-9-6.45-9-12V5l9-4z" />
            </motion.svg>
          </motion.div>
        </div>

        {/* Bottom Wavy Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
          <svg
            className="relative block w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39 56.44c58.68-10.79 117.66-26.88 176.75-29.1 58.69-2.22 117.43 8.6 176.11 16.93 59.22 8.37 118.44 14.15 177.66 8.2 55.11-5.51 110.22-21.91 165.33-26.11 59.93-4.57 119.85 4.43 179.78 12.67V120H0V27.35c42.13 7.63 84.26 15.26 126.39 19.74 65.33 7.06 130.67 9.35 195.00 9.35z"
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white relative py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
          {/* Left Experience Images */}
          <div className="relative flex flex-col items-center md:items-start">
            <img
              src="https://i.pinimg.com/1200x/c7/ce/f3/c7cef3574267b65c72dd65c1da27e22c.jpg"
              alt="Team"
              className="w-72 h-64 object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://i.pinimg.com/1200x/74/9e/9c/749e9c58a5768d488ddfc3da63b16b80.jpg"
              alt="Team"
              className="w-64 h-56 object-cover rounded-2xl shadow-lg absolute -bottom-10 left-20 border-4 border-white"
            />

            {/* Experience Badge */}
            <div className="absolute -top-6 -left-6 bg-yellow-400 text-[#0A192F] font-bold p-6 rounded-2xl shadow-xl">
              <p className="text-3xl">10+</p>
              <span className="text-sm">Years Experience</span>
            </div>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-yellow-500 font-semibold uppercase tracking-wide">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mt-3">
              Trusted Security Solutions Since 2001
            </h2>
            <p className="mt-6 text-gray-600">
              Our professional guards and monitoring systems keep your premises
              safe and secure. We combine human expertise with the latest
              security technologies to give you peace of mind.
            </p>

            {/* Checklist */}
            <ul className="mt-6 space-y-3">
              {[
                "Loaded with Professional and Honest Guards",
                "Advanced Monitoring Systems",
                "24/7 Security & Surveillance",
                "Fully Licensed & Certified",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-6 h-6 text-yellow-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* More Button */}
            <Link
              to="/about"
              className="inline-block mt-8 bg-yellow-400 text-[#0A192F] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition-all"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section with Moving Animation */}
      <section className="bg-[#133864] py-12 relative overflow-hidden">
        <h3 className="text-center text-2xl font-bold text-white mb-8">
          Our Trusted Partners
        </h3>
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
          {[
            "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_TV_2015.png",
            "https://i.pinimg.com/1200x/02/5c/31/025c3154853df28af4b4090138a6c135.jpg",
            "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
            "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            "https://i.pinimg.com/736x/b5/e9/78/b5e9785731b3b1e7afe6aff9ebcb031e.jpg",
            "https://i.pinimg.com/1200x/1f/d9/99/1fd99974d1f5699ab4fd2d4ac27e7f37.jpg",
            "https://i.pinimg.com/736x/7b/2f/b4/7b2fb415acca697b5a117449a7e35302.jpg",
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Partner Logo"
              className="h-16 w-auto object-contain"
            />
          ))}
        </motion.div>
      </section>
      <TestimonialSection/>
    </>
  );
}
