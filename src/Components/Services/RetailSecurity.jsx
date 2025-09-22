import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function RetailSecurity() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Retail Security | G3 Security</title>
        <meta
          name="description"
          content="Reliable retail security services by G3 Security to protect businesses, assets, and customers."
        />
      </Helmet>

      {/* Hero Section */}
      <motion.div
        className="relative h-96 bg-yellow-600 flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/Retailbanner.jpg" // add your hero image in public folder
          alt="Retail Security"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Retail Security
        </h1>
      </motion.div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 lg:px-20 py-20 space-y-16">
        {/* Introduction */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            At <strong>G3 Security</strong>, we specialize in providing
            top-notch retail security services that safeguard your businesses,
            assets, and customers. In today’s fast-paced retail environment,
            ensuring safety is not just about protecting property—it’s about
            creating a trusted shopping experience for your customers.
          </p>

          <p className="text-gray-700">
            Our team of highly trained security professionals is equipped with
            modern surveillance tools, incident response protocols, and customer
            assistance techniques. We blend technology and manpower to ensure
            your retail outlets, malls, and showrooms operate securely and
            efficiently.
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
            src="/Retailsecurity.jpg" // add another relevant image
            alt="Retail Security Team"
            className="w-full lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              Comprehensive Retail Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We provide 24/7 on-site security, crowd management, and theft
              prevention. Our proactive approach ensures that potential risks
              are detected and mitigated before they escalate. From small
              boutiques to large shopping complexes, our solutions are scalable
              and tailored to your unique needs.
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
              Trained Security Guards
            </h3>
            <p className="text-gray-700">
              Our guards are trained in theft prevention, customer assistance,
              and emergency response to keep your retail environment safe and
              welcoming.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Advanced Surveillance
            </h3>
            <p className="text-gray-700">
              Utilizing CCTV, monitoring software, and AI-powered analytics, we
              ensure continuous oversight and quick incident detection.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Quick Incident Response
            </h3>
            <p className="text-gray-700">
              Our trained staff can respond immediately to any emergency,
              minimizing losses and ensuring customer safety.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Customer Experience
            </h3>
            <p className="text-gray-700">
              Beyond safety, we assist in crowd management and provide a smooth
              shopping experience for every customer.
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
            Trust <strong>G3 Security</strong> to protect your retail business
            with professionalism, technology, and dedication. With us, your
            assets and customers are always in safe hands.
          </p>
          <img
            src="/retail2.png" // final image
            alt="Retail Security"
            className="w-[70%] max-w-2xl mx-auto rounded-xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
