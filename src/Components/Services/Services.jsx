import React from "react";
import {
  FaBook,
  FaCalculator,
  FaMoneyCheckAlt,
  FaClipboardCheck,
  FaMoneyBillWave,
  FaFileInvoice,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom"; // if using React Router


const services = [
  {
    title: "Retail Security",
    description:
      "Precise and timely recording of financial transactions to maintain well-organized financial records.",
    icon: <FaBook />,
    img: "/g2.jpg",
    link: "/services/retail-security",
  },
  {
    title: "Manpower Services",
    description:
      "Holistic accounting solutions to ensure your financial statements are accurate and compliant.",
    icon: <FaCalculator />,
    img: "/g-1.jpg",
    link: "/services/manpower-services",
  },
  {
    title: "Armed Security Guards",
    description: "Streamlined handling of payables and receivables to optimize cash flow.",
    icon: <FaMoneyCheckAlt />,
    img: "/g-3.jpg",
    link: "/services/armed-guards",
  },
  {
    title: "Technical Manpower",
    description:
      "Comprehensive assistance in preparing and organizing financial data for seamless audits.",
    icon: <FaClipboardCheck />,
    img: "/g-4.jpg",
    link: "/services/technical-manpower",
  },
  {
    title: "Housekeeping Services",
    description: "Dependable payroll management to ensure timely and accurate employee payments.",
    icon: <FaMoneyBillWave />,
    img: "/g-5.jpg",
    link: "/services/housekeeping",
  },
  {
    title: "Unarmed Security Guards",
    description:
      "Expert guidance on tax planning and preparation to ensure compliance with local regulations.",
    icon: <FaFileInvoice />,
    img: "/g-6.jpg",
    link: "/services/unarmed-guards",
  },
  {
    title: "Corporate Security Guards",
    description:
      "Helps in analyzing financial data, tracking expenses, and creating accurate forecasts to optimize business growth.",
    icon: <FaFileInvoice />,
    img: "/services/reporting.jpg",
    link: "/services/corporate-security",
  },
  {
    title: "Loading Unloading Services",
    description:
      "Ensures smooth financial operations by monitoring incoming and outgoing cash, preventing shortages, and maintaining liquidity.",
    icon: <FaFileInvoice />,
    img: "/services/cashflow.jpg",
    link: "/services/loading-unloading",
  },
  {
    title: "Construction Security",
    description:
      "Reviewing, correcting, and organizing financial records to eliminate errors, reconcile accounts, and ensure compliance.",
    icon: <FaFileInvoice />,
    img: "/services/cleanup.jpg",
    link: "/services/construction-security",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 py-20 text-gray-900">
        <Helmet>
        <title>About Us | G3 Security</title>
        <meta
          name="description"
          content="Learn about G3 Security’s history, mission, and team of experts delivering intelligence and cyber advisory services globally."
        />
      </Helmet>
      {/* Decorative top waves */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-20 text-yellow-400/20"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M0,0V46.29c47.74,22,103.78,29.05,158,17.39,70.05-15.15,136.29-57.3,206-66.85C438.48-13.15,512.34,19.9,583,35.78,663,54.22,743,60,823,44.27c70.05-13.93,136.29-46.08,206-56.63,55.1-8.35,111.15-1.3,158,20.74V0Z"
            opacity=".25"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-20 z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-yellow-500 to-yellow-700 bg-clip-text text-transparent mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At G3 Security, we provide reliable manpower solutions tailored to
            your needs. From skilled workforce to specialized support, we ensure
            security and efficiency at every step.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white border border-yellow-200 rounded-2xl shadow-md overflow-hidden group hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/30 transition duration-300"
            >
              {/* Background Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-56 object-cover transition duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4 opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:from-yellow-500 hover:to-yellow-700 transition"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
