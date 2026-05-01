import React from "react";
import { motion } from "framer-motion";

const skills = [
  { title: "Html5", subtitle: "Markup Language", icon: "./Html.png" },
  { title: "Css3", subtitle: "Style Sheet Language", icon: "./css.png" },
  { title: "JS", subtitle: "Programming Language", icon: "./js.png" },
  { title: "React", subtitle: "JS Library", icon: "./react.png" },
  { title: "GSAP", subtitle: "Animation Library", icon: "./gsap.png" },
  { title: "Tailwind Css", subtitle: "CSS Framework", icon: "tailwind.png" },
];

// 🔥 animation variants
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between cards
    },
  },
};

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function Skills() {
  return (
    <div className="min-h-screen bg-[#020617] text-white px-6 py-16 relative overflow-hidden">
      
      {/* Glow dots (unchanged) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-10 left-10 blur-[2px] shadow-[0_0_20px_#22d3ee] animate-pulse"></div>
        <div className="absolute w-2 h-2 bg-orange-400 rounded-full bottom-16 right-10 blur-[2px] shadow-[0_0_20px_#fb923c] animate-pulse"></div>
      </div>

      <div className="relative z-10">
        
        {/* Heading */}
        <div className="flex items-center justify-center mb-12 gap-4">
          <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>

          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills <span className="text-teal-400">Set</span>
            </h2>
            <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 rounded"></div>
          </div>

          <div className="hidden sm:block h-[1px] w-20 md:w-32 bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
        </div>

        {/* 🔥 Scroll Animation Container */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // 👈 triggers on scroll
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              
              // 🔥 HOVER SCALE EFFECT
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 0px 25px rgba(20,184,166,0.5)",
              }}
              transition={{ type: "spring", stiffness: 300 }}

              className="group border border-teal-400/30 rounded-xl p-6 text-center bg-[#020617]"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>

              <img
                src={skill.icon}
                alt={skill.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />

              <p className="text-gray-400 text-sm">{skill.subtitle}</p>

              <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}