import React from "react";

//icon
import { Icon } from "@iconify/react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon="topcoat:location" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
