import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import HeroSlider from "../Header/HeroSlider";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

export default function Home() {
  // Slides with optional mobile images
  const slides = [
    {
      img: "slider-0.jpg",
      mobileImg: "slider-0-mobile.jpg",
      title: " ",
      subtitle: " ",
    },
    {
      img: "slider-2.0.jpg",
      mobileImg: "slider-2-mobile.jpg",
      title: "Professional Security Guards",
      subtitle: "Trained and reliable guards ensuring 24/7 safety.",
    },
    {
      img: "/slider-3.JPG",
      mobileImg: "/slider-3-mobile.JPG",
      title: "Female workforce",
      subtitle: "Skilled and dedicated staff ensuring hygiene, care, and efficiency across your premises.",
    },
    {
      img: "slider-0.jpg",
      mobileImg: "slider-0-mobile.jpg",
      title: " ",
      subtitle: " ",
    },
    {
      img: "/slider-4.JPG",
      mobileImg: "/slider-4-mobile.JPG",
      title: "Manpower Solutions",
      subtitle: "Providing skilled workforce for diverse industries.",
    },
    {
      img: "slider-0-min.jpg",
      mobileImg: "slider-0-mobile.jpg",
      title: " ",
      subtitle: " ",
    },
    {
      img: "slider-5.jpg",
      mobileImg: "slider-0-mobile.jpg",
      title: "Houskeeping Services",
      subtitle: "Maintain hygiene and cleanliness with our expert staff.",
    },
    {
      img: "slider-1.jpg",
      mobileImg: "slider-1-mobile.jpg",
      title: "Corporate Facility Management",
      subtitle: "End-to-end solutions for businesses and enterprises.",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds (2s hold + 1s slide)
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <>
    <HeroSlider/>

      {/* About Section */}
      <section className="bg-white relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
          {/* Left Images */}
          <div className="relative flex flex-col items-center md:items-start">
            <img
              src="about2.jpg"
              alt="Team"
              className="w-64 sm:w-72 h-56 sm:h-64 object-cover rounded-2xl shadow-lg border-4 border-[#E0BD67]"
            />
            <img
              src="about1.jpg"
              alt="Team"
              className="w-56 sm:w-64 h-48 sm:h-56 object-cover rounded-2xl shadow-lg absolute -bottom-10 left-16 sm:left-20 border-4 border-[#E0BD67]"
            />

            {/* Experience Badge */}
            <div className="absolute -top-6 -left-6 bg-[#E0BD67] text-[#0A192F] font-bold p-4 sm:p-6 rounded-2xl shadow-xl">
              <p className="text-2xl sm:text-3xl">10+</p>
              <span className="text-xs sm:text-sm">Years Experience</span>
            </div>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-[#E0BD67] font-semibold uppercase tracking-wide">
              About Us
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0A192F] mt-3">
              Trusted Security Solutions Since 2014
            </h2>
            <p className="mt-4 sm:mt-6 text-gray-600">
              Our professional guards and monitoring systems keep your premises
              safe and secure. We combine human expertise with the latest
              security technologies to give you peace of mind.
            </p>

            {/* Checklist */}
            <ul className="mt-6 space-y-2 sm:space-y-3">
              {[
                "Loaded with Professional and Honest Guards",
                "Advanced Monitoring Systems",
                "24/7 Security & Surveillance",
                "Fully Licensed & Certified",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircleIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#E0BD67]" />
                  <span className="text-gray-800 text-sm sm:text-base">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              to="/about"
              className="inline-block mt-6 sm:mt-8 bg-[#E0BD67] text-[#0A192F] font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-all"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#fafafa] shadow-lg border-t-4 border-[#E0BD67] py-8 sm:py-12 relative overflow-hidden">
        <h3 className="text-center text-xl sm:text-2xl font-bold text-[#0A192F] mb-6 sm:mb-8">
          Our Trusted Partners
        </h3>
        <motion.div
          className="flex gap-8 sm:gap-16 items-center"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[
            "/partner1.jpg",
            "partner5.jpg",
            "partner2.jpg",
            "partner3.jpg",
            "Partner6.jpg",
            "partner4.jpg",
            "partner7.jpg",
            "partner8.jpg",
            "partner9.jpg",
            "partner10.jpg",
            "partner11.jpg",
            "partner12.png",
            "partner13.jpg",
            "partner14.png",
            "partner15.png",
             
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Partner Logo"
              className="h-12 sm:h-20 w-auto object-contain"
            />
          ))}
        </motion.div>
      </section>

      {/* Testimonials & Why Choose Us */}
      <TestimonialSection />
      <WhyChooseUs />
    </>
  );
}
