import { AppBar, Box, Button, CssBaseline, IconButton, Toolbar, Typography ,Drawer, Divider} from "@mui/material"

import { Link, NavLink } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { useState } from "react";
import '../../styles/HeaderStyles.css';



const NavButtonOption=[
  {
  title:"Home",
  link:"/"
},
  {
  title:"About",
  link:"/about"
},

  {
  title:"Conatct",
  link:"/contact"
},

  {
  title:"Menu",
  link:"/restaurant/menu"
},
 {
  title:"Restaurant",
  link:"/restaurant"
}


];

const Header =()=> {
    const [openMobile,setOpenMobile]=useState(false)
    const handleDrawerToggle=()=>{
setOpenMobile(!openMobile)
    };



     const drawer=(
<>
 

<Box sx={{display:"flex",justifyContent:"center"}}>

<MenuIcon  fontSize="large" sx={{color:"goldenrod"}}/>
   <Typography variant="h5" component="div"  color ={"goldenrod"} >
         FastFood
          </Typography>
       



</Box>
   <Divider/>
        <Box sx={{display:"flex",
       flexDirection:"row",
        justifyContent:"center",}}>
<ul className="NavigationOptionMobile">
{


NavButtonOption.map((item)=>(
  

 <li><NavLink activeClassName="active" to={item.link} >{item.title}</NavLink> </li>



))
}
  
  </ul>
  </Box>
   
</>
     )


  return (
 


 
    <>
    <Box>
    <CssBaseline>
    {/* we can use theme.platette but firstuse customcss */}
    <AppBar position="static" component="nav"  sx={{bgcolor:"pink"}}>
        <Toolbar >
        <IconButton aria-label="openDrawer" color="black" 
        onClick={handleDrawerToggle}
        sx={{display:{sm:"block",md:'none' ,lg:'none' } }}
        >
     <MenuIcon/>
       
        </IconButton>
      

          <FastfoodIcon fontSize="large" sx={{color:"goldenrod"  }}/>
          <Typography variant="h5" component="div"  color ={"goldenrod"} sx={{flexGrow:1}}>
          
          FastFood
         
          </Typography>


        {/* hide when screen size is xs  */}
        <Box  sx={{ 
          
          display:{xs:"none",sm:"block"},flexGrow:1
        }}>
        <ul className="navigationOption">
        
{NavButtonOption.map((item)=>(
  
  <li><NavLink activeClassName="active" to={item.link} >{item.title}</NavLink> </li>

))}

</ul>
  </Box>
 
        <Link to="/path-to-page" >
      <Button variant="outlined" sx={{color:"white" ,bgcolor:"#DE9788"}}>
        LOG IN
      </Button>
    </Link>
     
        </Toolbar>
      
      </AppBar>
      <Drawer open={openMobile}
onClose={()=>(setOpenMobile(false))}
sx={{display:
{"& .MuiDrawer-paper":
{boxSizing:"border-box",
width:"200px",
backgroundColor:'#ECD8C2'
}
}}}

>
{drawer}
</Drawer>
    
    </CssBaseline>
      
    
    
    
    </Box>
    
<Divider/>
    </>
   
    
  )
}

export default Header