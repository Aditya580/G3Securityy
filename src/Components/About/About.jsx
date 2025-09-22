import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { Helmet } from "react-helmet-async";


export default function About() {
  const higherTeam = [
    { name: "Mr. Rajesh Sharma", role: "Founder & CEO", img: "/team1.jpg" },
    { name: "Ms. Priya Verma", role: "Director of Operations", img: "/team2.jpg" },
    { name: "Mr. Anil Gupta", role: "Head of Security", img: "/team3.jpg" },
  ];

  const teamMembers = [
    { name: "Deepika Malviya", role: "HR Manager", img: "/t-8.jpg" },
    { name: "Devendra Singh", role: "Traininng Officer", img: "/t-2.png" },
    { name: "Rohit Thakur", role: "Senior Supervisor", img: "/t-3.png" },
    { name: "Anish Malviya", role: "Supervisor(H.K)", img: "/t-4.png" },
    { name: "Ramsevak Namdev", role: "Supervisor(H.K)", img: "/t-6.png" },
    { name: "Saket Goswami", role: "Supervisor", img: "/t-5.png" },
    { name: "Munna Lal Patel", role: "Field Officer", img: "/t-7.png" },
    { name: "Dilip", role: "Houskeeping Supervisor", img: "/t-9.jpg" },
    { name: "Manoj", role: "Field Supervisor", img: "/t-10.jpg" },
    

 ];

  const certifications = [
    "/cert1.jpeg",
    "/cert2.jpeg",
    "/cert3.jpeg",
    "/cert4.jpeg",
    "/cert5.jpeg",
    "/doc1.png",
    "/doc2.png",
    "/doc3.png",
    "/doc4.png",
    "/doc5.png",
    "/doc6.png",
    
  ];

  return (

    
    <section className="relative bg-gradient-to-b from-white via-white to-yellow-50 text-gray-900 overflow-hidden">
       <Helmet>
        <title>About Us | G3 Security</title>
        <meta
          name="description"
          content="G3 Security, founded in 2014 by Mr. Ganesh Goswami, delivers reliable manpower and security solutions across Bhopal and beyond. With 2000+ trained personnel and 40+ satisfied clients, we are trusted for discipline, professionalism, and excellence in workforce management"
        />
      </Helmet>
      {/* Top Wavy Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 0 46.29c47.66 22 98.12 29.13 146.25 24 
             48.13-5.14 95.07-21.85 143.2-29.57 
             66.3-10.74 132.24-1.78 198.6 9.1 
             70.59 11.52 141.5 23.9 212.6 20.58 
             63.81-3 127.15-19.81 190.9-28.77 
             75.65-10.81 151.19-6.6 225.67 8.65 
             54.62 11.12 108.76 27.35 163.78 40.19 
             24.54 5.65 49.12 10.9 74 14.52V0z"
            className="fill-yellow-100"
          ></path>
        </svg>
      </div>

      {/* Main Intro Section */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6 lg:px-12 py-20 relative z-10">
       {/* Left Image Section */}
<motion.div
  initial={{ opacity: 0, x: -60 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative flex flex-col items-center text-center"
>
  {/* Owner Image */}
  <div className="relative">
    <img
      src="/Owner.png"
      alt="About us"
      className="rounded-3xl shadow-lg w-full max-w-[320px] h-auto object-cover border border-yellow-200"
    />

    {/* Floating Badge */}
    <motion.div
      className="absolute -bottom-6 -left-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-bold px-6 py-4 rounded-2xl shadow-xl"
      initial={{ scale: 0.8 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ repeat: Infinity, duration: 3 }}
    >
      <p className="text-3xl">30+</p>
      <span className="text-sm">Years of Expertise</span>
    </motion.div>
  </div>

  {/* Owner Info */}
  <div className="mt-10">
    <h3 className="text-2xl font-bold text-gray-900">Mr. Ganesh Goswami</h3>
    <p className="text-lg font-semibold text-yellow-600">Founder & Director</p>
  </div>
</motion.div>


        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col"
        >
          <p className="text-yellow-600 font-semibold uppercase tracking-wider">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 leading-snug text-gray-900">
            G3 Group Enterprises
          </h2>
          <p className="mt-6 text-gray-700 leading-relaxed">
            At G3 Security, we take pride in delivering reliable and professional manpower solutions across Bhopal and beyond. Since our humble beginning in 2014 with just 5 personnel, we have grown into a trusted organization with 2000+ dedicated manpower and 40+ satisfied clients across diverse industries.

With over 30 years of collective expertise, G3 Security has become a pillar of trust, discipline, and professionalism in the security and workforce management sector.

Our journey is inspired and guided by the vision of Mr. Ganesh Goswami, the esteemed Founder & Director of G3 Security Group. Known for his polite demeanor, strong leadership, and inspiring personality, he has been the driving force behind transforming G3 Security into a name synonymous with excellence and integrity.

We are not just a manpower provider — we are your partners in safety, efficiency, and growth.
          </p>
        </motion.div>
      </div>

     {/* Team Section */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
    Our <span className="text-[#E0BD67]">Leadership</span> & <span className="text-[#E0BD67]">Team</span>
  </h2>

  {/* Top Leadership */}
  <div className="grid md:grid-cols-3 gap-8 mb-16">
    {[
      { name: "Mr.Shinu Goswami", role: "Managing Director", img: "/leader1.jpg" },
      { name: "Mr.Sandeep Patel", role: "General Manager", img: "/leader2.png" },
      { name: "B.K Rawat (Ex-BSF)", role: "Branch Manager (Security)", img: "/leader3.png" },
    ].map((member, idx) => (
      <div key={idx} className="flex flex-col items-center text-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-[280px] h-[290px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>
        <p className="text-yellow-600 text-sm">{member.role}</p>
      </div>
    ))}
  </div>

  {/* Team Members */}
<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
  {teamMembers.map((member, idx) => (
    <div key={idx} className="flex flex-col items-center text-center">
      <img
        src={member.img}
        alt={member.name}
        className="w-[200px] h-[200px] object-cover rounded-xl shadow-md hover:scale-105 transition-transform"
      />
      <h4 className="mt-3 text-base font-semibold text-gray-900">
        {member.name}
      </h4>
      <p className="text-sm font-medium text-yellow-600">
        {member.role}
      </p>
    </div>
  ))}
</div>

</section>

{/* G3 Security Certifications */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
    <span className="text-[#E0BD67]">G3 Security</span> Registrations & Certifications
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {[
      { id: 1, name: "ESIC Registration" },
      { id: 2, name: "GOMASTA" },
      { id: 3, name: "Incorporation Certificate" },
      { id: 4, name: "PASARA License" },
      { id: 5, name: "EPFO" },
    ].map((cert) => (
      <div key={cert.id} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition-transform">
        <img
          src={`/cert${cert.id}.jpeg`}
          alt={`Certification ${cert.id}`}
          className="w-full h-64 object-contain mb-2"
        />
        <p className="text-center text-yellow-600 font-semibold text-sm sm:text-base">
          {cert.name}
        </p>
      </div>
    ))}
  </div>
</section>

{/* G3 Enterprises Certifications */}
<section className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
    <span className="text-[#E0BD67]">G3 Enterprises</span> Registrations & Certifications
  </h2>

  <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
    {[
      { id: 1, name: "EPFO" },
      { id: 2, name: "GST Certificate" },
      { id: 3, name: "Otabu Certificate" },
      { id: 4, name: "MSME Certificate" },
      { id: 5, name: "GOMASTA" },
      { id: 6, name: "Udhyam Certificate" },
    ].map((cert) => (
      <div key={cert.id} className="flex flex-col items-center bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition-transform">
        <img
          src={`/doc${cert.id}.png`}
          alt={`Certification ${cert.id}`}
          className="w-full h-64 object-contain mb-2"
        />
        <p className="text-center text-yellow-600 font-semibold text-sm sm:text-base">
          {cert.name}
        </p>
      </div>
    ))}
  </div>
</section>


      {/* Bottom Wavy Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44c58.68-10.79 117.66-26.88 
             176.75-29.1 58.69-2.22 117.43 8.6 
             176.11 16.93 59.22 8.37 118.44 14.15 
             177.66 8.2 55.11-5.51 110.22-21.91 
             165.33-26.11 59.93-4.57 119.85 4.43 
             179.78 12.67V120H0V27.35c42.13 7.63 
             84.26 15.26 126.39 19.74 65.33 7.06 
             130.67 9.35 195.00 9.35z"
            className="fill-yellow-100"
          ></path>
        </svg>
      </div>
    </section>
  );
}
