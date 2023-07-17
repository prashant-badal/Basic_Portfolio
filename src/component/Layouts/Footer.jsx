import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        transform:'translateX(2px)',
        transition:'all 400ms'
      }

    }}>
       <IconButton aria-label="socialHandle"  >
    <InstagramIcon />
    </IconButton>
      <IconButton aria-label="socialHandle" >
    <YouTubeIcon/>
    </IconButton>
      <IconButton aria-label="socialHandle" >
    <FacebookIcon/>
    </IconButton>

  <IconButton aria-label="socialHandle" >
   <GitHubIcon/>
    </IconButton>
    
    </Box>
 

 <Box>
 

    <Typography variant='h5'  
    sx={{textAlign:"center"}}
    >
    All Rights Reserved &copy; Techinfo YT</Typography>
     </Box>
    </Box>
    </>
    
  )
}

export default Footer