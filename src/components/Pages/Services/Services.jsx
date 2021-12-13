import React from "react";

//components
import Breadcrumb from "../Breadcrumb/Breadcrump";
import Footer from "../../Home/Footer/Footer";
import ServicesItens from "./ServicesItens";

const About = (props) => {
  return (
    <section>
      <Breadcrumb title="Our Services" bread="Home / Services" />
      <ServicesItens />
      <Footer />
    </section>
  );
};

export default About;
