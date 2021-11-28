import styled from "styled-components";

export const ComponentHeader = styled.header`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 5px;
  z-index: 999;

  .header__container {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 0 auto;

    .header__logo {
      img {
        width: 100%;
        display: block;
      }
    }

    .header__nav {
      .header__btn-menu {
        background-color: var(--blue);
        width: 85px;
        border: none;
        border-radius: 5px;
        padding: 7px;
        display: none;

        span {
          font-size: 1rem;
          text-transform: uppercase;
          float: left;
          color: #fff;
          font-weight: 700;
          text-shadow: 0 1px 3px #000;
          margin-right: 5px;
        }

        .header__menu-icon {
          color: #fff;
          font-size: 1rem;
        }
      }

      .header__menu {
        display: flex;
        align-items: center;

        li + li {
          margin-left: 35px;
        }

        li {
          display: block;

          a {
            color: #fff;
            text-transform: uppercase;
            font-weight: 500;
            font-family: "Play", sans-serif;
            font-size: 1rem;
            position: relative;

            &:before {
              content: "";
              position: absolute;
              width: 100%;
              height: 2px;
              bottom: 0;
              left: 0;
              top: 25.2px;
              background-color: var(--blue);
              visibility: hidden;
              transform: scaleX(0);
              transition: all 0.3s ease-in-out 0s;
            }

            &:hover:before {
              visibility: visible;
              transform: scaleX(1);
            }
          }
        }

        .header__menu--active {
          border-bottom: 2px solid var(--blue);
          padding-bottom: 6px;
        }
      }
    }

    .header__networks {
      display: flex;
      border-left: 1px solid rgba(255, 255, 255, 0.1);

      li + li {
        margin-left: 35px;
      }

      li {
        a {
          color: #fff;

          &:hover {
            color: var(--blue);
          }
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    .header__container {
      .header__networks {
        display: none;
      }
    }
  }

  @media screen and (max-width: 767px) {
    background-color: #141043 !important;
    padding: 15px;

    .header__container {
      justify-content: space-between;
      .header__nav {
        .header__btn-menu {
          display: block;
        }

        .header__menu {
          background-color: #141043;
          display: block;
          position: absolute;
          left: 25px;
          right: 25px;
          border-radius: 5px;
          overflow: hidden;
          max-height: 0;
          z-index: 999;

          li + li {
            margin-left: 0;
          }

          li {
            margin: 14px 0 14px -14px;

            &:first-child {
              margin-left: 0;
            }
          }
        }
      }
    }
  }
`;
