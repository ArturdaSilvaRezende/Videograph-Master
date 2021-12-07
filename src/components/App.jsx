import React from "react";

//global style
import "./global-style.css";

//components
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </>
  );
};

export default App;
