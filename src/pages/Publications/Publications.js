import React from 'react';
// import { InfoSection, Pricing } from '../../components';
// import { homeObjOne, homeObjThree } from './Data';
import ImageList from '../../components/imageList';
import Citation from '../../components/Citation';
import "./Publications.css"

function Publications() {
  return (
    <>
    <div id="publications_header"><h2 > Publications </h2></div>
    <ImageList/>
    <Citation/>
    </>
  );
}

export default Publications;