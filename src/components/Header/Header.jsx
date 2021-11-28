import React, { useEffect, useRef } from "react";

//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

//custom style
import { ComponentHeader } from "./HeaderStyle";

//images
import Logo from "./img/logo.png";

//components
import HandleControlMenu from "./HandleControlMenu";

const Header = (props) => {
  const headerRef = useRef(null);
  useEffect(() => {
    window.onscroll = () => {
      scrollTopHeader();
    };

    function scrollTopHeader() {
      if (
        document.body.scrollTop > 330 ||
        document.documentElement.scrollTop > 330
      ) {
        headerRef.current.style.position = "fixed";
        headerRef.current.style.backgroundColor = "#141043";
        headerRef.current.classList.add("showHeader");
      } else {
        headerRef.current.style.position = "absolute";
        headerRef.current.style.backgroundColor = "transparent";
        headerRef.current.classList.remove("showHeader");
      }
    }
  }, []);

  return (
    <ComponentHeader className="header" ref={headerRef}>
      <div className="header__container">
        {/* Logo */}
        <a href=" #" className="header__logo">
          <img src={Logo} alt="videograph-master-img-logo" />
        </a>

        {/* navbar */}
        <nav className="header__nav">
          <HandleControlMenu />
        </nav>

        {/* social networks */}
        <ul className="header__networks">
          <li>
            <a href=" #">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </li>
          <li>
            <a href=" #">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
          <li>
            <a href=" #">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a href=" #">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        </ul>
      </div>
    </ComponentHeader>
  );
};

export default Header;
