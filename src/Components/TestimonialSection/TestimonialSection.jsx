import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar, FaQuoteLeft } from "react-icons/fa";

// ✅ Testimonials Data
const testimonials = [
  {
    name: "Aarav Sharma",
    profession: "Business Owner",
    feedback:
      "G3 Security has been protecting our facilities for over 3 years. Their professionalism and attention to detail is outstanding. We feel completely secure with their team.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    profession: "HR Manager",
    feedback:
      "The level of service from G3 Security is exceptional. Their guards are well-trained, professional, and always alert. I highly recommend their services.",
    rating: 5,
  },
  {
    name: "Ravi Verma",
    profession: "Startup Founder",
    feedback:
      "Excellent manpower support, always reliable and professional. They truly made a difference in our operations.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    profession: "Event Manager",
    feedback:
      "Very professional and well-trained staff. They helped us make our event run smoothly.",
    rating: 4,
  },
];

// ✅ Counter Hook
const useCounter = (target, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / target), 20);

    const timer = setInterval(() => {
      start += Math.ceil(target / (duration / stepTime));
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target, inView]);

  return count;
};

const TestimonialSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  // ✅ Counters
  const services = useCounter(1200, inView);
  const companies = useCounter(850, inView);
  const teams = useCounter(65, inView);
  const members = useCounter(4300, inView);

  return (
    <div
      ref={ref}
      className="relative py-16 bg-gray-50 text-[#0A192F] overflow-hidden"
    >
      <div className="relative container mx-auto px-6 lg:px-20 z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl font-bold">What Our Clients Say</h1>
          <p className="text-gray-500 mt-2">
            Trusted by hundreds of businesses for reliable and professional
            security services.
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden w-full max-w-4xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className="bg-white border rounded-xl shadow-lg p-8"
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.4 }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft className="text-[#E0BD67] text-3xl mb-4" />

              {/* Feedback */}
              <p className="text-gray-700 italic leading-relaxed">
                "{testimonials[index].feedback}"
              </p>

              {/* Rating */}
              <div className="flex mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonials[index].rating
                        ? "text-[#E0BD67]"
                        : "text-gray-300"
                    } mr-1`}
                  />
                ))}
              </div>

              {/* Author */}
              <div className="mt-6">
                <h4 className="font-semibold text-lg">
                  {testimonials[index].name}
                </h4>
                <p className="text-sm text-[#E0BD67] font-medium">
                  {testimonials[index].profession}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-[#E0BD67] text-[#0A192F] rounded-full shadow-md hover:scale-110 transition"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-[#E0BD67] text-[#0A192F] rounded-full shadow-md hover:scale-110 transition"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ✅ Team Image */} <div className="mt-16"> <img src="/testimonial.jpg" alt="Our Team" className="w-full max-h-74 object-cover rounded-2xl shadow-lg border-4 border-[#E0BD67]" /> </div>

        {/* ✅ Stats Counters (unchanged) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          <div>
            <h2 className="text-4xl font-bold text-[#E0BD67]">{services}+</h2>
            <p className="text-gray-600 mt-2">Services Delivered</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#E0BD67]">{companies}+</h2>
            <p className="text-gray-600 mt-2">Companies Served</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#E0BD67]">{teams}+</h2>
            <p className="text-gray-600 mt-2">Teams Built</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#E0BD67]">{members}+</h2>
            <p className="text-gray-600 mt-2">Members Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
