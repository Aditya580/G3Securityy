import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

// Hero slides
const slidesData = [
  {
    id: 1,
    src: "/slider-0-min.jpg",
    title: " ",
    subtitle: " ",
  },
  {
    id: 2,
    src: "/slider-1.jpg",
    title: "Corporate Facility Management",
    subtitle:
      "End-to-end solutions for businesses and enterprises.",
  },
  {
    id: 3,
    src: "/slider-2.0.jpg",
    title: "Professional Security Guards",
    subtitle: "Trained and reliable guards ensuring 24/7 safety.",
  },
  {
    id: 4,
    src: "/slider-3.JPG",
    title: "Female workforce",
    subtitle: "Skilled and dedicated staff ensuring hygiene, care, and efficiency across your premises.",
  },
  {
    id: 5,
    src: "/slider-4.JPG",
    title: "Manpower Solutions",
    subtitle: "Providing skilled workforce for diverse industries.",
  },
   {
    id: 5,
    src: "/slider-5.jpg",
    title: "Houskeeping Services",
    subtitle: "Maintain hygiene and cleanliness with our expert staff.",
  },
];

// Preload hero images for smooth performance
const preloadImages = (slides) => {
  slides.forEach((slide) => {
    const img = new Image();
    img.src = slide.src;
  });
};

const HeroSlider = React.memo(() => {
  const [[index, direction], setIndex] = useState([0, 0]);

  useEffect(() => {
    preloadImages(slidesData);
  }, []);

  const slideNext = () => setIndex([(index + 1) % slidesData.length, 1]);
  const slidePrev = () =>
    setIndex([(index - 1 + slidesData.length) % slidesData.length, -1]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(slideNext, 5000);
    return () => clearInterval(interval);
  }, [index]);

  // GPU-optimized animation variants
  const variants = useMemo(
    () => ({
      enter: (dir) => ({
        x: dir > 0 ? "100%" : "-100%",
        opacity: 0,
        transform: "translate3d(0,0,0)",
      }),
      center: { x: "0%", opacity: 1, transform: "translate3d(0,0,0)" },
      exit: (dir) => ({
        x: dir > 0 ? "-100%" : "100%",
        opacity: 0,
        transform: "translate3d(0,0,0)",
      }),
    }),
    []
  );

  return (
    <section className="relative w-full h-[70vh] md:h-[75vh] lg:h-[90vh] overflow-hidden">
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={slidesData[index].id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={(e, { offset, velocity }) => {
            if (offset.x < -100 || velocity.x < -500) slideNext();
            else if (offset.x > 100 || velocity.x > 500) slidePrev();
          }}
        >
          <img
            src={slidesData[index].src}
            alt={slidesData[index].title}
            className="w-full h-full object-cover will-change-transform"
            loading="eager"
            style={{ transform: "translate3d(0,0,0)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#E0BD67]/40 to-transparent flex items-center justify-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white px-6 drop-shadow-lg max-w-3xl"
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                {slidesData[index].title}
              </h1>
              <p className="text-sm sm:text-base md:text-xl">
                {slidesData[index].subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={slidePrev}
        className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-yellow-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-yellow-400 transition z-10"
      >
        <ChevronLeftIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#0A192F]" />
      </button>
      <button
        onClick={slideNext}
        className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-yellow-500 p-2 sm:p-3 rounded-full shadow-lg hover:bg-yellow-400 transition z-10"
      >
        <ChevronRightIcon className="w-5 sm:w-6 h-5 sm:h-6 text-[#0A192F]" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-10">
        {slidesData.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex([i, i > index ? 1 : -1])}
            className={`h-3 w-3 rounded-full ${
              index === i ? "bg-yellow-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
});

export default HeroSlider;
