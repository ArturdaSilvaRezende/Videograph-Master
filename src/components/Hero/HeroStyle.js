import styled from "styled-components";

//images
import HeroImage from "./img/hero-1.jpg";

export const ComponentHero = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${HeroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 100vh;

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    display: none;
  }

  .hero__description {
    position: absolute;
    left: 0;
    top: 65%;
    transform: translate(0, -65%);
    z-index: 100;
    width: 50%;

    .carousel__description {
      text-align: center;
      height: 230px;

      h2 {
        font-size: 2rem;
      }
      h3 {
        font-size: 3rem;
      }

      h2,
      h3,
      a,
      .carousel__number {
        color: #fff;
        text-shadow: 0 1px 3px #000;
      }

      a {
        border: 2px solid var(--blue);
        margin-top: 20px;
        padding: 7px;
        display: inline-block;
        box-shadow: 0 0px 10px var(--blue);
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
          color: var(--blue);
        }
      }

      .carousel__number {
        position: absolute;
        top: 110px;
        transform: translateX(-50%);
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    background-size: 100% 100%;
    height: 70vh;

    .hero__description {
      width: 100%;
    }
  }

  @media screen and (max-width: 767px) {
    background-size: 100% 100%;
    height: 70vh;

    .hero__description {
      position: absolute;
      left: 50%;
      top: 60%;
      transform: translate(-50%, -60%);
      width: 100%;

      h2,
      h3 {
        font-size: 1rem !important;
      }

      a {
        font-size: 0.8rem;
      }

      .carousel__description {
        text-align: center;
        height: 170px;
        position: relative;
      }
    }
  }
`;
