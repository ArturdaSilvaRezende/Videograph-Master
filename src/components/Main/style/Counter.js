import styled from "styled-components";

export const ComponentCounter = styled.section`
  background-color: #100028;
  padding: 100px 0;
  margin-top: -2px;

  .counter__container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;

    .counter__box {
      background-color: #1a083d;
      padding: 15px;
      text-align: center;
      height: 215px;
      width: 205px;
      border: 1px solid var(--blue);
      box-shadow: 0 0 10px var(--blue);
      margin-left: 30px;

      figcaption {
        h2,
        p {
          color: #fff;
        }

        h2 {
          margin: 20px 0;
          font-size: 3rem;
        }

        p {
          font-family: "Josefin Sans", sans-serif;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    .counter__container {
      flex-wrap: wrap;
      justify-content: center;

      .counter__box {
        height: auto;
        width: 20%;
        margin: 0 auto;

        figcaption {
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .counter__container {
      .counter__box {
        margin: 0 0 20px 0;
        width: 90%;
      }
    }
  }
`;
