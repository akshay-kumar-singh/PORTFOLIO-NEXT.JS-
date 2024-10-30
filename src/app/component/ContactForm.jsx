import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl text-gradient-secondary font-bold text-white my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-gradient mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="mb-4 text-gradient">
          <div>Phone : +91-9123119624</div>
          <div>Email : akshaysing975@gmail.com</div>
        </div>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://github.com/akshay-kumar-singh">
            <Image
              src={GithubIcon}
              alt="Github Icon"
              className="filter hover:brightness-110 transition duration-300"
              style={{
                width: "40px",
                height: "40px",
                filter:
                  "invert(36%) sepia(100%) saturate(3538%) hue-rotate(180deg) brightness(92%) contrast(100%) ",
              }}
            />
          </Link>
          <Link href="https://www.linkedin.com/in/akshay-singh-39531324b/">
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="filter hover:brightness-110 transition duration-300"
              style={{
                width: "40px",
                height: "40px",
                filter:
                  "invert(36%) sepia(100%) saturate(3538%) hue-rotate(180deg) brightness(92%) contrast(100%)",
              }}
            />{" "}
          </Link>
        </div>
      </div>
      <div className="z-10">
        <form
          action="https://formspree.io/f/mqkrqoep"
          method="POST"
          className="flex flex-col"
        >
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-gradient-secondary block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-gradient-secondary block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-gradient-secondary block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
