import React from 'react'
import Layout from '../component/Layouts/Layout'
import { Typography,Box ,Button} from '@mui/material'
import { Link } from 'react-router-dom'
import Banner from '../images/banner.jpeg'
const Home = () => {
  return (
     <>
    <Layout>
   <Box sx={{height:"90vh",

   display:"flex",
   flexDirection:"column",

   justifyContent:"center",
   backgroundImage:`url(${Banner})`,
    backgroundSize: "cover",
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
   
   
   
   }} >
   <Box sx={{ marginLeft:"3rem",padding:"2rem",width:"19rem",border:"2px solid black",borderRadius:"35%",bgcolor:"#ebc6c3"
     
   
   }} >
    <Typography sx={{fontWeight:"bold",fontFamily:"cursive"}}variant="h4" component="div">Food Website</Typography>

   <Typography color="#122459" sx={{fontFamily:"cursive",px:"2rem",my:".4rem"}}  variant="body" component="div">Best Food In India</Typography>
   <Link to='/restaurant' >
   <Button 
   sx={{mx:"2.7rem",my:"1rem",
   }
   }
   
   variant="outlined" color="inherit"
   
   >Order Now</Button>
   
   </Link>
   
   </Box>

   
   </Box>
    </Layout>
     
</>
  )
}

export default Home
