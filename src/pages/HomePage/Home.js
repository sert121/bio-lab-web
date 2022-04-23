import React from 'react';
import { InfoSection, Pricing } from '../../components';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour} from './Data';
import backgroundH from './../../images/tweezerG.gif';

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
                    <h4 style={{color:"white",fontSize:"4.5em",fontFamily:"'DM Sans',sans-serif"}}>
                        Mechano Biochemistry Lab                    
                    </h4>
                    
                </div>

            </div>
        </>
    )
}

export default Home;