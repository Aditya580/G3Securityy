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
    <div className="relative bg-[#0a1931] text-white py-16 overflow-hidden">
      {/* ✅ Decorative SVG blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-6 lg:px-20 z-10">
        {/* Heading */}
        <MotionDiv>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h5 className="text-yellow-400 font-bold uppercase tracking-wider">
              Why Choose G3 Security
            </h5>
            <h1 className="text-3xl md:text-4xl font-bold">
              Your Safety, Our Top Priority 🔐
            </h1>
          </div>
        </MotionDiv>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {/* Left Column */}
          <div className="space-y-10">
            <MotionDiv delay={0.2}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <FaUsersCog className="text-[#0a1931] text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Trained Professionals</h4>
                  <p className="text-gray-300">
                    Our guards are highly trained to ensure round-the-clock protection for your people and property.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={0.4}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <FaShieldAlt className="text-[#0a1931] text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">24/7 Security Assurance</h4>
                  <p className="text-gray-300">
                    We provide continuous monitoring and quick response to any security threats.
                  </p>
                </div>
              </div>
            </MotionDiv>
          </div>

          {/* Middle Image */}
          <MotionDiv delay={0.6}>
            <div className="relative">
              <img
                src="/g-1.jpg"
                alt="Security Services"
                className="rounded-2xl shadow-2xl border-4 border-yellow-400 object-cover w-full h-[60vh]"
              />
              {/* Decorative floating circle */}
              <motion.div
                className="absolute -top-6 -left-6 w-20 h-20 bg-yellow-400 rounded-full shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
              />
            </div>
          </MotionDiv>

          {/* Right Column */}
          <div className="space-y-10">
            <MotionDiv delay={0.8}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <FaVideo className="text-[#0a1931] text-3xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Advanced Surveillance</h4>
                  <p className="text-gray-300">
                    Equipped with CCTV monitoring and modern security systems for complete protection.
                  </p>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv delay={1.0}>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                  <FaTools className="text-[#0a1931] text-2xl" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">Tailored Solutions</h4>
                  <p className="text-gray-300">
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
