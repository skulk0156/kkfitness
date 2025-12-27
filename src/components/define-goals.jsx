import { Dumbbell, HeartPulse, Target, ActivitySquare } from "lucide-react";

const offerings = [
  {
    icon: <Dumbbell size={45} />,
    title: "CROSSFIT",
    description: "High-intensity functional training combining weightlifting, cardio, and gymnastics for total body fitness.",
  },
  {
    icon: <HeartPulse size={45} />,
    title: "HEALTH",
    description: "Comprehensive wellness programs focusing on nutrition, mental health, and physical fitness for a balanced lifestyle.",
  },
  {
    icon: <Target size={45} />,
    title: "STRATEGIES",
    description: "Personalized fitness plans and goal-setting techniques to help you achieve your desired fitness outcomes efficiently.",
  },
  {
    icon: <ActivitySquare size={45} />,
    title: "WORKOUT",
    description: "Diverse exercise routines combining strength training, cardio, and flexibility work for optimal physical performance.",
  },
];

const DefineGoals = () => {
  return (
    <section className="py-20 bg-white text-center px-6 sm:px-10">
      <h4 className="text-lg font-semibold tracking-wider text-gray-600">WHAT WE OFFER</h4>
      <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-12 text-black tracking-widest">
        DEFINE YOUR GOAL
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {offerings.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4"
          >
            <div
              className="text-black animate-fadeUp hover:scale-105 transition-transform duration-300"
              style={{
                animationDelay: `${index * 0.2}s`,
                animationFillMode: "forwards",
              }}
            >
              {item.icon}
            </div>
            <h3 className="text-xl text-black font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm px-4">{item.description}</p>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default DefineGoals;
