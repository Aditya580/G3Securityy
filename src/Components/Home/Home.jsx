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
  // Array of slides
  const slides = [
    {
      img: "https://i.pinimg.com/1200x/c7/ce/f3/c7cef3574267b65c72dd65c1da27e22c.jpg",
      title: "Professional Security Guards",
      subtitle: "Trained and reliable guards ensuring 24/7 safety.",
    },
    {
      img: "/Housekeeping.jpg",
      title: "Housekeeping Services",
      subtitle: "Maintain hygiene and cleanliness with our expert staff.",
    },
    {
      img: "Manpower.jpg",
      title: "Manpower Solutions",
      subtitle: "Providing skilled workforce for diverse industries.",
    },
    {
      img: "Technicalman.jpg",
      title: "Corporate Facility Management",
      subtitle: "End-to-end solutions for businesses and enterprises.",
    },
    {
      img: "EventSecurity.jpg",
      title: "Event Security",
      subtitle: "Safe and reliable security for events of all scales.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex(index === 0 ? slides.length - 1 : index - 1);
  const nextSlide = () => setIndex((index + 1) % slides.length);

  return (
    <>
    {/* Hero Section */}
<section className="relative w-full min-h-screen md:h-[85vh] lg:h-[90vh] overflow-hidden">
  <AnimatePresence mode="wait">
    <motion.div
      key={slides[index].img}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={(e, { offset, velocity }) => {
        if (offset.x < -100 || velocity.x < -500) {
          nextSlide();
        } else if (offset.x > 100 || velocity.x > 500) {
          prevSlide();
        }
      }}
    >
      <img
        src={slides[index].img}
        alt="Hero Slide"
        className="w-full h-full object-cover object-center"
      />

      {/* Golden Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#E0BD67]/40 to-transparent flex items-center justify-center">
        <div className="text-center text-white px-6 drop-shadow-lg">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
            {slides[index].title}
          </h1>
          <p className="text-base md:text-xl">{slides[index].subtitle}</p>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute left-6 top-1/2 -translate-y-1/2 bg-[#E0BD67] p-3 rounded-full text-[#0A192F] shadow-lg hover:bg-yellow-400 transition"
  >
    <ChevronLeftIcon className="w-6 h-6" />
  </button>
  <button
    onClick={nextSlide}
    className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#E0BD67] p-3 rounded-full text-[#0A192F] shadow-lg hover:bg-yellow-400 transition"
  >
    <ChevronRightIcon className="w-6 h-6" />
  </button>
</section>


      {/* About Section */}
      <section className="bg-white relative py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 items-center">
          {/* Left Images */}
          <div className="relative flex flex-col items-center md:items-start">
            <img
              src="https://i.pinimg.com/1200x/c7/ce/f3/c7cef3574267b65c72dd65c1da27e22c.jpg"
              alt="Team"
              className="w-72 h-64 object-cover rounded-2xl shadow-lg border-4 border-[#E0BD67]"
            />
            <img
              src="https://i.pinimg.com/1200x/74/9e/9c/749e9c58a5768d488ddfc3da63b16b80.jpg"
              alt="Team"
              className="w-64 h-56 object-cover rounded-2xl shadow-lg absolute -bottom-10 left-20 border-4 border-[#E0BD67]"
            />

            {/* Experience Badge */}
            <div className="absolute -top-6 -left-6 bg-[#E0BD67] text-[#0A192F] font-bold p-6 rounded-2xl shadow-xl">
              <p className="text-3xl">10+</p>
              <span className="text-sm">Years Experience</span>
            </div>
          </div>

          {/* Right Text */}
          <div>
            <p className="text-[#E0BD67] font-semibold uppercase tracking-wide">
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
                  <CheckCircleIcon className="w-6 h-6 text-[#E0BD67]" />
                  <span className="text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <Link
              to="/about"
              className="inline-block mt-8 bg-[#E0BD67] text-[#0A192F] font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-yellow-400 transition-all"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-[#fafafa] shadow-lg border-t-4 border-[#E0BD67] py-12 relative overflow-hidden">
        <h3 className="text-center text-2xl font-bold text-[#0A192F] mb-8">
          Our Trusted Partners
        </h3>
        <motion.div
          className="flex gap-16 items-center"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
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
          ].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt="Partner Logo"
              className="h-[84px] w-auto object-contain"
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
