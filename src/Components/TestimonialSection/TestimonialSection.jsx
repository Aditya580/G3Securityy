import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";

// ✅ Testimonials Data
const testimonials = [
  {
    name: "Aarav Sharma",
    profession: "Business Owner",
    image:
      "https://i.pinimg.com/736x/ee/60/85/ee60853a44569c1d477591d8952ba35d.jpg",
    feedback:
      "Excellent manpower support, always reliable and professional. They truly made a difference in our operations.",
    rating: 5,
  },
  {
    name: "Neha Patel",
    profession: "HR Manager",
    image:
      "https://i.pinimg.com/736x/6f/dc/96/6fdc96169741c8a2780007d6fc13f160.jpg",
    feedback:
      "Highly skilled workforce! Communication was smooth and their team adapted quickly to our requirements.",
    rating: 4,
  },
  {
    name: "Ravi Verma",
    profession: "Startup Founder",
    image:
      "https://i.pinimg.com/736x/b5/9c/30/b59c3077ad37ae5ddad395e1a6389553.jpg",
    feedback:
      "They provided manpower exactly as per our project needs. Hassle-free and efficient service.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    profession: "Event Manager",
    image:
      "https://i.pinimg.com/736x/ba/03/c0/ba03c04929d19a98b0f44525507603b9.jpg",
    feedback:
      "Very professional and well-trained staff. They helped us make our event run smoothly.",
    rating: 4,
  },
];

// ✅ Animated Counter Hook
const useCounter = (target, inView) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000; // total animation duration in ms
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

  // ✅ Different counters
  const services = useCounter(1200, inView);
  const companies = useCounter(850, inView);
  const teams = useCounter(65, inView);
  const members = useCounter(4300, inView);

  return (
    <div
      ref={ref}
      className="relative py-16 bg-[#0a1931] text-white overflow-hidden"
    >
      {/* Decorative Background SVGs */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-20 right-1/3 w-40 h-40 bg-yellow-500/20 rounded-full blur-2xl"></div>

      <div className="relative container mx-auto px-6 lg:px-20 z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h5 className="text-yellow-400 font-bold uppercase tracking-wider">
            Testimonial
          </h5>
          <h1 className="text-3xl font-semibold">
            What Our Clients Say About Our Services
          </h1>
        </div>

        {/* Testimonial Card */}
        <div className="relative overflow-hidden w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              className="bg-[#133864] rounded-2xl shadow-xl p-8 flex flex-col items-center border border-yellow-500/20"
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 100 }}
              transition={{ duration: 0.4 }}
            >
              <img
                className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-yellow-400 shadow-md"
                src={testimonials[index].image}
                alt={testimonials[index].name}
              />
              <h4 className="font-semibold text-xl">
                {testimonials[index].name}
              </h4>
              <p className="text-sm text-gray-300 uppercase tracking-wide">
                {testimonials[index].profession}
              </p>

              {/* ⭐ Ratings */}
              <div className="flex justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`${
                      i < testimonials[index].rating
                        ? "text-yellow-400"
                        : "text-gray-500"
                    } mx-1`}
                  />
                ))}
              </div>

              <p className="text-gray-200 text-center mt-4 leading-relaxed">
                "{testimonials[index].feedback}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-between mt-6">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-yellow-400 text-black rounded-full shadow-md hover:scale-110 transition"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-yellow-400 text-black rounded-full shadow-md hover:scale-110 transition"
            >
              <FaChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ✅ Stats Team Image Section */}
<div className="mt-16">
  <img
    src="/testimonial.jpg"
    alt="Our Team"
    className="w-full max-h-74  object-cover rounded-2xl shadow-lg border-4 border-yellow-400"
  />
</div>

        {/* ✅ Stats Counter Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-16">
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">{services}+</h2>
            <p className="text-gray-300 mt-2">Services Delivered</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">{companies}+</h2>
            <p className="text-gray-300 mt-2">Companies Served</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">{teams}+</h2>
            <p className="text-gray-300 mt-2">Teams Built</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-yellow-400">{members}+</h2>
            <p className="text-gray-300 mt-2">Members Supported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
