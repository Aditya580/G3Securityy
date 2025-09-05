import React from "react";
import { FaUsersCog, FaShieldAlt, FaReact, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


const MotionDiv = ({ children, delay = 0 }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="container-fluid pb-2">
      <div className="container p-5">
        <MotionDiv>
          <div className="section-title text-center relative pb-3 mb-5 mx-auto max-w-xl">
            <h5 className=" font-helvetica font-bold text-2xl text-gray-900 dark:text-black">Why Choose Us</h5>
            <h1 className=" font-helvetica mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </div>
        </MotionDiv>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left Column */}
          <div className="space-y-5 p-5">
            <MotionDiv delay={0.2}>
              <div className="w-16 h-16 bg-black rounded flex items-center justify-center mb-3">
                <FaUsersCog className="text-white text-xl" />
              </div>
              <h4 className=" font-helvetica text-2xl font-bold text-gray-900 dark:text-black">Expert Team</h4>
              <p>
                Our team consists of seasoned professionals with years of experience in the digital marketing industry...
              </p>
            </MotionDiv>
            <MotionDiv delay={0.4}>
              <div className="w-16 h-16 bg-black rounded flex items-center justify-center mb-3">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
              <h4 className=" font-helvetica text-2xl font-bold text-gray-900 dark:text-black">Confidentiality Assured</h4>
              <p>We prioritize the security and confidentiality of your financial data.</p>
            </MotionDiv>
          </div>
          {/* Middle Image */}
          <MotionDiv delay={0.6}>
            <div className="h-[70vh] relative">
              <img src="/pic2.jpg" alt="Feature" className="w-full h-full object-cover rounded" />
            </div>
          </MotionDiv>
          {/* Right Column */}
          <div className="space-y-5 p-5">
            <MotionDiv delay={0.8}>
              <div className="w-16 h-16 bg-black rounded flex items-center justify-center mb-3">
                <FaReact className="text-white text-3xl" />
              </div>
              <h4 className=" font-helvetica text-2xl font-bold text-gray-900 dark:text-black">Cost-Effective Solutions</h4>
              <p>Save on overhead costs without compromising on quality.</p>
            </MotionDiv>
            <MotionDiv delay={1.0}>
              <div className="w-16 h-16 bg-black rounded flex items-center justify-center mb-3">
                <FaTools className="text-white text-2xl" />
              </div>
              <h4 className=" font-helvetica text-2xl font-bold text-gray-900 dark:text-black">Customized Services</h4>
              <p>Tailored solutions to address the unique needs of your business.</p>
            </MotionDiv>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
