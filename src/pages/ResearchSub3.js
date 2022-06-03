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
import Image1 from '../images/mech_perspective_sub3.png';
// import Image2 from '../images/mechanical_sub1.png';

function ResearchSub3() {
  return (
    <React.Fragment>

    <Container maxWidth="xl">
    <Box sx={{ width: '100%' }}>  
    <Stack spacing={4}>

                    <div>
                    <Typography fontFamily="DM Sans" variant="h4" fontWeight={600} align="center" mt={2} mb={2} pt={2} pb={2} gutterBottom component="div">
                    Mechanochemical signalings in neurodegenerative diseases.

                    </Typography>
                    </div>

                    <div>
                        <Typography fontSize="1.15em" fontFamily="DM Sans" variant="body1" gutterBottom>
                        The role of mechanotransduction is well known in proper brain functioning;
                         disruption of which causes nerve damage as well as neurodegeneration. 
                         But how the mechanical cues are transmitted inside the cell and influence the cellular phenomenons is still elusive.
                          To translate these mechanical cues into chemical signals within the cell, different molecular machines are required. Although a significant amount of research is done on the transport proteins and ion channels, less is known about the role of intracellular mechanosensitive adapter proteins. Kindlin 2 is such an important protein related to focal adhesion in the context of brain development as it plays an important role in axonal growth. This protein is expressed in many different types of neurons as well as other brain cells. It is also considered to be one of the main genetic risk factors for the progression of Alzheimer's disease. This protein is an important regulator of many cell signaling modules in various cells and tissues. However, how this protein helps in mechanotransduction through the neurons and other brain cells to maintain overall tissue architecture, is not yet clear at molecular levels. Furthermore, the mechanism of pathogenicity related to this protein and how it affects normal brain activity to trigger neurodegenerative diseases, is also unknown. We employ cutting edge single molecule techniques, computational techniques and other biochemical, molecular techniques to look into these mechanochemical signalings and their role in neurodegeneration.
                        </Typography>
                    </div>



                    <Grid container spacing={2}>
                        {/* <Grid item xs={12} md={12} xl={12} ><img style={{height:"100px",width:"200px"}} src={Image1}></img></Grid> */}
                        <Grid item m={2} xs={12} md={12} xl={12} ><img style={{height:"70%",width:"80%"}}  src={Image1}></img></Grid>
                        {/* <Grid item xs={6} md={6}  xl={6} ><img style={{height:"70%",width:"80%"}} src={Image2}></img></Grid> */}
                        {/* <Grid item xs={6} md={6}  xl={6} ><img style={{height:"100px",width:"100px"}} src={Image2}></img></Grid> */}
                    </Grid>

        </Stack>
    </Box>
    </Container>
    </React.Fragment>

    )
}

export default ResearchSub3