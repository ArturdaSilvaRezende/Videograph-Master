import styled from "styled-components";

export const ComponentHero = styled.section`
  position: relative;

  .hero__bg {
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 7px;
    left: 0;

    z-index: 99;
  }

  .hero__img {
    max-width: 100%;
    display: inline-block;
  }

  @media screen and (max-width: 767px) {
    margin-top: 63px;
    .hero__img {
      height: 40vh;
    }
  }
`;
