import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

export default function CorporateSecurity() {
  return (
    <section className="bg-white text-gray-900">
      <Helmet>
        <title>Corporate Security | G3 Security</title>
        <meta
          name="description"
          content="Professional corporate security services by G3 Security for IT parks, offices, and industries. Ensuring 24/7 safety, monitoring, and crowd control."
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
          src="/corporatesecurity.png" // add your hero image in public folder
          alt="Corporate Security"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <h1 className="text-5xl lg:text-6xl font-extrabold text-white text-center z-10 drop-shadow-lg">
          Corporate Security
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
            At <strong>G3 Security</strong>, we provide highly reliable{" "}
            <span className="font-semibold">corporate security solutions</span>{" "}
            designed to safeguard offices, IT parks, and industries. Security in
            the corporate world is not just about protecting property—it’s about
            ensuring a safe and productive environment for employees, clients,
            and stakeholders.
          </p>

          <p className="text-gray-700">
            With a team of trained professionals, advanced surveillance systems,
            and strong incident response protocols, we create a seamless layer
            of protection around your workplace. From visitor management to
            emergency handling, we ensure every aspect of corporate security is
            covered.
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
            src="/corporatesecurity.png" // add another relevant image
            alt="Corporate Security Team"
            className="w-full h-[465px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-yellow-600">
              Professional Workplace Protection
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Our services include on-site guards, access control systems,
              visitor management, and round-the-clock monitoring. We design
              customized solutions that fit the size and needs of your
              organization—whether it’s a corporate office, business complex, or
              industrial facility.
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
              Access Control
            </h3>
            <p className="text-gray-700">
              We implement advanced entry systems and visitor checks to ensure
              only authorized personnel access your premises.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Trained Security Officers
            </h3>
            <p className="text-gray-700">
              Our officers are trained in crisis management, surveillance, and
              professional conduct suitable for corporate environments.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              24/7 Monitoring
            </h3>
            <p className="text-gray-700">
              With continuous CCTV surveillance and monitoring software, we keep
              your offices secure around the clock.
            </p>
          </div>

          <div className="p-6 bg-yellow-50 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Emergency Response
            </h3>
            <p className="text-gray-700">
              In case of emergencies, our team responds quickly to protect
              people, assets, and ensure continuity of operations.
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
            Choose <strong>G3 Security</strong> as your corporate security
            partner. With our expertise, technology, and dedication, we create a
            safe and reliable workplace where your business can thrive without
            worry.
          </p>
          <img
            src="/g-3.jpg" // final image
            alt="Corporate Security"
            className="w-full h-[350px] lg:w-1/2 rounded-xl shadow-lg object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
