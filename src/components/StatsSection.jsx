import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";
import { Award, Users, TrendingUp } from "lucide-react";

const statsData = [
  {
    id: 1,
    number: 15,
    title: "FITNESS AWARDS",
    description:
      "Recognized for excellence, our gym has earned numerous awards for outstanding fitness programs and community impact.",
    icon: <Award className="h-8 w-8" />,
    color: "from-purple-600 to-blue-600",
  },
  {
    id: 2,
    number: 3000,
    title: "OUR MEMBERS",
    description:
      "Join a thriving community of fitness enthusiasts who motivate and support each other on their journey to better health.",
    icon: <Users className="h-8 w-8" />,
    color: "from-blue-600 to-indigo-600",
  },
  {
    id: 3,
    number: 7549,
    title: "MONTHLY PUSHUPS",
    description:
      "Our members collectively complete thousands of pushups every month, showcasing dedication and impressive progress.",
    icon: <TrendingUp className="h-8 w-8" />,
    color: "from-indigo-600 to-purple-600",
  },
];

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [hasAnimated, sectionRef]);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-gradient-to-br from-gray-900 via-green-900 to-emerald-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-green-400/20 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-emerald-400/10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-teal-400/5 animate-ping"></div>
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border-2 border-green-400/20 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-12 h-12 border border-emerald-500/30 transform rotate-45"></div>
        <div className="absolute top-3/4 right-1/4 w-8 h-8 bg-green-500/20 rounded-full"></div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 opacity-20">
          <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
        </div>
        <div className="absolute bottom-32 right-32 opacity-15">
          <div className="w-10 h-10 border-2 border-white transform rotate-12"></div>
        </div>
        <div className="absolute top-1/3 left-1/2 opacity-10">
          <div className="w-4 h-4 bg-white rounded-full"></div>
        </div>
        <div className="absolute bottom-1/4 left-20 opacity-20">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-2/3 right-1/3 opacity-15">
          <div className="w-5 h-5 border border-orange-500 transform rotate-45"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className={`relative group ${
                index !== statsData.length - 1
                  ? "lg:border-r lg:border-white/20"
                  : ""
              }`}
            >
              {/* Card content */}
              <div className="text-center px-6 lg:px-8 py-8 lg:py-12 transition-all duration-500 hover:transform hover:scale-105">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`p-4 rounded-full bg-gradient-to-r ${stat.color} text-white shadow-lg transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    {stat.icon}
                  </div>
                </div>

                {/* Animated Number */}
                <div className="mb-4">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                    {isVisible ? (
                      <>
                        <CountUp
                          start={0}
                          end={stat.number}
                          duration={2.5}
                          delay={index * 0.3}
                          separator=","
                        />
                        {stat.number >= 3000 && "+"}
                      </>
                    ) : (
                      "0"
                    )}
                  </h2>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-lg sm:text-xl tracking-wider mb-4 opacity-90">
                  {stat.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-950 via-emerald-900 to-teal-800"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500"></div>
    </section>
  );
};

export default StatsSection;
