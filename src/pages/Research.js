// import React from 'react'
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
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// import Footer from '../components/Footer';

import "./Research.css";
import RowImg1 from '../images/options_row1.png';
import RowImg2 from '../images/options_row2.png';
import RowImg3 from '../images/options_row3.png';
import RowImg4 from '../images/options_row4.png';

import biotech from '../images/biotech.png';
import ashokalogo from '../images/ashoka_logo.png';
import govt_science from '../images/department_govt_science.png';
import nserb_india from '../images/nserb_india.png';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';


function ActionAreaCard({url,title, caption}) {
    return (
      <Card sx={{ maxWidth: 500 }}>
        <CardActionArea>
          <CardMedia
            component="iframe"
            height="300"
            // image="/static/images/cards/contemplative-reptile.jpg"
            bgColor="#e4fff6"
            alt="green iguana"
            src={url}
          />
          <CardContent>
            <Typography gutterBottom fontFamily="DM Sans" fontWeight="600" fontSize={"1.2em"} component="div">
              {title}
            </Typography>
            {/* <Typography variant="body2" color="text.secondary">
              {caption}
            </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>)
      }
    



function Research() {

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#115566',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'white',
      }));

  return (
            <>
            <React.Fragment>

                <Container maxWidth="xl">
                <Box sx={{ width: '100%' }} justify="center">

                <Stack spacing={4} justify="center">
                    
                    <Typography id="research_home" variant="h3" align="center" mt={3} pl={1} pr={1} gutterBottom component="div">
                        Research
                    </Typography>
                    

                    {/* <div style={{width:"70%", marginLeft:"10%", alignContent:"center"}}> */}
                    <Typography m={0} pl={4} pr={4} align="center" fontSize="1.14em" fontFamily="DM Sans"  variant="body1" gutterBottom>
                      We are currently using cutting edge single-molecule techniques like magnetic tweezers,
                      fluorescence cross-correlation spectroscopy along with advanced computational simulation.
                      We established the first covalent magnetic tweezers of India in our lab.
                      We are also dedicated to the continuous advancement of these techniques using machine learning,
                      artificial intelligence and other physical tools.
                    </Typography>
                    {/* </div> */}
                    <div>
                      <Box sx={{ width: '100%' }} md={{ width: '100%' }} xl={{ width: '100%' }} p="1%" >
                        <Grid container spacing={2} justify="center">
                        <Grid item xs={4} md={4} xl={4}>
                        <ActionAreaCard url={"https://www.youtube.com/embed/Z2QG8BqV4Uk?&showinfo=0&modestbranding=1&disablekb=1"} title="Covalent Magnetic Tweezers"></ActionAreaCard>
                        </Grid>
                        <Grid item xs={4} md={4} xl={4}>
                        <ActionAreaCard url="https://www.youtube.com/embed/wH_bkoguTbo?&showinfo=0&modestbranding=1&disablekb=1" title="Fluorescence Cross-correlation Spectroscopy"></ActionAreaCard>

                        </Grid>
                        <Grid item xs={4} md={4} xl={4}>
                        <ActionAreaCard url="https://www.youtube.com/embed/vpUJIloon5k?&showinfo=0&modestbranding=1&disablekb=1" title="Computational Simulation"></ActionAreaCard>
                        </Grid>
                        </Grid>
                    </Box>
                    {/* <Stack spacing={{ xs: 1, sm: 2, md: 4 }} direction="row"  m={{ xs:1,sm:2,md:4,xl:6}}>
                        <ActionAreaCard>Item 1</ActionAreaCard>
                        <ActionAreaCard>Item 2</ActionAreaCard>
                        <ActionAreaCard>Item 3</ActionAreaCard>
                    </Stack> */}
                    </div>
                {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}> */}

                    <Typography fontSize="1.14em" fontFamily="DM Sans" pl={2} pr={2} align='center' variant="body1"  gutterBottom>
                    Our activities mainly focus on interdisciplinary approaches to solve various problems of health and diseases
                    that comes under mechanobiology.<br></br>
                    To solve these problems, we are currently committed to but not limited to the following:
                    </Typography>
                
                    <Stack spacing={2} direction="row" justify='center' justifyContent={'center'} alignItems="center">
                    <Link style={{textDecoration:"none"}}  to="/sub1" target={"_blank"}>
                      <Item>
                         <Stack direction="row" >  
                         <HtmlTooltip  title={ <React.Fragment>
                                                <Typography variant='caption' color="inherit">Mechanical roles of chaperone-associated protein folding events</Typography>
                                                {' '}
                                                {/* {"Click to view more"} */}
                                              </React.Fragment>
                                            }>
                            {/* <div  style={{fontSize:"1.1em",textDecoration:"none",padding:"8px",fontFamily:"DM Sans"}}>
                              Mechanical roles of chaperone-associated protein folding events.
                            </div>  */}                              
                             <img className="row_img" src={RowImg1}></img> 
                          </HtmlTooltip>
                        </Stack>
                      </Item>
                    </Link>
                        <Link style={{textDecoration:"none"}}  to="/sub2" target={"_blank"}><Item>
                          <Stack  direction="row" > 
                          {/* <div style={{padding:"8px",textDecoration:"none",fontSize:"1.1em",fontFamily:"DM Sans"}}>  Role of mechanosensitive proteins in focal adhesion-mediated cellular processes .</div> */}
                          <HtmlTooltip  title={ <React.Fragment>
                                                <Typography variant='caption' color="inherit">{'Role of mechanosensitive proteins in focal adhesion-mediated cellular processes'} </Typography>
                                                {' '}
                                                {""}
                                              </React.Fragment>
                                            }>
                           <img  className="row_img" src={RowImg2}></img> 
                           </HtmlTooltip>

                           </Stack>  </Item>
                        </Link>
                        <Link style={{textDecoration:"none"}}  to="/sub3" target={"_blank"}>
                        <Item>
                          <Stack direction="row" >  
                          {/* <div   style={{padding:"8px",textDecoration:"none",fontSize:"1.1em",fontFamily:"DM Sans"}}> Mechanochemical signaling pathways in neurodegenerative diseases. 
                          </div> */}
                                                      <HtmlTooltip  title={ <React.Fragment>
                                                <Typography variant='caption' color="inherit"> Mechanochemical signaling pathways in neurodegenerative diseases</Typography>
                                                {' '}
                                              </React.Fragment>
                                            }>
                                              <img className="row_img" src={RowImg3}></img>
                                              </HtmlTooltip>
                                              
                                              
                                               </Stack> </Item>
                        </Link>
                        <Link style={{textDecoration:"none"}}  to="/sub4" target={"_blank"}>
                        <Item>
                          <Stack direction="row" >  
                          {/* <div style={{padding:"8px",textDecoration:"none",fontSize:"1.1em",fontFamily:"DM Sans"}}> 
                          Role of small molecule drugs and micro-environment in regulating protein mechanical properties.
                          </div> */}
                           <HtmlTooltip  title={ <React.Fragment>
                                                <Typography variant='caption' color="inherit">Role of small molecule drugs and micro-environment in regulating protein mechanical properties</Typography>
                                                {' '}
                                              </React.Fragment>
                                            }>
                             <img className="row_img" src={RowImg4}></img>
                           </HtmlTooltip> </Stack> </Item>
                        </Link>
                    </Stack>   

                </Stack>
     
                </Box>
                  <Box >
                  <Stack spacing={3} direction="row" alignItems="center" justifyContent={"center"} justify="center" m={3} mt={8} p={2}>
                  <div><img style={{width:"80%", height:"80%"}} src={ashokalogo}></img> </div>
                  <div><img style={{width:"80%", height:"80%"}} src={nserb_india}></img> </div>
                  <div><img style={{width:"80%", height:"80%"}} src={biotech}></img> </div>
                  <div><img style={{width:"80%", height:"80%"}} src={govt_science}></img> </div>
                </Stack>
                  </Box>
            </Container>
            </React.Fragment>

        </>);
}

export default Research