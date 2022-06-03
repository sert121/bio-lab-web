import React from 'react';

// import { homeObjOne, homeObjTwo } from './Data';
import "./Scientists.css";
import '../Publications/Publications.css';


import souradeep from './../../images/Souradeep.jpg';
import soham from './../../images/SohamChakr.jpg';
import profSub from './../../images/Shubhashis.png';
import deep from './../../images/DeepChauduri.jpg';
import debojyoti from './../../images/Debojyoti.jpg';
import madhu from './../../images/madhu1.jpg';

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
                  <div className="scientist_bio_row_details ">Principal Investigator </div>
                    <div className="scientist_bio_row_details ">Postdoc Max Planck Institute & Columbia University 
                    </div>
                    <div className="scientist_bio_row_unc">I am interested in developing single molecule technologies to understand complex biological phenomenon 
                    </div>

                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={soham} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Soham Chakraborty</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_unc "> Soham is interested in understanding the talin mechanosensitivity and its regulation under different cellular processes</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={souradeep} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Souradeep Banerjee</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_unc scientist_bio_row_details">Souradeep tries to understand the maintenance of structural integrity in mechanosensitive proteins</div>
                </div>  
          </div>


          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={madhu} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Madhu Bhatt</div>
                  <div className="scientist_bio_row_details">Junior Research Fellow</div>
                  <div className="scientist_bio_row_unc ">Madhu aims to understand the chain dynamics of proteins and its modulation via chaperone interactions</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={deep} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Deep Chauduri</div>
                  <div className="scientist_bio_row_details">PhD, Chemistry</div>
                  <div className="scientist_bio_row_details">Junior Research Fellow</div>
                  <div className="scientist_bio_row_unc ">Deep aims to decipher the mechanical activity of chaperones under single-molecule resolution</div>
                </div>  
          </div>

          <div className="s_column">
              <div className="scientist_img">
                <img style={{height:"290px",width:'290px'}} src={debojyoti} />
              </div>
                <div className="scientist_bio">
                  <div className="scientist_bio_row">Debojyoti</div>
                  <div className="scientist_bio_row_details">PhD, Biology</div>
                  <div className="scientist_bio_row_details">Junior Research Fellow</div>
                  <div className="scientist_bio_row_unc ">Debojyoti is interested in understanding the role of mechanochemical signaling in neurodegeneration </div>

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