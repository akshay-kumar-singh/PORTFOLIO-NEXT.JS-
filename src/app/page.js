import Image from "next/image";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import AboutSection from "./component/AboutSection";
import ProjectsSection from "./component/ProjectSection";
import ContactForm from "./component/ContactForm";
import Footer from "./component/Footer";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Navbar />
      <div className="container mt-28 mx-auto px-2 py-16">
     <HeroSection />
     </div>
     <div className="container mt-28 mx-auto px-12 py-16">
     <AboutSection />
     </div>
     <ProjectsSection />
     <ContactForm />
     <Footer />
    </main>
  );
}
