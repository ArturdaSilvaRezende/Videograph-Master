import React from "react";

//custom style
import { ComponentHero } from "./HeroStyle";

//images
import HeroImage from "./img/hero-1.jpg";

const Hero = (props) => {
  return (
    <ComponentHero className="hero">
      <div className="hero__bg"></div>
      <img
        className="hero__img"
        src={HeroImage}
        alt="videograph-master-img-hero"
      />
    </ComponentHero>
  );
};

export default Hero;
