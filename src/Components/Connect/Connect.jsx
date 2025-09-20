import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ShieldCheckIcon,
  UsersIcon,
  BuildingOffice2Icon,
  StarIcon,
} from "@heroicons/react/24/solid";

gsap.registerPlugin(ScrollTrigger);

export default function Connect() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-up animations
      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
        });
      });

      // Gallery image scale effect
      gsap.utils.toArray(".gallery-img").forEach((img) => {
        gsap.from(img, {
          scale: 0.8,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-b from-white via-yellow-50 to-white text-gray-900"
    >
      {/* Hero Section */}
      <section className="text-center py-20 px-6 fade-up">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          🔒 Security <span className="text-yellow-600">Solutions</span>
        </h1>
        <p className="mt-6 text-lg max-w-2xl mx-auto text-gray-700">
          At <span className="font-semibold text-yellow-700">G3 Security</span>,
          we bring decades of experience in providing manpower, surveillance,
          and professional guarding services. Trusted by{" "}
          <span className="font-semibold">40+ clients</span> with{" "}
          <span className="font-semibold">2000+ workforce</span>.
        </p>
      </section>

      {/* Experience & Highlights */}
      <section className="max-w-6xl mx-auto px-6 lg:px-12 grid md:grid-cols-4 gap-8 text-center mb-20 fade-up">
        {[
          {
            icon: <ShieldCheckIcon className="w-12 h-12 text-yellow-600 mx-auto" />,
            label: "30+ Years",
            desc: "Industry Expertise",
          },
          {
            icon: <UsersIcon className="w-12 h-12 text-yellow-600 mx-auto" />,
            label: "2000+",
            desc: "Trained Professionals",
          },
          {
            icon: <BuildingOffice2Icon className="w-12 h-12 text-yellow-600 mx-auto" />,
            label: "40+",
            desc: "Corporate Clients",
          },
          {
            icon: <StarIcon className="w-12 h-12 text-yellow-600 mx-auto" />,
            label: "24/7",
            desc: "Reliable Services",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white border border-yellow-200 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition"
          >
            {item.icon}
            <h3 className="mt-4 text-2xl font-bold text-gray-900">{item.label}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Services Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-white py-16 fade-up">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
            Our <span className="text-yellow-600">Services</span>
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Armed Security",
                desc: "Well-trained armed guards for critical infrastructure & VIPs.",
                img: "/g-3.jpg",
              },
              {
                title: "Corporate Security",
                desc: "Professional guards ensuring safety in business complexes.",
                img: "/services/reporting.jpg",
              },
              {
                title: "Manpower Supply",
                desc: "Reliable workforce tailored for your organizational needs.",
                img: "/g-1.jpg",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden shadow-md border border-yellow-200"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-white transition">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-sm max-w-xs text-center">{service.desc}</p>
                  <button className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg shadow-md">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 fade-up">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-12">
          📸 Our <span className="text-yellow-600">Gallery</span>
        </h2>
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <img
              key={id}
              src={`/gallery${id}.jpg`}
              alt={`Gallery ${id}`}
              className="gallery-img w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
