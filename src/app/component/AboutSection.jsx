"use client";
import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCertificate,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa"; // Importing various icons
import {
  SiExpress,
  SiNextdotjs,
  SiMui,
  SiStrapi,
  SiPostman,
  SiOpenai,
} from "react-icons/si"; // Importing additional icons
import { TbBrandTailwind } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { FcLinux } from "react-icons/fc";
import { FiGitlab } from "react-icons/fi";
import { motion } from "framer-motion"; // Importing framer-motion

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
        {/* List of Skills with Icons */}
        <div className="flex items-center text-gradient">
          <FaHtml5 className="text-4xl mr-2 text-primary-500" />
          <span>HTML</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaCss3Alt className="text-4xl mr-2 text-secondary-500" />
          <span>CSS</span>
        </div>
        <div className="flex items-center text-gradient">
          <TbBrandTailwind className="text-4xl mr-2 text-blue-400" />
          <span>Tailwind CSS</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaBootstrap className="text-4xl mr-2 text-purple-500" />
          <span>Bootstrap</span>
        </div>
        <div className="flex items-center text-gradient">
          <SiMui className="text-4xl mr-2 text-blue-600" />
          <span>MUI</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaJs className="text-4xl mr-2 text-yellow-400" />
          <span>JavaScript</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaReact className="text-4xl mr-2 text-blue-500" />
          <span>React.js</span>
        </div>
        <div className="flex items-center text-gradient">
          <SiNextdotjs className="text-4xl mr-2 text-gray-400" />
          <span>Next.js</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaNodeJs className="text-4xl mr-2 text-green-500" />
          <span>Node.js</span>
        </div>
        <div className="flex items-center text-gradient">
          <SiExpress className="text-4xl mr-2 text-gray-500" />
          <span>Express.js</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaDatabase className="text-4xl mr-2 text-indigo-500" />
          <span>MongoDB</span>
        </div>
        <div className="flex items-center text-gradient">
          <SiStrapi className="text-4xl mr-2 text-orange-600" />
          <span>Strapi</span>
        </div>
        <div className="flex items-center text-gradient">
          <IoLogoFirebase className="text-4xl mr-2 text-yellow-500" />
          <span>Firebase</span>
        </div>
        <div className="flex items-center text-gradient">
          <SiPostman className="text-4xl mr-2 text-yellow-500" />
          <span>Postman</span>
        </div>
        <div className="flex items-center text-gradient">
          <FcLinux className="text-4xl mr-2 text-yellow-500" />
          <span>Linux</span>
        </div>
        <div className="flex items-center text-gradient">
          <SiOpenai className="text-4xl mr-2 text-yellow-500" />
          <span>ChatGPT</span>
        </div>
        <div className="flex items-center text-gradient">
          <FaGithub className="text-4xl mr-2 text-yellow-500" />
          <span>Git & GitHub</span>
        </div>
        <div className="flex items-center text-gradient">
          <FiGitlab className="text-4xl mr-2 text-yellow-500" />
          <span>GitLab</span>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-none pl-0 space-y-3">
        <li className="flex items-center text-gradient">
          <FaCertificate className="text-2xl mr-2" />
          <Link
            href="https://drive.google.com/file/d/1SGs__4Q-Z_1coyDJuyJpiGlGZifwix0L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline"
          >
            React Certification
          </Link>
        </li>
        <li className="flex items-center text-gradient">
          <FaCertificate className="text-2xl mr-2" />
          <Link
            href="https://drive.google.com/file/d/1IHU3S6pSCPZPseNbJUCKlkAxuv1xD6rx/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline"
          >
            Next.js Certification
          </Link>
        </li>
        <li className="flex items-center text-gradient">
          <FaCertificate className="text-2xl mr-2" />
          <Link
            href="https://drive.google.com/file/d/1ceQr38_811mWMIThlfTje3-_Sraq_HlQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:underline"
          >
            Java+DSA Certification
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="py-12 bg-[#121212] text-[#ADB7BE]" id="about">
      <div className="md:flex md:justify-center gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="md:max-w-md hidden sm:block">
          <Image
            src="/images/about.png"
            alt="about"
            width={500}
            height={500}
            className="object-cover" 
            />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full max-w-lg">
          <h2 className="text-4xl text-accent font-bold text-white mb-4">About Me</h2>
          <motion.p
            className="text-base lg:text-lg mb-4 text-gradient" // Ensure color is set
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }} // Adjust duration as needed
          >
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Node.js, Express, MongoDB, HTML,
            CSS, and Git. I am a quick learner and always looking to expand my
            knowledge and skill set. I am a team player excited to work with
            others to create amazing applications.
          </motion.p>

          <div className="flex flex-row justify-center md:justify-start mt-8 space-x-2">
            {TAB_DATA.map((tabData) => (
              <TabButton
                key={tabData.id}
                selectTab={() => handleTabChange(tabData.id)}
                active={tab === tabData.id}
              >
                {tabData.title}
              </TabButton>
            ))}
          </div>
          <div className="mt-8 text-base lg:text-lg">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
