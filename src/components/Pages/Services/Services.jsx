import React, { useEffect } from "react";

//components
import Breadcrumb from "../Breadcrumb/Breadcrump";
import Footer from "../../Home/Footer/Footer";
import ServicesItens from "./ServicesItens";

const Services = (props) => {
  useEffect(() => {
    document.title = "Videograph / Services";
  }, []);

  return (
    <section>
      <Breadcrumb title="Our Services" bread="Home / Services" />
      <ServicesItens />
      <Footer />
    </section>
  );
};

export default Services;
