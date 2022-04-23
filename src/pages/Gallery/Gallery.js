import React from 'react'
import "./Gallery.css"


import souradeep from './../../images/Souradeep.jpg';
import soham from './../../images/SohamChakr.jpg';
import profSub from './../../images/Shubhashis.png';
import deep from './../../images/DeepChauduri.jpg';

function Img() {
    return (
<></>
    )
}

function Gallery() {
    return (
<div className="gallery-row"> 
  <div className="gallery-column">
    <img src={deep} />
    <img src="https://images.unsplash.com/photo-1634065665157-0d178764db02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
       {/* <img src="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    <img src="https://images.unsplash.com/photo-1635107679809-2dcdea4b90e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" /> */}

  </div>
  <div class="gallery-column">
    <img src={soham} />
     <img src="https://images.unsplash.com/photo-1635107679809-2dcdea4b90e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
    {/* <img src="https://images.unsplash.com/photo-1635107679809-2dcdea4b90e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
    <img src="https://images.unsplash.com/photo-1634065665157-0d178764db02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />  */}
  </div>  
  <div class="gallery-column">
    <img src={profSub} />
     <img src="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    {/* <img src="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /> */}
    {/* <img src="https://images.unsplash.com/photo-1635107679809-2dcdea4b90e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />  */}
  </div>
  <div class="gallery-column">
    <img src={souradeep} />
    <img src="https://images.unsplash.com/photo-1641080382874-0dfc4c66dbaa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
    {/*<img src="https://images.unsplash.com/photo-1635107679809-2dcdea4b90e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" />
    <img src="https://images.unsplash.com/photo-1634065665157-0d178764db02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" /> */}
    
  </div>
</div>
    )
}

export default Gallery
