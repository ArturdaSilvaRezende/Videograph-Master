import React from "react";

//google maps
import GoogleMapReact from "google-map-react";

//location
import LocationPin from "./LocationPin";

const Map = (props) => {
  const { location, zoomLevel } = props;

  return (
    <div className="contact-location__map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: "AIzaSyAtgCIWLSEqC3E_zhp7P2hxMeeqJ8ROhI8",
        }}
        yesIWantToUseGoogleMapApiInternals
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
