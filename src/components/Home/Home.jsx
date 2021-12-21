import React, { useEffect } from "react";

//global style
import "../global-style.css";

//components
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const Home = () => {
  useEffect(() => {
    document.title = "Videograph-Master";
  }, []);

  return (
    <>
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
