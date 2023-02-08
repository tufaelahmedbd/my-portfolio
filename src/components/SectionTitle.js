import { useRef } from "react";
import { useSectionReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionTitelRef = useRef(null);
  useSectionReveal(sectionTitelRef);
  return (
    <div className="overflow-hidden">
      <h2 className="section-title" ref={sectionTitelRef}>
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
