import * as React from 'react';
import "./Citation.css"

export default function Citation() {
  const itemData = [

    { id:"1.",
      title:"DsbA is a redox-switchable mechanical chaperone",
    authors:" Eckels, E. C., Chaudhuri, D., Chakraborty, S., Echelman, D. J., & Haldar, S (corresponding author)",
    journal:"Chemical science (Impact Factor : 9.825)",
    year:"2021 Jul 19;12(33):11109-11120 "},

        { id:"2.",
      title:"Mechanical Folding by the Trigger Factor Chaperone",
    authors:"Haldar, S.*, Tapia-Rojo, R., Eckels, E.C., Valle-Orero, J., & Fernandez, J.",
    journal:"Nature Communication 8 (1)",
    year:"2017"},

        { id:"3.",
      title:"Protein folding modulates the adhesion strategy of Gram-positive pathogens",
    authors:" Alonso-Caballero, A., Echelman, D., Tapia-Rojo, R., Haldar, S. (2020), Eckels, E. and Fernandez, J",
    journal:"Nature Chemistry (Impact factor 21.70) ",
    year:"2020"},

        { id:"4",
      title:"Cutting-edge single molecule technologies unveil new mechanics in cellular biochemistry",
    authors:"Banerjee, S., Chakraborty, S., Sreepada,A., Banerji, D., Goyal, S., Khurana, Y. and Haldar, S.",
    journal:"Annual Reviews of Biophysics (Impact factor 12.50)",
    year:"2021"},

        { id:"5",
      title:"New Roles of single molecule technologies in biology",
    authors:"Chakroborty, S., Bannerjee, S., & Haldar, S",
    journal:"Trends in Biochemical Sciences (Impact factor 16.89)",
    year:"2020"},

    { id:"6",
    title:"ForceDirected Mechanointeractome of Talin-Integrin",
  authors:"Chakroborty, S., Bannerjee, S., Raina, M.,& Haldar, S.",
  journal:"Biochemistry 58, 47, 4677-4695. ",
  year:"2019"},

  { id:"7",
  title:"Disulfide bonds: the power switches of elastic proteins",
authors:"Eckels, E.#, Haldar, S.#, Rafael Tapia-Rojo, Rivas-Pardo, A., Fernández, J",
journal:"Cell Reports, 6, 1836-1847",
year:"2019"},

{ id:"8",
title:"",
authors:"Haldar, S.*, Tapia-Rojo, R., Eckels, E.C., Valle-Orero, J., & Fernandez, J.*",
journal:"Nature Communication (8 (1): 668.); Highlighted in The Telegraph https://www.telegraphindia.com/science/mother-molecule-187251",
year:"2017"},

{ id:"9",
title:"",
authors:"Haldar, S.*, Eckels, E.C., Echelman, D., & Fernandez, J.,",
journal:"https://www.biorxiv.org/content/early/2018/04/28/310169",
year:"2017"},

{ id:"10",
title:"",
authors:"Valle-Orero, J., Rivas-Pardo, A., Tapia-Rojo, R., Popa, I., Echelman, D., Haldar, S., & Fernandez, J.",
journal:"Angewandte Chemie, 56, 1-7.",
year:"2017"},

{ id:"11",
title:"Paul, S., Sil, P., Chakraborty, R., Haldar, S.*, & Chattopadhyay, K.*",
authors:"",
journal:"Biochemistry, 55, 2332–2343",
year:"2016"},


{ id:"12",
title:"",
authors:"Haldar, S., Gupta, A., Yan. X, Miličić, G., Hartl, U and Hayer-Hartl, M.",
journal:"J. Mol. Biol., 427, 2244–2255.",
year:"2015"},

{ id:"13",
title:"",
authors:"Haldar, S., Sil,P., Thangamuniyandi. M. & Chattopadhyay, K.",
journal:"Langmuir, 31, 4213−23.",
year:"2015"},

{ id:"14",
title:"",
authors:"Paul,S.#, Sil, P.#, Haldar, S #., Mitra, S.,& Chattopadhyay, K.",
journal:"J. Biol. Chem., 290, 14476–14490 ;Highlighted in Nature Chemical Biology, 2015, 11, 380.",
year:"2015"},

{ id:"15",
title:"",
authors:"Gupta, A.#, Haldar, S.#, Miličić, G., Hartl, U and Hayer-Hartl, M. ",
journal:"J. Mol. Biol., 426, 2739-275",
year:"2014"},

{ id:"16",
title:"",
authors:"Haldar, S. & Chattopadhyay, K.",
journal:"J. Biol. Chem., 287, 11546-55.",
year:"2012"},

{ id:"17",
title:"",
authors:"Haldar, S., Paul,S. , Joshi, N., Dasgupta,A. & Chattopadhyay, K.",
journal:"PLoS ONE 7(2): e31797.",
year:"2012"},

{ id:"18",
title:"",
authors:"Haldar, S., & Chattopadhyay, K.",
journal:"Langmuir 27, 5842-5849.",
year:"2011"},

{ id:"19",
title:"",
authors:"Haldar, S., Mitra, S. & Chattopadhyay, K ",
journal:"J. Biol. Chem., 285, 25314-23.",
year:"2010"},

{ id:"20",
title:"",
authors:"Sen,T., Mandal,S., Haldar, S., Chattopadhyay,K. & Patra, A.",
journal:" J. Phys. Chem. C 115, 24037–24044.",
year:"2011"}

]
  return (
    <div className="flex-container">
      { itemData.map((item)=>
      <div className="cite-row">
      {item.id}. <span id="title">   {item.title}, {item.authors}.</span> <span id="journal">{item.journal}</span>, <span id="year">{item.year}</span>  
      </div>
      
      
      )

      }


                    
      
  </div>
  );
}

