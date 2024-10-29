import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectSection";
import ContactForm from "./component/ContactForm";
import WorkExperience from "./component/WorkExperience";
import Footer from "./component/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <WorkExperience />
        <ProjectsSection />
        <ContactForm />
      </div>
      <Footer />
    </main>
  );
}
