import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/Third Section";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialStack from "./components/TestimonialsStack";
import SeventhSection from "./components/SeventhSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen text-white">

      {/* GLOBAL CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <Navbar />
        <Hero />
        <SecondSection />
        <ThirdSection />
        <ProjectsSection />
        <TestimonialStack />
        <SeventhSection />
        <Footer />
      </div>

    </div>
  );
}