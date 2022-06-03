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

import Image1 from '../images/cell_migration_sub2.png';
import Image2 from '../images/cell_migration2_sub2.png';


function ResearchSub2() {
  return (
    <React.Fragment>

    <Container maxWidth="xl">
    <Box sx={{ width: '100%' }}>  
    <Stack spacing={4}>

                    <div>
                    <Typography fontFamily="DM Sans" variant="h4" fontWeight={600} align="center" mt={2} mb={2} pt={2} pb={2} gutterBottom component="div">
                    Role of mechanosensitive proteins in focal adhesion-mediated cellular processes.

                    </Typography>
                    </div>

                    <div>
                        <Typography fontSize="1.2em" fontFamily="DM Sans" variant="body1" gutterBottom>
                        Cell migration is controlled by a force-driven cellular brake system called focal adhesion (FA), a multiprotein assembly of almost 200 proteins.
                         As a well-defined clutch-accelerator system, the proper functioning of FA depends on its constituent mechanical linkages, which both transmit and transduce the mechanical force into the cells. 
                         These FA proteins interact mechanically and control the cell migration through traction force.
                          Furthermore, these mutual interactions modulate the force-sensitivity of these proteins, which becomes dysregulated in different pathological conditions.
                           Therefore, it is of utmost importance that what plausible factor can modulate this force-response of these proteins? 
                           Since each single protein molecule has its own contribution to the overall FA dynamics and thereby the cell migration, the force-response of a single protein is of prime importance to understanding the underlying mechanism. Single molecule techniques are very handy in knowing their mechanical response and that becomes our strength. Therefore, we study these proteins’ mechanical stability, how their post translational modifications affect it and how protein-protein interactome builds a mechano-regulatory network. 

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

export default ResearchSub2