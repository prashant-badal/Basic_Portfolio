import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

const Footer =()=> {
  return (
  
    <>
    
    <Box sx={{bgcolor:'grey',textAlign:'center',p:3}}  >


    <Box sx={{my:1,
      "& svg ":{
        fontSize:"50px",
        color:"#faf2f2",
        
      },
      "& svg :hover":{
        color:"goldenrod",
        transform:'translateX(1px)',
        transition:'all 400ms'
      }
  

    }}>
    <a href="https://www.facebook.com" target="_blank">   <IconButton  aria-label="socialHandle"  >
    <InstagramIcon />
    </IconButton></a>
      
      <IconButton aria-label="socialHandle" >
    <YouTubeIcon/>
    </IconButton>
      <IconButton aria-label="socialHandle" >

      <a href="https://www.facebook.com" target="_blank">  <FacebookIcon/> </a>
   
    </IconButton>

  <IconButton aria-label="socialHandle" >
   <a href="https://www.example.com" target="_blank">  <GitHubIcon/></a>
 
    </IconButton>
    
    </Box>
 

 <Box>
 

    <Typography variant='h5'  
    sx={{textAlign:"center"}}
    >
    All Rights Reserved &copy; Prashant Badal</Typography>
     </Box>
    </Box>
    </>
    
  )
}

export default Footer