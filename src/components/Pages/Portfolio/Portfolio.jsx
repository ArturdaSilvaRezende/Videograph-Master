import React, { useEffect } from "react";

//components
import Breadcrumb from "../Breadcrumb/Breadcrump";
import Footer from "../../Home/Footer/Footer";
import PortfolioFilter from "./PortfolioFilter";

const Portfolio = (props) => {
  useEffect(() => {
    document.title = "Videograph / Portfolio";
  }, []);

  return (
    <section>
      <Breadcrumb title="Portfolio" bread="Home / Portfolio" />
      <PortfolioFilter />
      <Footer />
    </section>
  );
};

export default Portfolio;
