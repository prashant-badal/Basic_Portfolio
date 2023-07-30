import React from 'react'
import Layout from '../component/Layouts/Layout'
import { RestaurantList } from '../Data/data'
import { Box,CardContent, Card,CardActionArea, CardMedia, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Restaurant = () => {
  
  
  return (
      <>
    <Layout>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",justifyContent:"space-around",bgcolor:"#ebc6c3"
    }}>

   
    {RestaurantList.map((restaurant)=>(
<Card  sx={{maxWidth:250,m:2}}>
<Link to="/restaurant/menu" sx={{  textDecoration: "none"}}>
<CardActionArea  >
<CardMedia 
sx={{minHeight:"280px"}}
component="img"
image={restaurant.image}
alt="Restaurant_Img"
 />


<CardContent>
<Typography variant='h5' component='div'>

{restaurant.name}

</Typography>
<Typography variant="body2" color="text.secondary">

         {restaurant.description}
          </Typography>

</CardContent>
</CardActionArea>
</Link>

</Card>

  ))}
    </Box>
  
    </Layout>
     
</>
  )
}

export default Restaurant
