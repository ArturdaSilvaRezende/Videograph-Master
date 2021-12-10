import styled from "styled-components";

export const ComponentPortfolio = styled.section`
  background-color: var(--bg-box);
  padding-top: 40px;
  margin-top: -2px;
  position: relative;

  img {
    width: 100%;
    height: 300px;
    display: block;
  }

  .portfolio__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;

    .portfolio__card {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;

      .portfolio__hero {
        position: relative;
        grid-column: 1/3;

        .portfolio__play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 15px;
          border-radius: 50%;
          border: 2px solid #fff;
          background-color: transparent;
          color: #fff;
          transition: all 0.3s ease-in;

          &:hover {
            color: var(--blue);
            border: 2px solid var(--blue);
          }
        }

        &:hover {
          figcaption {
            transform: scale(1);
          }
        }

        figcaption {
          position: absolute;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.7);
          width: 100%;
          text-align: center;
          padding: 12px 0 10px 0;
          height: 80px;
          transform: scale(0);
          transition: all 0.3s ease-in;

          h1 {
            color: #fff;
            font-size: 1.4rem;
            font-family: "Play", sans-serif;
          }

          p {
            font-family: "Josefin Sans", sans-serif;
            font-weight: 700;
            color: var(--muted-gray);
          }
        }
      }

      .portfolio__hero--three {
        img {
          height: 100%;
        }
      }
    }
  }

  .portfolio__modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 97;
    width: 100%;
    display: none;

    .portfolio__close {
      position: absolute;
      top: 17%;
      right: 23%;
      background-color: transparent;
      border: none;
      color: #fff;
      font-size: 1.5rem;

      &:hover {
        color: var(--blue);
      }
    }

    iframe {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 50%;
      height: 50%;
    }
  }

  @media screen and (min-width: 767px) and (max-width: 1024px) {
    img {
      height: 250px;
    }

    .portfolio__container {
      .portfolio__card {
        .portfolio__hero {
          figcaption {
            h1 {
              font-size: 1.1rem;
            }
          }
        }
      }
    }

    .portfolio__modal {
      .portfolio__close {
        right: 200px;
      }
      iframe {
        width: 40%;
        height: 50%;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 20% 0;

    .portfolio__container {
      grid-template-columns: 100%;
      gap: 30px;

      .portfolio__card {
        grid-template-columns: 100%;
        gap: 30px;

        &:nth-child(n) {
          margin-bottom: 0;
        }

        .portfolio__hero {
          grid-column: 1;

          figcaption {
            h1 {
              font-size: 1.1rem;
            }
          }
        }
      }
    }

    .portfolio__modal {
      position: fixed;
      top: 50%;
      left: 50%;
      bottom: 0;
      right: 0;
      width: 100%;
      transform: translate(-50%, -50%);
      height: 100%;

      .portfolio__close {
        position: fixed;
        right: 30px;
        top: 55%;
      }

      iframe {
        position: relative;
        top: 70%;
        width: 80%;
        height: 20%;
      }
    }
  }
`;
