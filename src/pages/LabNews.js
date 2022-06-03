import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { Slide } from 'react-slideshow-image';


import Image1 from '../images/graph_sub4.png';
import Image2 from '../images/molecule_sub4.jpg';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'react-slideshow-image/dist/styles.css'

import "./LabNews.css";
import SimpleImageSlider from "react-simple-image-slider";
import CampusPhoto from './../images/campus photo.jpeg';
import Slideshow  from './Slideshow';
import NewsTitle from './NewsTitle';

function LabNews() {
    const [sliderOptions, setSliderOptions] = React.useState({
        useGPURender: true,
        showNavs: true,
        showBullets: true,
        loop: true,
        autoPlay: true,
        autoPlayDelay: 2,
        startIndex: 3,
        navStyle: 1,
        navSize: 50,
        navMargin: 30,
        duration: 0.5,
        bgColor: '#000'
      });

    const [slideIndexText, setSlideIndexText] = React.useState('');
    const onClick = React.useCallback((idx, event) => {
        console.log(`[App onClick] ${idx} ${event.currentTarget}`);
      }, []);
    
      const onClickNav = React.useCallback((toRight) => {
        console.log(`[App onClickNav] ${toRight}`);
      }, []);
    
      const onClickBullets = React.useCallback((idx) => {
        console.log(`[App onClickBullets] ${idx}`);
      }, []);
    
      const onStartSlide = React.useCallback((idx, length) => {
        console.log(`[App onStartSlide] ${idx}/${length}`);
        setSlideIndexText(`${idx} / ${length}`);
      }, []);
    
      const onCompleteSlide = React.useCallback((idx, length) => {
        console.log(`[App onCompleteSlide] ${idx}/${length}`);
        setSlideIndexText(`${idx} / ${length}`);
      }, []);
    
    //   const updateOptions = React.useCallback(
    //     (key, value) => () => {
    //       console.log(`[App updateOptions] ${key} ${value}`);
    //       switch (key) {
    //         case 'navStyle':
    //           setSliderOptions({ ...sliderOptions, navStyle });
    //           break;
    //         default:
    //           setSliderOptions({ ...sliderOptions, key });
    //           break;
    //       }
    //     },
    //     [sliderOptions]
    //   );

    const images = [
        { url: "https://www.jqueryscript.net/images/Basic-Autoplay-Content-Slider-with-jQuery-CSS3.jpg" , caption:"Slide 1" },
        { url: "/home/yash/bio-lab-web/src/images/Angewandte_Chemie.jpeg", caption:"Slide 2" },
        { url: "/home/yash/bio-lab-web/src/images/Angewandte_Chemie.jpeg", caption:"Slide 3" },
      ];
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e5f4f7',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        textDecoration:"none"
      }));


      

  return (
    <React.Fragment>
                    {/* <div>
                    <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={false}
        showNavs={true}
        loop={sliderOptions.loop}
        autoPlay={sliderOptions.autoPlay}
        autoPlayDelay={sliderOptions.autoPlayDelay}
        startIndex={sliderOptions.startIndex}
        useGPURender={sliderOptions.useGPURender}
        navStyle={sliderOptions.navStyle}
        navSize={sliderOptions.navSize}
        navMargin={sliderOptions.navMargin}
        slideDuration={sliderOptions.duration}
        onClick={onClick}
        onClickNav={onClickNav}
        onClickBullets={onClickBullets}
        onStartSlide={onStartSlide}
        onCompleteSlide={onCompleteSlide}
      />
                    </div> */}

        
    <Container maxWidth="xl">
    
    <Box sx={{ width: '100%' }}>  
    <Stack spacing={4} justifyContent="center">

                    <Typography fontFamily="DM Sans" align="center" variant="h4" fontWeight={600} mt={2} mb={2} pt={2} pb={2}  component="div">
                    Lab News
                        </Typography>
                    <div justifyContent="center" ml ={4} style={{ marginLeft:"25%", width: '50%' , height:"70vh"}}>  
                        <Slideshow />   
                     </div>
    
                    {/* <div>
                        <Typography fontFamily="DM Sans" variant="body1" gutterBottom>
                        Drug targeting against the mechanosensitive proteins to regulate their mechanosensitivity can be a revolutionary field considering their importance in cancer, autoimmune disorders and other cell adhesion-migration related diseases. Despite the technological advantages, this remains a huge challenge. We employ various techniques to study the effect of already used drugs in mechanical stability of various focal adhesion proteins for the repurposing of these drugs. Furthermore, our cutting edge techniques enable us to study the off-target effects of these drugs on the structural proteins in detail.
                        </Typography>
                    </div> */}

                    <Stack spacing={2} pl="20%" pb={2} width="80%">
  
                      <NewsTitle text='Our article is published in Nanoscale, April 2022'></NewsTitle>
                      <NewsTitle text='Our article is accepted in Communications Biology, April 2022'></NewsTitle>
                      <NewsTitle text='Congratulations to Debojyoti for securing 2nd rank in GATE life science 2022. '></NewsTitle>
                      <NewsTitle text='Debojyoti is selected as a DST-Inspire fellow, 2022. Congratulations!'></NewsTitle>
                      <NewsTitle text='Welcome Deep as a newly joined graduate student in the lab, 2021'></NewsTitle>
                      <NewsTitle text='Welcome Debojyoti as a newly joined graduate student in the lab, 2021.'></NewsTitle>
                      <NewsTitle text='Work on the mechanical activity of DsbA is accepted in Chemical Science, August 2021. '></NewsTitle>
                      <NewsTitle text='Madhu joins the lab as project-JRF. Welcome, Madhu!'></NewsTitle>
                      <NewsTitle text='Review article on cutting-edge single-molecule technologies is published in Annual Review of Biophysics, 2021.'></NewsTitle>
                      <NewsTitle text='A review article on single-molecule techniques is published in Trends in Biochemical Science, 2020'></NewsTitle>
                      <NewsTitle text='Deep joins the lab as a project associate. Welcome Deep to the lab!'></NewsTitle>
                      <NewsTitle text='A review on talin-integrin mechanosensitivity is accepted in Biochemistry, 2019.'></NewsTitle>
                   
                    </Stack>


                    {/* <Grid container spacing={2}>
                    <Grid item xs={6} md={6} xl={6} ><img style={{height:"70%",width:"80%"}} src={Image1}></img></Grid>
                        <Grid item xs={6} md={6}  xl={6} ><img style={{height:"70%",width:"80%"}} src={Image2}></img></Grid>
                    </Grid> */}

        </Stack>
    </Box>
    </Container>
    </React.Fragment>

    )
}

export default LabNews