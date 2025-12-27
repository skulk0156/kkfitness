import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-10 p-3 bg-white/10 border backdrop-blur-md text-white rounded-full shadow-md hover:bg-white/20 transition duration-300 z-50"
      >
        <ArrowUp className="text-[#89c541] text-2xl" />
      </button>
    )
  );
};

export default ScrollToTopButton;
