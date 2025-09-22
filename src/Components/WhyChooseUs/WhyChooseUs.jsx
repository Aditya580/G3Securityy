import React from "react";
import { FaUsersCog, FaShieldAlt, FaVideo, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// ✅ Animation wrapper
const MotionDiv = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="relative bg-white text-gray-900 py-16 md:py-20 overflow-hidden">
      {/* ✅ Premium golden background blobs */}
      <div className="absolute top-0 left-0 w-40 sm:w-60 md:w-72 h-40 sm:h-60 md:h-72 bg-gradient-to-r from-yellow-200/40 to-yellow-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-56 sm:w-80 md:w-96 h-56 sm:h-80 md:h-96 bg-gradient-to-r from-yellow-300/30 to-yellow-500/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-20 z-10">
        {/* Heading */}
        <MotionDiv>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <h5 className="bg-gradient-to-r from-[#E0BD67] to-[#f5d67b] bg-clip-text text-transparent font-bold uppercase tracking-wider text-sm sm:text-base">
              Why Choose G3 Security
            </h5>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Your Safety, Our Top Priority 🔐
            </h1>
          </div>
        </MotionDiv>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            <MotionDiv delay={0.2}>
              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaUsersCog className="text-white text-xl sm:text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Trained Professionals</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Our guards are highly trained to ensure round-the-clock protection for your people and property.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={0.4}>
              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaShieldAlt className="text-white text-xl sm:text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">24/7 Security Assurance</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    We provide continuous monitoring and quick response to any security threats.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Middle Image */}
          <MotionDiv delay={0.6}>
            <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[400px] lg:max-w-none">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                <img
                  src="/g-1.jpg"
                  alt="Security Services"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#E0BD67] to-[#f5d67b] rounded-full shadow-md"></div>
            </div>
          </MotionDiv>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            <MotionDiv delay={0.8}>
              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaVideo className="text-white text-xl sm:text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Advanced Surveillance</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Equipped with CCTV monitoring and modern security systems for complete protection.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={1.0}>
              <div className="flex items-start gap-4 sm:gap-5 p-4 sm:p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaTools className="text-white text-xl sm:text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Tailored Solutions</h4>
                  <p className="text-gray-600 text-sm sm:text-base">
                    From corporate offices to residential complexes, we customize security services for every need.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
