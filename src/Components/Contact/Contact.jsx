import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <section className="bg-gray-50 py-16 px-6 lg:px-20">
           <Helmet>
              <title>Contact Us | G3 Group</title>
              <meta
                name="description"
                content="G3 Security, founded in 2014 by Mr. Ganesh Goswami, delivers reliable manpower and security solutions across Bhopal and beyond. With 2000+ trained personnel and 40+ satisfied clients, we are trusted for discipline, professionalism, and excellence in workforce management"
              />
            </Helmet>
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-12 border-2 border-yellow-500 text-center">
        {/* Header */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
          Contact <span className="text-yellow-500">G3 Group</span>
        </h1>
        <p className="text-gray-600 text-base sm:text-lg mb-10">
          We’re always happy to hear from you! Connect with us by email or phone, and our team will gladly assist you at the earliest.
          Contact us on the given information.
        </p>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <span className="font-semibold text-yellow-500">Email:</span>
            <a href="mailto:Sonug3office@gmail.com" className="text-gray-700 hover:text-yellow-500 transition">
              Sonug3office@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <span className="font-semibold text-yellow-500">Phone:</span>
            <a href="tel:+919685473316 , +91 8463895466 " className="text-gray-700 hover:text-yellow-500 transition">
            +91 9685473316 / +91 8463895466
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <span className="font-semibold text-yellow-500">Address:</span>
            <span className="text-gray-700">
              BINDIYA DHAM COLONY, MANDIDEEP DISTT., RAISEN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
