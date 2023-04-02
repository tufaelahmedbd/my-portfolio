import { useRef } from "react";
import { useBioReveal } from "../hooks/gsap";
const Bio = () => {
  const bioRef = useRef(null);

  useBioReveal(bioRef);

  return (
    <div className="bio mt-20 container mx-auto overflow-hidden">
      <p ref={bioRef}>
        As an accomplished final year computer science professional, I boast
        extensive proficiency in React, Redux, Redux Toolkit, javascript,
        MongoDB, Express.js, Node.js, Tailwind CSS, and GSAP.I possess a strong
        drive to learn and grow, always seeking new challenges. Through
        technology, I aim to make a significant impact by creating meaningful
        solutions.
      </p>
    </div>
  );
};

export default Bio;
