import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function ConstructionSecurity() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Construction Security | G3 Security</title>
        <meta
          name="description"
          content="Comprehensive construction site security services by G3 Security. Safeguarding assets, equipment, and workforce with advanced monitoring and skilled guards."
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
          src="/conssecurity.png" // add in public folder
          alt="Construction Security Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Construction Site Security
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
            <strong>G3 Security</strong> provides specialized{" "}
            <span className="text-yellow-600 font-semibold">
              construction site security services
            </span>{" "}
            designed to protect assets, heavy machinery, raw materials, and
            workforce. We understand the risks of theft, vandalism, and
            accidents at construction projects and deliver reliable safety
            measures.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Our team of trained guards and monitoring experts ensure that your
            construction site operates without disruptions. From small projects
            to large-scale infrastructure developments, we safeguard your
            investments 24/7.
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
            src="/conssecurity.png" // add relevant image
            alt="Construction Security Team"
            className="w-full h-[425px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              On-Site Protection You Can Trust
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our construction security team includes gatekeepers, patrolling
              guards, and monitoring staff equipped with advanced surveillance
              technology to prevent unauthorized access and maintain workplace
              safety.
            </p>
          </div>
        </motion.div>

        {/* ✅ Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              24/7 Surveillance
            </h3>
            <p className="text-gray-700">
              Round-the-clock CCTV monitoring and patrolling to ensure site
              safety at all times.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Asset & Equipment Safety
            </h3>
            <p className="text-gray-700">
              Preventing theft or misuse of expensive machinery, raw materials,
              and site equipment.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Controlled Site Access
            </h3>
            <p className="text-gray-700">
              Trained guards manage entry & exit points, ensuring only
              authorized personnel are allowed.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Safety Compliance
            </h3>
            <p className="text-gray-700">
              Ensuring adherence to safety protocols, minimizing accidents and
              disruptions.
            </p>
          </div>
        </motion.div>

        {/* ✅ Closing Section */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg">
            Trust <strong>G3 Security</strong> for{" "}
            <span className="text-yellow-600">
              construction site security services
            </span>{" "}
            that protect your workforce, materials, and equipment. We make sure
            your projects run smoothly and securely.
          </p>
          <img
            src="/cons2.png" // closing image
            alt="Construction Security Team"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
