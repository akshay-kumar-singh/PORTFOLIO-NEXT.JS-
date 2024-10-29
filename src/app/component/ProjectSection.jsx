"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Real Time Chat App",
    description: "it is a Real Time Chat App , Here use can send and recieve message in real time with Socket.io. User see other users online status and in this chat app Global State is managed with Zustand",
    image: "/images/projects/1.png",
    tag: ["All","FullStack", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/Chat-App",
    previewUrl: "https://chat-app-kuhc.onrender.com",
  },
  {
    id: 2,
    title: "Stack-Overflow Website",
    description: "This is a Stack Overflow clone project built using the MERN stack. The project replicates the core functionalities of Stack Overflow, allowing users to ask questions, provide answers, upvote/downvote questions and answers, and comment on posts.",
    image: "/images/projects/2.png",
    tag: ["All","FullStack", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/Stack-Overflow-Frontend",
    previewUrl: "https://stack-overflow-prod.netlify.app/",
  },
 
  {
    id: 3,
    title: "Youtube",
    description: "it is a youtube clone with React js and web API. Incorporated a robust search functionality using keywords, enabling users to find videos of interest easily.",
    image: "/images/projects/4.png",
    tag: ["All","Frontend", "Mobile"],
    gitUrl: "https://github.com/akshay-kumar-singh/youtube-clone/tree/master",
    previewUrl: "https://youtube-clone-akki.netlify.app",
  },
  {
    id: 4,
    title: "Unsplash-image-search",
    description: "This is a simple web app which is used to search your interested images.",
    image: "/images/projects/3.png",
    tag: ["All","Frontend", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/unsplash-image-search",
    previewUrl: "https://image-search-react-unsplash.netlify.app",
  },
  {
    id: 5,
    title: "Expense-Tracker",
    description: "Expanse Tracker: Manage, visualize, and analyze your financial expenditures with this open-source budget and expense tracking tool.",
    image: "/images/projects/5.png",
    tag: ["All","Frontend", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/expanse-tracker",
    previewUrl: "https://expense-tracker-akki.netlify.app",
  },
  {
    id: 6,
    title: "Zomato App",
    description: "it is a simple food delivery app with React js and Web Api",
    image: "/images/projects/6.png",
    tag: ["Frontend", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/zomato",
    previewUrl: "https://zomato-food.netlify.app/",
  },
  {
    id: 7,
    title: "Admin Dashboard",
    description: "This project is a React.js admin dashboard designed to provide an intuitive interface for managing various aspects of your application or system.",
    image: "/images/projects/7.png",
    tag: ["All","Frontend", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/Admin-Dashboard-React-",
    previewUrl: "https://admin-dashboard1111.netlify.app",
  },
  {
    id: 8,
    title: "My Blog",
    description: "This  is a simple Blog website using Next.js and Tailwind css In which i Write only Important interview questions related to Tech jobs",
    image: "/images/projects/8.png",
    tag: ["FullStack", "Web"],
    gitUrl: "https://github.com/akshay-kumar-singh/My-Blog-Next.js-",
    previewUrl: "https://my-blog-next-js-three.vercel.app/",
  },
  
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-accent mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Frontend"
          isSelected={tag === "Frontend"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="FullStack"
          isSelected={tag === "FullStack"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;