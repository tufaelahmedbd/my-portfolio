import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";
const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        I am a computer science professional with expertise in React,
        Redux,Redux Toolkit,javaScript, Tailwind CSS, and GSAP. I am motivated,
        passionate, and a quick learner, always seeking new challenges and
        opportunities to expand my skills.I am dedicated to using technology to
        create meaningful solutions and improve people's lives.
      </p>
    </div>
  );
};

export default Bio;
