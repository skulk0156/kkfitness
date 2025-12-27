import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down & past 100px
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="flex gap-2 items-center">
              <img src="/logo.png" alt="logo" className="size-16" />
              <div className="flex flex-col items-start">
                <h2 className="text-xl md:text-3xl font-bold text-[#89c541] underline">
                  KK FITNESS 360
                </h2>
                <p className="text-normal font-semibold text-white">
                  Since 2020
                </p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a
                href="/#"
                className="text-white font-medium hover:text-red-400 transition-colors duration-300"
              >
                HOME
              </a>
              <a
                href="/#training-programs"
                className="text-white/80 font-medium hover:text-red-400 transition-colors duration-300"
              >
                PROGRAMS
              </a>
              <a
                href="/activities"
                className="text-white/80 font-medium hover:text-red-400 transition-colors duration-300"
              >
                ACTIVITIES
              </a>

              <a
                href="/about"
                className="text-white/80 font-medium hover:text-red-400 transition-colors duration-300"
              >
                ABOUT
              </a>
              <a
                href="#contact"
                className="text-white/80 font-medium hover:text-red-400 transition-colors duration-300"
              >
                CONTACT
              </a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                className="lg:hidden text-white hover:text-red-400 transition-colors duration-300"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={closeMenu}
        />

        <div
          className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <img src="/logo.png" alt="logo" className="size-16" />
              <button
                onClick={closeMenu}
                className="text-white hover:text-red-400 transition-colors duration-300"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-6">
                <a
                  href="/#"
                  onClick={closeMenu}
                  className="block text-white font-medium text-lg hover:text-red-400 transition-colors duration-300 py-2"
                >
                  HOME
                </a>
                <a
                  href="/#training-programs"
                  onClick={closeMenu}
                  className="block text-white/80 font-medium text-lg hover:text-red-400 transition-colors duration-300 py-2"
                >
                  PROGRAMS
                </a>
                <a
                  href="/activities"
                  onClick={closeMenu}
                  className="block text-white/80 font-medium text-lg hover:text-red-400 transition-colors duration-300 py-2"
                >
                  ACTIVITIES
                </a>
                <a
                  href="/about"
                  onClick={closeMenu}
                  className="block text-white/80 font-medium text-lg hover:text-red-400 transition-colors duration-300 py-2"
                >
                  ABOUT
                </a>
                <a
                  href="/#contact"
                  onClick={closeMenu}
                  className="block text-white/80 font-medium text-lg hover:text-red-400 transition-colors duration-300 py-2"
                >
                  CONTACT
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
