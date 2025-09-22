import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function TechnicalManpower() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Technical Manpower | G3 Security</title>
        <meta
          name="description"
          content="Specialized technical manpower services by G3 Security. Skilled engineers, technicians, and operators for industries, IT, and advanced security operations."
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
          src="/technicalmanpower.jpg" // add hero image in public folder
          alt="Technical Manpower Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Technical Manpower Services
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
            At <strong>G3 Security</strong>, we provide specialized{" "}
            <span className="text-yellow-600 font-semibold">
              technical manpower solutions
            </span>{" "}
            that empower organizations with skilled engineers, technicians, and
            operators. Our workforce ensures the smooth operation of advanced
            machinery, IT systems, and security technology.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From industrial plants to IT hubs, our technical manpower is trained
            to work with precision, innovation, and reliability. With a focus on
            safety and efficiency, we bridge the gap between manpower and
            technology.
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
            src="/technical2.png" // add relevant image
            alt="Technical Team"
            className="w-full h-[325px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              Skilled Technical Workforce
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our manpower includes certified technicians, IT specialists,
              machine operators, and system engineers who ensure your technical
              operations are handled with expertise and care.
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
              Certified Professionals
            </h3>
            <p className="text-gray-700">
              Skilled and certified manpower for IT, security tech, and
              industrial operations.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Industry-Specific Expertise
            </h3>
            <p className="text-gray-700">
              Technicians trained in sectors like manufacturing, IT, telecom,
              and security systems.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Reliable Operations
            </h3>
            <p className="text-gray-700">
              Our team ensures continuous uptime and efficiency in all
              technical-related operations.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Scalable Workforce
            </h3>
            <p className="text-gray-700">
              Flexible manpower solutions to match your short-term or long-term
              technical needs.
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
            Choose <strong>G3 Security</strong> for{" "}
            <span className="text-yellow-600">technical manpower services</span>{" "}
            that combine skill, technology, and dedication. We ensure your
            operations stay future-ready and efficient.
          </p>
          <img
            src="/technicalmanpower.jpg" // closing image
            alt="Technical Manpower"
            className="w-full  h-[475px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
