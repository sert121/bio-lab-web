import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./SlideShow.css"
const slideImages = [
  "https://i.ibb.co/Qf5PwdN/slide1-labn.png",
  "https://i.ibb.co/hFjpq81/slide2-labn.png",
 "https://i.ibb.co/z4wvc4d/slide3-labn.png",
 "https://i.ibb.co/PDTN2CH/slide4-labn.png"
];

const Slideshow = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[0]})`}}>
              {/* <span>Slide 1</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[1]})`}}>
              {/* <span>Slide 2</span> */}
            </div>
          </div>
          <div className="each-slide">
            <div style={{backgroundImage: `url(${slideImages[2]})`}}>
              {/* <span>Slide 3</span> */}
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;