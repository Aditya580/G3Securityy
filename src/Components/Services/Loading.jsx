import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Loading Manpower | G3 Security</title>
        <meta
          name="description"
          content="Efficient and reliable loading manpower services by G3 Security. Skilled workforce for loading, unloading, and handling goods with safety and precision."
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
          src="/loadinglabour.png" // add hero image in public folder
          alt="Loading Manpower Banner"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Loading Manpower Services
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
            At <strong>G3 Security</strong>, we provide reliable{" "}
            <span className="text-yellow-600 font-semibold">
              loading and unloading manpower services
            </span>{" "}
            that ensure goods are handled with efficiency, care, and safety.
            Our skilled workforce is trained to manage logistics operations of
            all scales—from small businesses to large industries.
          </p>

          <p className="text-gray-700 leading-relaxed">
            With a focus on speed, discipline, and safety, our manpower ensures
            that your goods are loaded, unloaded, and transported smoothly,
            minimizing risks of damage or delays. We pride ourselves on being a
            trusted partner in strengthening supply chains and supporting
            business operations.
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
            src="/loadinglabour.png" // add relevant image
            alt="Loading Team"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              Skilled Workforce for Logistics
            </h2>
            <p className="text-gray-700 leading-relaxed">
              From warehouses to retail hubs, our manpower is trained in
              efficient handling of goods, ensuring your supply chain runs
              seamlessly. With safety-first practices, we guarantee the secure
              movement of materials across your operations.
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
              Safe Handling
            </h3>
            <p className="text-gray-700">
              Our staff is trained to handle fragile and heavy items with utmost
              care, reducing damage risks.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Efficient Loading & Unloading
            </h3>
            <p className="text-gray-700">
              Streamlined processes that ensure timely loading and unloading,
              minimizing operational delays.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Trained Manpower
            </h3>
            <p className="text-gray-700">
              Every worker is trained in logistics handling, equipment use, and
              workplace safety.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Scalable Solutions
            </h3>
            <p className="text-gray-700">
              Whether small shops or large warehouses, our manpower adapts to
              your business needs.
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
            Partner with <strong>G3 Security</strong> for loading manpower
            services that are <span className="text-yellow-600">reliable, safe,
            and efficient</span>. We ensure your operations never slow down.
          </p>
          <img
            src="/loading2.png" // closing image
            alt="Loading Manpower"
            className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
