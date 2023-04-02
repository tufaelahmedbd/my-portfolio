import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEeffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680382866/my-portfolio/File0380_s0n1eg.jpg",
  img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1680379414/my-portfolio/Cox-46_3_ooofjk.jpg",
};

const About = () => {
  const aboutLeftRef = useRef(null);
  const aboutRightRef = useRef(null);
  const abouts = [aboutLeftRef, aboutRightRef];
  useHoverEffect(aboutLeftRef, data.img1, data.img2);
  useProjectLeftRightReveal(abouts);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title="About" />
      <div className="about-wrapper mt-40 grid grid-cols-1 lg:grid-cols-2  gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            As a CSE final year student and frontend developer, I excel in HTML,
            CSS, Bootstrap, TailwindCSS, React.js, React Router, JavaScript, and
            GSAP. My proficiency in Nodejs, Express.js, and MongoDB enables me
            to build scalable web applications, and my problem-solving skills
            and knowledge of data structures and algorithms allow me to deliver
            optimal solutions. I am passionate, dedicated, and a hardworking
            individual seeking an exciting frontend position to utilize my
            skills in a challenging and dynamic environment.
          </p>
          <p className="mt-10">
            I am taking advantage of my current student status by immersing
            myself in web development and expanding my knowledge. My experience
            with a range of technologies, combined with my strong understanding
            of computer science fundamentals, gives me a solid foundation for a
            successful career. My dedication to continuously learning and my
            passion for web development.
          </p>
          <a
            href="https://docs.google.com/document/d/1CINrWfKV2G8tKtVcr7RKgmamKaJGj66FDiJlBAtvfJA/edit"
            target="_blank"
            rel="noreferrer"
            className=" inline-block mt-10 uppercase py-8 px-14 border border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
