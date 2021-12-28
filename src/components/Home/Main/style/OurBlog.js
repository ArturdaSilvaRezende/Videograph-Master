import styled from "styled-components";

import BlogBg from "../img/blog/blog-1.jpg";

export const ComponentOurBlog = styled.section`
  background-color: var(--bg-box);
  padding: 80px 0 0 0;

  .our-blog__container {
    .our-blog__carousel {
      margin: 80px 0 0 0;
      padding-left: 20px;

      .react-multiple-carousel__arrow--left {
        top: 150px;
        left: 0;
      }

      .react-multiple-carousel__arrow--right {
        top: 150px;
        right: 0;
      }

      .our-blog__carousel-item {
        width: 90%;
        color: #fff;
        text-shadow: 0 1px 3px #000;
        border: 1px solid #222222;
        padding: 30px;
        height: 320px;
        margin-bottom: 80px;

        &:hover {
          background: url(${BlogBg});
        }

        h2 {
          font-size: 1.1rem;
          font-family: "Play", sans-serif;
        }
        p,
        a {
          color: #fff;
          font-family: "Josefin Sans", sans-serif;
        }
        .our-blog__carousel-item--text {
          margin: 30px 0;
        }
      }
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    padding: 50px 0 110px 0;

    .our-blog__container {
      margin-bottom: -100px;
      margin-left: 50px;

      .our-blog__carousel {
        padding: 0 15px 0 25px;
        left: -30px;

        .react-multiple-carousel__arrow--left {
          top: 130px;
          left: 10px;
        }

        .react-multiple-carousel__arrow--right {
          top: 130px;
          right: 0;
        }

        .our-blog__carousel-item {
          height: 280px;
          width: 85%;

          h2 {
            font-size: 1rem;
          }
          p {
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 50px 0 90px 0;

    .our-blog__container {
      margin-bottom: -100px;

      .react-multiple-carousel__arrow--left {
        top: 135px !important;
        left: 5px;
      }

      .react-multiple-carousel__arrow--right {
        top: 135px !important;
        right: 35px;
      }

      .our-blog__carousel-item {
        padding: 20px;
        width: 100%;
        height: 270px !important;

        h2 {
          font-size: 0.9rem !important;
        }

        p {
          font-size: 0.8rem;
          width: 230px;
        }
      }
    }
  }
`;
