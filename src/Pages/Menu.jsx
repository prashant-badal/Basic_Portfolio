import React, { useState } from 'react'
import Layout from '../component/Layouts/Layout'
import { Box,CardContent, Card,CardActionArea, CardMedia, Typography, Button } from '@mui/material';
import { MenuItem } from '../Data/MenuObj';

const Menu = () => {
    // const [ascending,setAscending]=useState(true);
//       const [sortAscending,setSortAscending]=useState([...MenuItem]);

// const handleSortClick=()=>{
//   if(ascending){
//    setSortAscending([...MenuItem].sort((a, b) => a.cost - b.cost));
//     }
//     else{
//       // setSortAscending([...MenuItem]).sort((a, b) => b.cost - a.cost));
//     }
//     setAscending(!ascending); // Toggle the sorting order
    

//   };
  

  return (

  
    <>
    <Layout>

      <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",justifyContent:"space-around",bgcolor:"#ebc6c3"
    }}>
{/* <Button >{ascending?'Sort Descending':'Sort Ascending'

}
 </Button> */}
   
    {MenuItem.map((items)=>(
<Card  sx={{maxWidth:600,m:2}}>
<CardActionArea sx={{display:"flex"}}>


<Box>
<CardMedia 
sx={{maxHeight:"120px",minWidth:"100px"}}
component="img"
image={items.itemImage}
alt="Items_Img"
 />


</Box>

<Box>
<CardContent>
<Typography variant='h5' component='div'>
{items.item}
</Typography>
<Typography variant='h6' component='div'>Rs {" "}
{items.cost}
</Typography>

<Typography variant="body2" color="text.secondary">

         {items.detail}
          </Typography>
          </CardContent>
</Box>




</CardActionArea>

<Button variant='outlined' sx={{m:2,mx:5}}>Add to cart</Button>


</Card>

  ))}
    </Box>
  
    
 
       </Layout>
    </>
  );
  }



export default Menu
