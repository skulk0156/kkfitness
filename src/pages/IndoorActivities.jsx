/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const indoorActivities = [
  {
    title: "PERSONAL TRAINING EXPERTS",
    image: "/assets/indoor_activities/personal_training.webp",
  },
  {
    title: "HARD CORE WORKOUT",
    image: "/assets/indoor_activities/hardcore_workout.jpeg",
  },
  { title: "ABS WORKOUT", image: "/assets/indoor_activities/abs.jpg" },
  { title: "ZUMBA & YOGA", image: "/assets/indoor_activities/yoga2.jpg" },
  {
    title: "FUNCTIONAL TRAINING",
    image: "/assets/indoor_activities/functional_training.jpg",
  },
  { title: "CROSS-FIT AREA", image: "/assets/indoor_activities/crossfit.jpg" },
  {
    title: "CALISTHENICS AREA",
    image: "/assets/indoor_activities/calisthenics.webp",
  },
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

const IndoorActivities = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 text-white pt-32 pb-16 px-4 md:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Indoor Activities
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 max-w-7xl mx-auto">
        {indoorActivities.map((program, idx) => (
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
    </div>
  );
};

export default IndoorActivities;
