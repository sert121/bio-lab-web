import React from 'react'
import './LabNews.css';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

function NewsTitle({text}) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#e5f4f7',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: 'black',
        textDecoration:"none"
      }));
  return (
    <Item className="link_pub">
    <Stack direction="row" >  
    <div   style={{padding:"8px",fontSize:"1.4em",fontFamily:"DM Sans"}}>
      {text}
      </div>            
    </Stack> 
    </Item >
  )
}

export default NewsTitle