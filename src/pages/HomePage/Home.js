import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import backgroundH from './../../images/tweezerG.gif';
import "./Home.css";


const Home = () => {
    return (
        <>
          <div
      class="bk_Img"
      style={{
        backgroundImage: "url(" + backgroundH + ")",
        backgroundSize: "cover",
        height: "100vh",
        display:"flex",
        justifyContent:"center",
        alignItems: "center"
      }}
    >
                <div className='header_homepage'>
                    <h4 id='homepage_title'>
                        Structural Mechanobiochemistry Lab                    
                    </h4>
                    
                </div>

            </div>
        </>
    )
}

export default Home;