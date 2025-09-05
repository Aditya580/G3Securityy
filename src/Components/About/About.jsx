import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import "./About.css";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="relative bg-[#133864] text-white overflow-hidden">
      {/* Top Wavy Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-20"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 0 46.29c47.66 22 98.12 29.13 146.25 24 
             48.13-5.14 95.07-21.85 143.2-29.57 
             66.3-10.74 132.24-1.78 198.6 9.1 
             70.59 11.52 141.5 23.9 212.6 20.58 
             63.81-3 127.15-19.81 190.9-28.77 
             75.65-10.81 151.19-6.6 225.67 8.65 
             54.62 11.12 108.76 27.35 163.78 40.19 
             24.54 5.65 49.12 10.9 74 14.52V0z"
            className="fill-white opacity-10"
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 py-20 relative z-10">
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-start"
        >
          <img
            src="/manpng.png"
            alt="About us"
            className="rounded-2xl shadow-2xl w-full max-w-[450px] h-auto"
          />

          {/* Floating Badge */}
          <motion.div
            className="absolute -bottom-6 -left-6 bg-yellow-400 text-[#0A192F] font-bold px-6 py-4 rounded-2xl shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <p className="text-3xl">15+</p>
            <span className="text-sm">Years of Expertise</span>
          </motion.div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <p className="text-yellow-400 font-semibold uppercase tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 leading-snug">
            G3 Group Enterprises
          </h2>
          <p className="mt-6 text-gray-300">
            At G3 Security, we specialize in providing reliable and professional
            manpower workforce solutions across Bhopal, India. With years of
            experience in the security and workforce management sector, we take
            pride in being the trusted partner for businesses, residential
            complexes, educational institutions, and events.
          </p>

          {/* Expandable Section */}
          <AnimatePresence>
            {showMore && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-300">
                  Our mission is simple – to deliver well-trained, disciplined,
                  and committed personnel who ensure safety, efficiency, and
                  peace of mind for our clients.
                </p>

                <h3 className="mt-6 text-yellow-400 font-semibold">
                  ✨ Why Choose G3 Security?
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Skilled Workforce – Professionally trained guards, supervisors, and support staff.",
                    "Tailored Services – Customized manpower solutions to fit diverse business needs.",
                    "Trusted in Bhopal – Serving industries, corporates, and individuals with integrity.",
                    "24/7 Availability – Round-the-clock workforce deployment and monitoring.",
                    "Affordable & Reliable – High-quality manpower services at competitive rates.",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircleIcon className="w-6 h-6 text-yellow-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="mt-6 text-yellow-400 font-semibold">
                  🌍 Our Vision
                </h3>
                <p className="mt-2 text-gray-300">
                  To be the leading manpower and security services provider in
                  Bhopal, recognized for our professionalism, reliability, and
                  client satisfaction.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* CTA Button */}
          <button
            className="mt-8 bg-yellow-400 text-[#0A192F] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-300 transition-all"
            onClick={() => setShowMore(!showMore)}
          >
            {showMore ? "Show Less" : "Learn More"}
          </button>
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
            d="M321.39 56.44c58.68-10.79 117.66-26.88 
             176.75-29.1 58.69-2.22 117.43 8.6 
             176.11 16.93 59.22 8.37 118.44 14.15 
             177.66 8.2 55.11-5.51 110.22-21.91 
             165.33-26.11 59.93-4.57 119.85 4.43 
             179.78 12.67V120H0V27.35c42.13 7.63 
             84.26 15.26 126.39 19.74 65.33 7.06 
             130.67 9.35 195.00 9.35z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
