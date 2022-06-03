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
import Image1 from '../images/constant_sub1.png';
import Image2 from '../images/mechanical_sub1.png';

function ResearchSubPage1() {
  return (
    <React.Fragment>

    <Container maxWidth="xl">
    <Box sx={{ width: '100%' }}>  
    <Stack spacing={4}>

                    <div>
                    <Typography align="center" fontFamily="DM Sans" variant="h4" fontWeight={600}  mt={2} mb={2} pt={2} pb={2} gutterBottom component="div">
                    Mechanical roles of chaperone-associated protein folding events. 
                    </Typography>
                    </div>

                    <div>
                        <Typography justify="center" fontSize={'1.1.5em'} fontFamily="DM Sans" variant="body1" gutterBottom>
                        Protein folding under force is an integral source of generating mechanical energy in various cellular processes,
                         ranging from protein translation to degradation. Chaperones are specialized proteins known to interact with proteins under mechanical force and regulate their folding. 
                         But, how they respond to force and control cellular energetics remains elusive. To address this question, we introduce microfluidic magnetic-tweezers technology to mimic physiological force environment on substrate proteins, keeping the chaperones out of force-influence. Previously we have reported the redox-switchability of E.coli DsbA in the presence of mechanical force. We found chaperones behave differently, while these client proteins are under force than its previously known functions. We have managed to classify the chaperones as foldase (those who favors the folding) and holdase (those who favors the unfolding) and neutral (favors neither), according to their mechanical behavior under force. Further, we are expanding our study to various eukaryotic chaperones that might work under force as well as the bacterial periplasmic chaperones to decipher their mechanism in force-influenced protein-folding.

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

export default ResearchSubPage1