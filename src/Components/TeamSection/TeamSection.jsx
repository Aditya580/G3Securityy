import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const teamMembers = [
  {
    name: "Sanvi Soni",
    role: "Founder & CEO",
    image: "https://i.pinimg.com/736x/b4/f2/a3/b4f2a3e6e84314b8dd922cd7c3df0b07.jpg",
  },
  {
    name: "Amit Sharma",
    role: "Project Manager",
    image: "https://i.pinimg.com/736x/2e/bf/f4/2ebff4e459b1ff82f0a869ab27aec553.jpg",
  },
  {
    name: "Harshita Kudarha",
    role: "Developer",
    image: "https://i.pinimg.com/736x/eb/13/90/eb139051ed4df60359087277479dc549.jpg",
  },
];

const TeamSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div ref={ref} className="container p-10">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h5 className="text-[#3c5055] font-bold uppercase">Team Members</h5>
        <h1 className="text-2xl font-semibold">Professional Stuffs Ready to Help Your Business</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="relative ">
              <img className=" w-[30vw] h-[50vh] object-cover" src={member.image} alt={member.name} />
            </div>
            <div className="text-center py-4">
              <h4 className="text-black font-semibold">{member.name}</h4>
              <p className="uppercase text-sm text-gray-600">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
