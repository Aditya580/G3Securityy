import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Housekeeping() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Housekeeping Services | G3 Security</title>
        <meta
          name="description"
          content="Professional housekeeping services by G3 Security. Ensuring hygiene, safety, and efficiency for offices, malls, and residential complexes."
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
          src="/Housekeeping.jpg" // add your hero image in public folder
          alt="Housekeeping Services"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Housekeeping Services
        </h1>
      </motion.div>

      {/* ✅ Content Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20 space-y-16">
        {/* Introduction */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>G3 Security</strong>, our housekeeping services go beyond
            cleaning — we focus on creating a hygienic, organized, and
            welcoming environment for businesses, residential complexes, and
            public facilities. Cleanliness directly reflects your brand’s
            professionalism, and we ensure every space shines with excellence.
          </p>

          <p className="text-gray-700">
            Our dedicated housekeeping staff is trained to handle diverse
            environments, including <span className="font-semibold">corporate
            offices, malls, hospitals, educational institutions, and housing
            societies</span>. We combine advanced cleaning tools, eco-friendly
            materials, and systematic processes to deliver outstanding results.
          </p>
        </motion.div>

        {/* Image with Description */}
        <motion.div
          className="flex flex-col lg:flex-row items-center gap-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/slider-5.jpg" // add another relevant image
            alt="Professional Housekeeping"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              Smart & Reliable Housekeeping
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are designed to improve hygiene, safety, and comfort.
              Whether it’s daily cleaning, deep sanitation, or specialized
              facility maintenance, we ensure your spaces are not just clean but
              also healthy and inviting.
            </p>
          </div>
        </motion.div>

        {/* Features / Benefits */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Daily Cleaning & Maintenance
            </h3>
            <p className="text-gray-700">
              From sweeping and mopping to dusting and waste disposal, our team
              ensures spotless and well-maintained premises every day.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Deep Cleaning Services
            </h3>
            <p className="text-gray-700">
              Specialized sanitation for washrooms, carpets, upholstery, and
              hard-to-reach spaces with advanced cleaning equipment.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Trained & Verified Staff
            </h3>
            <p className="text-gray-700">
              Our housekeeping staff is professionally trained, background
              verified, and equipped to handle different facility needs.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Eco-Friendly Cleaning
            </h3>
            <p className="text-gray-700">
              We use sustainable and safe cleaning products that are effective
              while minimizing environmental impact.
            </p>
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-700 text-lg">
            With <strong>G3 Security</strong>, you can count on reliable,
            professional, and consistent housekeeping services that elevate the
            hygiene standards of your premises.
          </p>
          <img
            src="/slider-5.jpg" // final image
            alt="Housekeeping Staff"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
