"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const workExperiences = [
  {
    id: 1,
    position: "Software Developer",
    company: "Vision Infotech",
    duration: "Oct 2024 - Present",
    description: (
      <>
        <span className="text-gradient font-semibold">
          Project: LMS Portal
          <br />
        </span>
        – Developing an interactive learning management system using React.js
        with a strong focus on modularity and reusability. Following the Atomic
        Design principle, I build components in a structured hierarchy of atoms,
        molecules, organisms, and templates, ensuring consistency and ease of
        scaling. <br />
        <br />
        – I’ve integrated GrapesJS, allowing institutes to customize their
        platforms visually without needing to code.
        <br />
        <br />
        – My responsibilities include implementing frontend functionality and
        connecting with backend APIs to deliver a user-friendly, intuitive, and
        adaptable experience.
        <br />
        <br />– Working on: React
      </>
    ),
  },
  {
    id: 2,
    position: "Software Developer (Intern)",
    company: "Starting Core",
    duration: "Aug 2024 - Oct 2024",
    description: (
      <>
        <span className="text-gradient font-semibold">
          Project 1: Lace Studio
        </span>
        <br />
        – Developed a user authentication and subscription system with secure
        signup, login, logout, and email verification using Node.js and
        Nodemailer.
        <br />
        <br />
        – Created frontend pages. Configured Strapi CMS for managing blogs and
        products, enabling seamless product listing with external links.
        <br />
        <br />
        <span className="text-gradient font-semibold">Project 2: Pets</span>
        <br />
        – Set up the full project structure, organizing components for better
        clarity and optimized image handling from Figma. Resolved existing
        issues to improve overall project functionality and performance.
        <br />
        <br />– Worked on: <span className="text-accent">React</span>,{" "}
        <span className="text-accent">Node</span>,{" "}
        <span className="text-accent">Express</span>,{" "}
        <span className="text-accent">MongoDB</span>,{" "}
        <span className="text-accent">Strapi</span>.
        <br />
        <br />
        <Link
          href="https://drive.google.com/file/d/1RY2wcPxs1F4NxCOoh7jcFvqeyaAx3WbW/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gradient underline hover:text-primary-400 transition duration-200"
        >
          View Certificate
        </Link>
      </>
    ),
  },
];

const WorkExperience = () => {
  const cardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="work-experience" className="py-12 bg-[#121212] text-[#ADB7BE]">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        Work Experience
      </h2>
      <div className="container mx-auto px-4">
        <ul className="space-y-6">
          {workExperiences.map((experience, index) => (
            <motion.li
              key={experience.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 rounded-lg bg-[#1E1E1E] transition duration-300 hover:shadow-xl hover:bg-[#2A2A2A] cursor-pointer"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                  {experience.position}
                </h3>
                <p className="text-gradient">{experience.duration}</p>
              </div>
              <p className="text-gradient">{experience.company}</p>
              <p className="text-gradient text-lg leading-relaxed mt-2">
                {experience.description}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
