import styled from "styled-components";

export const ComponentOurServices = styled.section`
  background-color: #100028;
  padding: 70px 10px 10px 10px;
  margin-top: -2px;

  .our-services__container {
    display: flex;
    justify-content: space-between;

    //global
    .our-services__description {
      font-family: "Josefin Sans", sans-serif;
      font-weight: 700;
      color: var(--muted-gray);
      line-height: 1.8;
    }

    .our-services__title {
      width: 50%;

      .our-services__description {
        margin: 40px 0;
      }
    }

    .our-services__contents {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin-left: 50px;

      figure {
        width: 45%;
        margin: 0 30px 30px 0;

        &:hover {
          img {
            transform: rotate3d(0, 0, 1, 45deg);
          }
        }
        img {
          display: block;
          border: 3px solid var(--blue);
          padding: 10px;
          transition: all ease-in 0.5s;
        }
      }

      figcaption {
        h3 {
          color: #fff;
          margin: 15px 0;
          font-size: 1.3rem;
        }

        p {
          font-size: 0.9rem;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .our-services__container {
      flex-direction: column;
      justify-content: center;

      .our-services__title {
        width: 100%;
        margin-bottom: 70px;

        .our-services__description {
          width: 60%;
        }
      }
      .our-services__contents {
        width: 100%;
        margin-left: 0;

        figure {
          width: 45%;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding-top: 180px;
    .our-services__container {
      flex-direction: column;

      //global
      .our-services__description {
        font-size: 0.86rem;
      }

      .our-services__title {
        width: 100%;
      }

      .our-services__contents {
        margin: 50px 0 0 0;
        width: 100%;

        figure {
          margin-bottom: 40px;
          width: 100%;
        }

        figcaption {
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
`;
