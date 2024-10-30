"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";

    // Fetch the resume file
    fetch(resumeUrl)
      .then((response) => response.blob())
      .then((blob) => {
        // Create a blob URL for the PDF file
        const url = window.URL.createObjectURL(new Blob([blob]));

        // Create an anchor element for download
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = "resume.pdf"; // File name users will see when downloading

        anchor.setAttribute("type", "application/pdf");
        anchor.click();

        // Release the object URL
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading the file:", error);
      });
  };

  return (
    <section className="h-screen lg:py-16 flex items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start mb-8 sm:mb-0"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-gradient-secondary bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <span className="text-accent">
              <TypeAnimation
                sequence={[
                  "Akshay",
                  1000,
                  "Web Developer",
                  1000,
                  // "Mobile Developer",
                  // 1000,
                  // "UI/UX Designer",
                  // 1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-gradient text-base sm:text-lg mb-6 lg:text-xl">
            I&apos;m a quick and enthusiastic learner. To secure a challenging
            position where I can effectively contribute my skills as a software
            developer engineer professional for the growth of the organization
            and myself. Always passionate about learning new technologies.
          </p>
          <div className="flex flex-col sm:flex-row justify-center sm:justify-start">
            <Link
              href="#contact"
              className="px-4 py-2 sm:py-3 sm:px-6 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mt-3 sm:mr-4 transition duration-300 ease-in-out hover:bg-primary-700"
            >
              <span>Hire Me</span>
            </Link>
            <Link
              href="/"
              className="px-4 py-2 sm:py-3 sm:px-6 w-full sm:w-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mt-3 transition duration-300 ease-in-out hover:bg-primary-700"
            >
              <span onClick={handleDownload}>Download CV</span>
            </Link>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-12 sm:col-span-4 place-self-center mt-4 sm:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative mx-auto">
            <Image
              src="/images/hero.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
