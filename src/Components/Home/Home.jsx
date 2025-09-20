import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

export default function Home() {
  // Slides with optional mobile images
  const slides = [
    {
      img: "slider-0.jpg",
      mobileImg: "slider-0-mobile.jpg",
      title: "G3 Groups",
      subtitle: "Trained and reliable guards ensuring 24/7 safety.",
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
      title: "G3 Groups",
      subtitle: "Trained and reliable guards ensuring 24/7 safety.",
    },
    {
      img: "/slider-4.JPG",
      mobileImg: "/slider-4-mobile.JPG",
      title: "Manpower Solutions",
      subtitle: "Providing skilled workforce for diverse industries.",
    },
    {
      img: "slider-0.jpg",
      mobileImg: "slider-0-mobile.jpg",
      title: "G3 Groups",
      subtitle: "Trained and reliable guards ensuring 24/7 safety.",
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
      {/* Hero Section */}
   <section className="relative w-full overflow-hidden">
  <div className="relative w-full h-[60vh] md:h-[65vh] lg:h-[90vh]">
    <AnimatePresence mode="sync">
      <motion.div
        key={index}
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src={
            window.innerWidth < 768
              ? slides[index].mobileImg || slides[index].img
              : slides[index].img
          }
          alt="Hero Slide"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#E0BD67]/40 to-transparent flex items-center justify-center">
          <div className="text-center text-white px-6 drop-shadow-lg">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-2">
              {slides[index].title}
            </h1>
            <p className="text-sm sm:text-base md:text-xl">
              {slides[index].subtitle}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>

    {/* Navigation Arrows */}
    <button
      onClick={prevSlide}
      className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-[#E0BD67] p-2 sm:p-3 rounded-full text-[#0A192F] shadow-lg hover:bg-yellow-400 transition z-10"
    >
      <ChevronLeftIcon className="w-5 sm:w-6 h-5 sm:h-6" />
    </button>
    <button
      onClick={nextSlide}
      className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-[#E0BD67] p-2 sm:p-3 rounded-full text-[#0A192F] shadow-lg hover:bg-yellow-400 transition z-10"
    >
      <ChevronRightIcon className="w-5 sm:w-6 h-5 sm:h-6" />
    </button>
  </div>
</section>

      {/* About Section */}
      <section className="bg-white relative py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
          {/* Left Images */}
          <div className="relative flex flex-col items-center md:items-start">
            <img
              src="https://i.pinimg.com/1200x/c7/ce/f3/c7cef3574267b65c72dd65c1da27e22c.jpg"
              alt="Team"
              className="w-64 sm:w-72 h-56 sm:h-64 object-cover rounded-2xl shadow-lg border-4 border-[#E0BD67]"
            />
            <img
              src="https://i.pinimg.com/1200x/74/9e/9c/749e9c58a5768d488ddfc3da63b16b80.jpg"
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
