import React, { useCallback, useRef } from "react";

//custom style
import { BtnStyle } from "./BtnStyle";

//fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const BtnBackToTop = (props) => {
  const buttonRef = useRef(null);

  const HandlebackToTop = useCallback(() => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }, []);

  useEffect(() => {
    function scrollTop() {
      if (
        document.body.scrollTop > 330 ||
        document.documentElement.scrollTop > 330
      ) {
        buttonRef.current.style.display = "block";
      } else {
        buttonRef.current.style.display = "none";
      }
    }

    window.addEventListener("scroll", scrollTop);
    return () => window.removeEventListener("scroll", scrollTop);
  }, [buttonRef]);

  return (
    <BtnStyle
      className="BtnBackToTop"
      ref={buttonRef}
      onClick={HandlebackToTop}
    >
      <FontAwesomeIcon icon={faArrowCircleUp} className="BtnBackToTop__icon" />
    </BtnStyle>
  );
};

export default BtnBackToTop;
