import React, { useRef, useEffect, useState } from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import '../Publications/Publications.css';
import { Link } from 'react-router-dom';
import useScript from '../../components/hooks/useScript';
import SimpleMap from '../../components/Map/Map';
// import MapmyIndia, {MapMarker} from 'react-mapmyindia';

import ReactMapboxGl from 'react-mapbox-gl';
import Mashoka from './../../images/map-ashoka.png';
import mapboxgl from 'mapbox-gl';
import Mapper from './Mapper';

const ContactUs = () => {
//   useScript('https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.10.0/build/ol.js');
//   var ReactMapboxGl = require('react-mapbox-gl');
  
    return (
        <>
            <div id="publications_header"><h2 style={{fontFamily:"'DM Sans',sans-serif"}}> Contact Us </h2></div>
            <div style={{display:"flex"}}>
                <div style={{ fontFamily:"DM Sans",flex:"50%",paddingLeft:"10%",paddingRight:"10%"}}>
                    <h3 style={{fontFamily:"'DM Sans',sans-serif"}}>Ashoka University</h3>
                    <h4 style={{fontFamily:"'DM Sans',sans-serif"}}>Biological Sciences</h4>
                    <h4 style={{fontFamily:"'DM Sans',sans-serif"}}>Sonipat, Haryana -13104, India</h4>
                    {/* <h5>Ph: 99990000</h5>
                    <h5>Email: insert email here </h5> */}
                </div>
                <div style={{flex:"50%"}}>
                    <a href="https://ashoka.edu.in" target={'_blank'}><img src={Mashoka}></img></a>
                </div>

            </div>
            {/* <SimpleMap/> */}
    

        </>
    )
}

export default ContactUs;