import React from "react";

//components
import Breadcrumb from "../Breadcrumb/Breadcrump";
import Footer from "../../Home/Footer/Footer";
import PortfolioFilter from "./PortfolioFilter";

const Portfolio = (props) => {
  return (
    <section>
      <Breadcrumb title="Portfolio" bread="Home / Portfolio" />
      <PortfolioFilter />
      <Footer />
    </section>
  );
};

export default Portfolio;
