import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from "mapmyindia-react";
import useScript from "../hooks/useScript";
import MapmyIndia, {MapMarker} from 'react-mapmyindia';

export default function SimpleMap() {

    return (
      // Important! Always set the container height explicitly
      <div style={{ margin:"30px",width:"80px",height:"80px"}}>
		 	  <MapmyIndia center={[12.33434,55.45454]} zoomControl={true} >
			  	<MapMarker position = {[12.34343,90.5655222]} popupContent = {"My-place"} />
			  </MapmyIndia>
      </div>
    );
  
}