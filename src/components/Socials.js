import { useRef } from "react";
import { useSocialReveal } from "../hooks/gsap";

const data = [
  {
    id: 1,
    title: "Facebook",
    url: "https://www.facebook.com/tufaelahmedbd/",
  },
  {
    id: 2,
    title: "Github",
    url: "https://github.com/tufaelahmedbd",
  },
  {
    id: 3,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/tufaelahmedbd/",
  },
  {
    id: 4,
    title: "Leetcode",
    url: "https://leetcode.com/tufaelahmedbd/",
  },
  {
    id: 2,
    title: "Twitter",
    url: "https://twitter.com/tufaelahmedbd",
  },
];
const Socials = () => {
  const socialRef = useRef(null);
  useSocialReveal(socialRef);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 p-5 backdrop-blur-xl z-50"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          key={social.id}
          rel="noreferrer"
          className=" hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
