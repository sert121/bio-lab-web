import React from 'react';

// import { homeObjOne, homeObjTwo } from './Data';
import "./Scientists.css";
import '../Publications/Publications.css';


import souradeep from './../../images/Souradeep.jpg';
import soham from './../../images/SohamChakr.jpg';
import profSub from './../../images/Shubhashis.png';
import deep from './../../images/DeepChauduri.jpg';


function Scientists() {
  return (
    <>
<div id="publications_header"><h2 style={{fontFamily: "DM Sans"}} > Team </h2></div>    
      <div className="s_row">

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={profSub} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Shubhasis Haldar</div>
                  <div className="scientist_bio_row_details">Assistant Professor of Biology <br></br>Ashoka University</div>
                  <div className="scientist_bio_row_details">Postdoc from Max Planck Institute, Germany and Columbia University, USA</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={souradeep} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Souradeep Banerjee</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_details">Ashoka University</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={soham} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Soham Chakraborty</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_details">Ashoka University</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={deep} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Deep Chauduri</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_details">Ashoka University</div>
                </div>  
          </div>
{/* 
          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110' />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Thorne Kip</div>
                  <div className="scientist_bio_row_details">Physicist</div>
                  <div className="scientist_bio_row_details">PhD,Geometrodynamics</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img src='https://images.unsplash.com/photo-1549388604-817d15aa0110'/>
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row"> Thorne Kip </div>
                  <div className="scientist_bio_row_details"> Physicist </div>
                  <div className="scientist_bio_row_details"> PhD,Geometrodynamics </div>
                </div>  
          </div>
 */}

        
      </div>


    </>
  );
}

export default Scientists;