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

import Image1 from '../images/graph_sub4.png';
import Image2 from '../images/molecule_sub4.jpg';


function ResearchSub4() {
  return (
    <React.Fragment>

    <Container maxWidth="xl">
    <Box sx={{ width: '100%' }}>  
    <Stack spacing={4}>

                    <div>
                    <Typography fontFamily="DM Sans" variant="h4" fontWeight={600} align="center" mt={2} mb={2} pt={2} pb={2} gutterBottom component="div">
                    Role of small molecule drugs and micro-environment in regulating protein mechanical properties. 

                    </Typography>
                    </div>

                    <div>
                        <Typography fontSize="1.15em" fontFamily="DM Sans" variant="body1" gutterBottom>
                            Drug targeting against the mechanosensitive proteins to regulate their mechanosensitivity can be a revolutionary field considering their importance in cancer, autoimmune disorders and other cell adhesion-migration related diseases. Despite the technological advantages, this remains a huge challenge. We employ various techniques to study the effect of already used drugs in mechanical stability of various focal adhesion proteins for the repurposing of these drugs. Furthermore, our cutting edge techniques enable us to study the off-target effects of these drugs on the structural proteins in detail.
                        </Typography>
                    </div>



                    <Grid container spacing={2}>
                    <Grid item xs={6} md={6} xl={6} ><img style={{height:"70%",width:"80%"}} src={Image1}></img></Grid>
                        <Grid item xs={6} md={6}  xl={6} ><img style={{height:"70%",width:"80%"}} src={Image2}></img></Grid>
                    </Grid>

        </Stack>
    </Box>
    </Container>
    </React.Fragment>

    )
}

export default ResearchSub4