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
    <div className="relative bg-white text-gray-900 py-20 overflow-hidden">
      {/* ✅ Premium golden background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-yellow-200/40 to-yellow-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-yellow-300/30 to-yellow-500/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-20 z-10">
        {/* Heading */}
        <MotionDiv>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h5 className="bg-gradient-to-r from-[#E0BD67] to-[#f5d67b] bg-clip-text text-transparent font-bold uppercase tracking-wider">
              Why Choose G3 Security
            </h5>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Your Safety, Our Top Priority 🔐
            </h1>
          </div>
        </MotionDiv>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            <MotionDiv delay={0.2}>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                {/* ✅ Fixed circular icon */}
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaUsersCog className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">Trained Professionals</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Our guards are highly trained to ensure round-the-clock protection for your people and property.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={0.4}>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">24/7 Security Assurance</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    We provide continuous monitoring and quick response to any security threats.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Middle Image */}
          <MotionDiv delay={0.6}>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                <img
                  src="/g-1.jpg"
                  alt="Security Services"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-[#E0BD67] to-[#f5d67b] rounded-full shadow-md"></div>
            </div>
          </MotionDiv>

          {/* Right Column */}
          <div className="space-y-10">
            <MotionDiv delay={0.8}>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaVideo className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">Advanced Surveillance</h4>
                  <p className="text-gray-600 text-sm md:text-base">
                    Equipped with CCTV monitoring and modern security systems for complete protection.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={1.0}>
              <div className="flex items-start gap-5 p-5 rounded-2xl bg-white/70 shadow-md hover:shadow-xl backdrop-blur-md transition">
                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-[#E0BD67] to-[#f5d67b] shadow-lg">
                  <FaTools className="text-white text-2xl" />
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-semibold">Tailored Solutions</h4>
                  <p className="text-gray-600 text-sm md:text-base">
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
