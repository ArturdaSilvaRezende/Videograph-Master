import React from "react";

//carousel
import Carousel from "react-bootstrap/Carousel";

const HeroCarousel = (props) => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={4000}>
          <div className="carousel__description">
            <h2>For website and video editing</h2>
            <h3>Videographer’s Portfolio</h3>
            <a href=" #">See more about us</a>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="carousel__description">
            <h2>For website and video editing</h2>
            <h3>Videographer’s Portfolio</h3>
            <a href=" #">See more about us</a>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <div className="carousel__description">
            <h2>For website and video editing</h2>
            <h3>Videographer’s Portfolio</h3>
            <a href=" #">See more about us</a>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
export default HeroCarousel;
