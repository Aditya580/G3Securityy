import React from "react";
import {
  FaUserShield,
  FaUsersCog,
  FaHardHat,
  FaBroom,
  FaBuilding,
  FaTruckLoading,
  FaTools,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Retail Security",
    description: "Professional guards ensuring safety in malls, shops, and retail outlets.",
    icon: <FaUserShield className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/Retailsecurity.jpg",
    link: "/retail-security",
  },
  {
    title: "Manpower Services",
    description: "Skilled manpower supply to meet your business and operational needs.",
    icon: <FaUsersCog className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/Gallery6.jpg",
    link: "/manpower",
  },
  {
    title: "Technical Manpower",
    description: "Expert technicians for specialized industrial and technical roles.",
    icon: <FaTools className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/technicalmanpower.jpg",
    link: "/technicalmanpower",
  },
  {
    title: "Housekeeping Services",
    description: "Reliable housekeeping staff for clean and hygienic workplaces.",
    icon: <FaBroom className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/houskeepinglabour.png",
    link: "/housekeeping",
  },
  {
    title: "Corporate Security Guards",
    description: "Trained guards to protect your offices, assets, and employees.",
    icon: <FaBuilding className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/corporatesecurity.png",
    link: "/corporate-security",
  },
  {
    title: "Loading & Unloading Services",
    description: "Dedicated workforce for safe and efficient loading/unloading operations.",
    icon: <FaTruckLoading className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/loadinglabour.png",
    link: "/loading",
  },
  {
    title: "Construction Security",
    description: "Security teams specialized for construction sites and heavy projects.",
    icon: <FaHardHat className="text-yellow-600 text-3xl sm:text-4xl" />,
    img: "/conssecurity.png",
    link: "/construction-security",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-16 sm:py-20 text-gray-900">
      <Helmet>
        <title>Services | G3 Security</title>
        <meta
          name="description"
          content="Explore G3 Security services – from manpower supply to corporate guards, retail security, and more."
        />
      </Helmet>

      {/* Heading */}
      <div className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-3 sm:mb-4">
          Our Services
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg">
          At <span className="font-semibold">G3 Security</span>, we provide
          trusted manpower and security solutions for businesses, events, and
          industries. Choose the service that fits your needs.
        </p>
      </div>

      {/* Services Grid */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-20 z-10">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              to={service.link}
              key={index}
              className="group bg-white border border-yellow-100 rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:border-yellow-400 transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-40 sm:h-48 md:h-56 object-cover group-hover:scale-105 transition duration-500"
                />
                {/* Icon Badge */}
                <div className="absolute -bottom-6 left-4 sm:left-6 bg-white p-2 sm:p-3 rounded-full shadow-md border border-yellow-200">
                  {service.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-4 sm:p-6 pt-10 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base flex-grow">
                  {service.description}
                </p>
                <span className="mt-3 sm:mt-4 inline-block font-semibold text-yellow-600 group-hover:text-yellow-700 text-sm sm:text-base">
                  Read More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 sm:mt-20 text-center px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
          Need Security or Manpower Support?
        </h2>
        <p className="text-gray-600 mb-5 sm:mb-6 text-sm sm:text-base max-w-xl mx-auto">
          Our team is just a call away. Let us provide you with the right
          professionals for your needs.
        </p>
        <Link
          to="/contact"
          className="w-full sm:w-auto block sm:inline-block bg-gradient-to-r from-yellow-500 to-yellow-700 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:from-yellow-600 hover:to-yellow-800 transition text-center"
        >
          Contact Us Today
        </Link>
      </div>
    </section>
  );
}
