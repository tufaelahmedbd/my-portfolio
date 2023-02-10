import { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEeffect";
import { useProjectLeftRightReveal } from "../hooks/gsap";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675403782/my-portfolio/Screenshot_2_vkhuap.png",
  img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675414975/my-portfolio/24785049_2000117480230956_3844521745025672691_o_m4rbxn.jpg",
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
      <div className="about-wrapper mt-40 grid grid-cols-2  gap-20 overflow-hidden">
        <div className="about-left" ref={aboutLeftRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p>
            I am a final year computer science student with a strong background
            in data structures, algorithms, and object-oriented programming. I
            have a passion for web development and am skilled in a range of
            technologies including React.js, Redux.js, Redux Toolkit,
            JavaScript, TailwindCSS, HTML, CSS, Bootstrap, Git & GitHub, and
            Firebase. My drive for continuous learning has led me to explore
            backend development.
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
