import * as React from 'react';
import {ImageList} from '@mui/material';
import {ImageListItem} from '@mui/material';
import "./imageList.css";
import ChemScience from  "../images/CoverIssueChemicalScience.jpg" ;
import NatureComm from "../images/Nature_Communications_-_Journal_Cover.jpg"
import NatureChem from "../images/nature_chemistry.jpeg";
import AnnualRevBio from "../images/annual_rev_bio.png";
import TrendsBioChemical from "../images/trends_biochemical_sciences.jpeg"
import BioChem58 from "../images/bichaw.2019.58.issue-52.largecover.jpg";
import CellReports from "../images/cellReports.jpeg";
import Biorrxiv from "../images/biorxiv.png";
import AngewandteChemie from "../images/Angewandte_Chemie.jpeg";
import JmolBio from "../images/J. Mol.Biol.jpeg";
import JBiolChem from "../images/J. Biol. Chem.287.jpeg";
import PlosOne from "../images/PLoS ONE.jpeg";
import Langmuir from "../images/Langmuir 27.jpeg";
import JPhysChem from "../images/J. Phys. Chem. C 115.jpeg"

export default function imageList() {
  return (
    <>
      <div className="row">

          <div className="column">
            <img src={ChemScience}/>
          </div>

          <div className="column">
            <img src={NatureComm}/>
          </div>

          <div className="column">
            <img src={NatureChem}/>
          </div>

          <div className="column">
            <img src={AnnualRevBio}/>
          </div>
          <div className="column">
            <img src={TrendsBioChemical}/>
          </div>
          <div className="column">
            <img src={BioChem58}/>
          </div>
          <div className="column">
            <img src={CellReports} />
          </div>

          <div className="column">
            <img src={Biorrxiv} />
          </div>

          <div className="column">
            <img src={AngewandteChemie} />
          </div>

          <div className="column">
            <img src={JmolBio} />
          </div>

          <div className="column">
            <img src={JBiolChem} />
          </div>



          <div className="column">
            <img src={Langmuir} />
          </div>

          <div className="column">
            <img src={JPhysChem} />
          </div>
          
          <div className="column">
            <img src={PlosOne} />
          </div>


      </div>
  </>
  );
}

