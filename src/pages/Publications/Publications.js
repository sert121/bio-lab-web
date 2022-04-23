import React from 'react';
// import { InfoSection, Pricing } from '../../components';
// import { homeObjOne, homeObjThree } from './Data';
import ImageList from '../../components/imageList';
import Citation from '../../components/Citation';
import "./Publications.css"

function Publications() {
  return (
    <>
    <div id="publications_header" style={{fontFamily:"'DM Sans',sans-serif"}}><h2 style={{fontFamily:"'DM Sans',sans-serif"}} > Publications </h2></div>
    <ImageList/>
    <Citation/>
    </>
  );
}

export default Publications;