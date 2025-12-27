import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Contact from "./components/Contact";
import HeroSlider from "./components/HeroSlider";
import StatsSection from "./components/StatsSection";
import DefineGoals from "./components/define-goals";
import FitnessCompareSection from "./components/fitness-compare-section";
import TrainingPrograms from "./components/traning-program";
import About from "./pages/About";
import IndoorActivities from "./pages/IndoorActivities";
import OutdoorActivities from "./pages/OutdoorActivities";
import Activities from "./pages/Activities";
import { Testimonials } from "./components/Testimonials";

function Home() {
  return (
    <>
      <HeroSlider />
      <StatsSection />
      <DefineGoals />
      <FitnessCompareSection />
      <Testimonials />
      <TrainingPrograms />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/activities/indoor" element={<IndoorActivities />} />
        <Route path="/activities/outdoor" element={<OutdoorActivities />} />
        <Route path="/activities" element={<Activities />} />
      </Routes>
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
