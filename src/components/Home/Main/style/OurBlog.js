import styled from "styled-components";

import BlogBg from "../img/blog/blog-1.jpg";

export const ComponentOurBlog = styled.section`
  background-color: var(--bg-box);
  padding: 80px 0 40px 0;

  .our-blog__carousel {
    margin: 80px 0;

    .react-multiple-carousel__arrow--right {
      display: none;
    }

    .react-multiple-carousel__arrow--left {
      display: none;
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

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    padding: 50px 0 20px 0;

    .our-blog__container {
      padding-left: 70px;

      .our-blog__carousel-item {
        height: 280px;
        h2 {
          font-size: 1rem;
        }
        p {
          font-size: 0.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .our-blog__container {
      padding-left: 50px;

      .our-blog__carousel-item {
        padding: 20px;
        p {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
