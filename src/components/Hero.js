import React, { useRef } from "react";
import { useHoverEffect } from "../hooks/useHoverEeffect";
const data = {
  img1: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675403782/my-portfolio/Screenshot_2_vkhuap.png",
  img2: "https://res.cloudinary.com/duunz0l4s/image/upload/v1675414975/my-portfolio/24785049_2000117480230956_3844521745025672691_o_m4rbxn.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);
  return (
    <div className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden">
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1>Front-end</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1>Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
