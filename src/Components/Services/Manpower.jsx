import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Manpower() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Manpower Services | G3 Group</title>
        <meta
          name="description"
          content="Professional manpower services by G3 Group. Skilled and trained personnel for businesses, events, residential complexes, and industries."
        />
      </Helmet>

      {/* ✅ Hero Section */}
      <motion.div
        className="relative h-96 bg-yellow-600 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/Manpower.jpg"
          alt="Manpower Services Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Manpower Services
        </h1>
      </motion.div>

      {/* ✅ Content Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20 space-y-16">
        {/* Intro */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>G3 Group</strong>, we deliver reliable and professional
            manpower services tailored to support businesses, events, and
            communities. Our skilled and disciplined personnel bring unmatched
            expertise, ensuring not just efficiency but also smooth day-to-day
            operations in every environment.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From corporate offices and residential complexes to industrial sites
            and large-scale events, our manpower services cover all aspects of
            workforce needs. Every professional is trained to handle tasks,
            assist clients, and maintain order with reliability and dedication.
          </p>
        </motion.div>

        {/* ✅ Image with Text */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/Gallery6.jpg"
            alt="G3 Manpower Services Team"
            className="w-full h-[325px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              Skilled Personnel for Every Requirement
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Whether it’s full-time staff for offices, trained personnel for
              events, or patrolling staff for large areas, we ensure that our
              manpower is skilled, disciplined, and reliable. With years of
              expertise, we provide a seamless blend of efficiency and trust so
              you can focus on your growth while we handle the workforce.
            </p>
          </div>
        </motion.div>

        {/* ✅ Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Corporate & Office Support
            </h3>
            <p className="text-gray-700">
              Trained staff for access control, visitor assistance, and
              administrative support in a professional corporate environment.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Event & Hospitality Services
            </h3>
            <p className="text-gray-700">
              Professional personnel to ensure smooth execution of events,
              hospitality functions, and VIP gatherings.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Residential & Community Assistance
            </h3>
            <p className="text-gray-700">
              24/7 workforce support for entry control, resident assistance, and
              patrolling in housing societies and complexes.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Industrial & Warehouse Support
            </h3>
            <p className="text-gray-700">
              Workforce solutions for factories, warehouses, and logistics hubs
              with staff trained in safety compliance and operations.
            </p>
          </div>
        </motion.div>

        {/* ✅ Closing Statement */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg">
            With <strong>G3 Group</strong>, you get more than just manpower—you
            get a dedicated workforce committed to supporting your business,
            assets, and people with integrity and excellence.
          </p>
          <img
            src="/manpower3.png"
            alt="Manpower Services Team"
            className="w-full h-[325px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
