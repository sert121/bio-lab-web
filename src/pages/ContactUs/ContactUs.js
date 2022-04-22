import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import '../Publications/Publications.css';
import { Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import useScript from '../../components/hooks/useScript';
import SimpleMap from '../../components/Map/Map';
import MapmyIndia, {MapMarker} from 'react-mapmyindia';

const ContactUs = () => {
  useScript('https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.10.0/build/ol.js');
    

    return (
        <>
            <div id="publications_header"><h2 > Contact Us </h2></div>
            <div style={{display:"flex"}}>
                <div style={{flex:"50%",padding:"10%"}}>
                    <h3>Ashoka University</h3>
                    <h4>Biological Sciences</h4>
                    <h4>Sonipat, Haryana -13104, India</h4>
                    <h5>Ph: 99990000</h5>
                    <h5>Email: insert email here </h5>
                </div>
                <div style={{flex:"50%"}}>
                </div>
            </div>
            {/* <SimpleMap/> */}


        </>
    )
}

export default ContactUs;