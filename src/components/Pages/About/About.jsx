import React from "react";

//breadcrumb
import Breadcrumb from "../Breadcrumb/Breadcrump";

//components - home
import Counter from "../../Home/Main/Main-Counter";
import TeamWork from "../../Home/Main/Main-TeamWork";
import Footer from "../../Home/Footer/Footer";
import AboutDescription from "./AboutDescription";
import AboutTestimonial from "./AboutTestimonial";

const About = (props) => {
  return (
    <section>
      <Breadcrumb title="About" bread="Home / About" />
      <AboutDescription />
      <AboutTestimonial />
      <Counter />
      <TeamWork />
      <Footer />
    </section>
  );
};

export default About;
