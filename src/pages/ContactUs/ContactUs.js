import React, { useRef, useEffect, useState } from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import '../Publications/Publications.css';
import { Link } from 'react-router-dom';
import useScript from '../../components/hooks/useScript';
import SimpleMap from '../../components/Map/Map';
// import MapmyIndia, {MapMarker} from 'react-mapmyindia';

import Mashoka from './../../images/map-ashoka.png';
import CampusPhoto from './../../images/campus photo.jpeg';
import Logo2 from './../../images/Logo2.png';

const ContactUs = () => {
//   useScript('https://cdn.jsdelivr.net/gh/openlayers/openlayers.github.io@master/en/v6.10.0/build/ol.js');
//   var ReactMapboxGl = require('react-mapbox-gl');
  
    return (
        <>
            {/* <div id="publications_header"><h2 style={{fontFamily:"'DM Sans',sans-serif"}}> Contact Us </h2></div> */}
            <div style={{display:"flex"}}>
                <div style={{ fontFamily:"DM Sans",flex:"25%",paddingTop:"1em",paddingLeft:"5%",paddingRight:"5%"}}>
                    <h3 style={{fontFamily:"'DM Sans',sans-serif"}}>Ashoka University</h3>
                    <h4 style={{fontFamily:"'DM Sans',sans-serif"}}>Biological Sciences</h4>
                    <h4 style={{fontFamily:"'DM Sans',sans-serif"}}>Sonipat, Haryana -131029, India</h4>
                    {/* <h5>Ph: 99990000</h5>
                    <h5>Email: insert email here </h5> */}
                </div>
                <div style={{flex:"15%"}}>
                    <img style={{width:"8em"}} src={Logo2}></img>
                </div>

                <div style={{flex:"50%",fontSize:"1em",fontFamily:"'DM Sans',sans-serif",padding:"1em"}} >
                     
                If you are interested in a PhD or Postdoctoral position: <br></br>
                You can have a Biology/Physics/Chemistry/Computation background, but you should be interested to learn. Please check our previous work and the related literature. Write in your own words what you would like to do with us and send it to the following email address.
                 <br>
                 </br>
                <b><a href='mailto:shubhasis.haldar@ashoka.edu.in'>shubhasis.haldar@ashoka.edu.in</a></b>
                </div>
            </div>
            <div style={{width:"10px", height:"10px"}}>
                    <a href="https://www.google.com/maps/place/Ashoka+University/@28.9470259,77.1013325,15z/data=!4m2!3m1!1s0x0:0x78a0bc68e5af467?sa=X&ved=2ahUKEwilzoT7rIz4AhWFRmwGHfw5AC8Q_BJ6BAhIEAU" target={'_blank'}><img style={{width:"100vw", height:"95vh"}} src={CampusPhoto}></img></a>
            </div>
            {/* <SimpleMap/> */}
        </>
    )
}

export default ContactUs;