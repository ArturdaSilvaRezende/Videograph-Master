import React from "react";

const HeaderMenu = React.forwardRef((props, ref) => {
  return (
    <ul className="header__menu" ref={ref}>
      <li>
        <a className="header__menu--active" href=" #">
          Home
        </a>
      </li>
      <li>
        <a href=" #">About</a>
      </li>
      <li>
        <a href=" #">Portfolio</a>
      </li>
      <li>
        <a href=" #">Services</a>
      </li>
      <li>
        <a href=" #">Contact</a>
      </li>
    </ul>
  );
});

export default HeaderMenu;
