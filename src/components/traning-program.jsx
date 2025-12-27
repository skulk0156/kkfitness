/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import training1 from "/assets/training1.jpeg";
import training2 from "/assets/training2.jpeg";
import training3 from "/assets/training3.jpeg";
import training4 from "/assets/training4.jpeg";
import training5 from "/assets/training5.jpg";
import training6 from "/assets/training6.webp";

const programs = [
  { title: "CROSSFIT TRAINING", image: training1 },
  { title: "PERSONAL TRAINING", image: training2 },
  { title: "STRENGTH TRAINING", image: training3 },
  { title: "POWER YOGA", image: training4 },
  { title: "HIIT WORKOUTS", image: training5 },
  { title: "CARDIO FITNESS", image: training6 },
];
const fadeInUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};


const TrainingPrograms = () => {
  return (
     <section className="bg-[#313a49] text-white py-16 px-4 md:px-20 font-sans" id="training-programs">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-yellow-400 text-normal uppercase tracking-widest animate-pulse"
        >
          Train With Experts
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold tracking-wider text-white drop-shadow-md"
        >
          Training Programs
        </motion.h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0">
        {programs.map((program, idx) => (
          <motion.div
            key={idx}
            className="relative group h-[280px] sm:h-[320px] overflow-hidden transition-all duration-500 transform hover:scale-[1.02] hover:z-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-white text-center text-lg sm:text-xl font-semibold tracking-wide group-hover:tracking-widest transition-all duration-500 drop-shadow-lg">
                {program.title}
              </h3>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>

  );
};

export default TrainingPrograms;