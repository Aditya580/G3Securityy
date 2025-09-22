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

    // Animate service cards
gsap.utils.toArray(".group").forEach((card, i) => {
  gsap.from(card, {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: i * 0.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
    },
  });
});

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
<section className="bg-gradient-to-r from-yellow-50 to-white py-20 fade-up">
  <div className="max-w-6xl mx-auto px-6 lg:px-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 mb-16">
      Our <span className="text-yellow-600">Services</span>
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: "Armed Security",
          desc: "Highly trained armed guards ensuring maximum safety for VIPs, banks, and critical infrastructure.",
          icon: (
            <svg
              className="w-14 h-14 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2l4 -4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
              />
            </svg>
          ),
        },
        {
          title: "Corporate Security",
          desc: "End-to-end security solutions for IT parks, offices, and corporate spaces with 24/7 monitoring.",
          icon: (
            <svg
              className="w-14 h-14 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7l9-4l9 4v6c0 5-3 9-9 11c-6-2-9-6-9-11V7z"
              />
            </svg>
          ),
        },
        {
          title: "Manpower Supply",
          desc: "Dedicated, trained, and reliable workforce customized to your industry and organizational needs.",
          icon: (
            <svg
              className="w-14 h-14 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 20h5V9H2v11h5m10-9v10M9 11v10"
              />
            </svg>
          ),
        },
        {
          title: "Event Security",
          desc: "Crowd management, access control, and professional guards for concerts, expos, and events.",
          icon: (
            <svg
              className="w-14 h-14 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8c-1.657 0-3 1.343-3 3c0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 11c4.418 0 8-3.582 8-8c0-4.418-3.582-8-8-8S4 6.582 4 11c0 4.418 3.582 8 8 8z"
              />
            </svg>
          ),
        },
        {
          title: "Retail Security",
          desc: "Trusted guards and surveillance for malls, shops, and retail outlets ensuring asset safety.",
          icon: (
            <svg
              className="w-14 h-14 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 7h18M3 12h18M3 17h18"
              />
            </svg>
          ),
        },
        {
          title: "24/7 Surveillance",
          desc: "Modern CCTV & monitoring systems with real-time alerts for complete peace of mind.",
          icon: (
            <svg
              className="w-14 h-14 text-yellow-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0a3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
              />
            </svg>
          ),
        },
      ].map((service, i) => (
        <div
          key={i}
          className="group bg-white border border-yellow-200 p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition transform relative overflow-hidden"
        >
          <div className="flex justify-center mb-6">{service.icon}</div>
          <h3 className="text-xl font-bold text-gray-900 text-center">
            {service.title}
          </h3>
          <p className="mt-3 text-gray-600 text-center">{service.desc}</p>

          {/* Hover Effect Glow */}
          <div className="absolute inset-0 bg-yellow-100 opacity-0 group-hover:opacity-20 transition" />
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
              src={`/Gallery${id}.jpg`}
              alt={`Gallery ${id}`}
              className="gallery-img w-full h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
