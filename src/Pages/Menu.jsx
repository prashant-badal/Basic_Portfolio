import React from 'react'
import Layout from '../component/Layouts/Layout'
import { MenuList } from '../Data/data'
import { Button,Box,CardContent, Card,CardActionArea, CardActions, CardMedia, Typography } from '@mui/material'
const Menu = () => {
  return (
      <>
    <Layout>
    <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"center",justifyContent:"space-around",bgcolor:"#ebc6c3"
    }}>
    {MenuList.map((item)=>(
<Card  sx={{maxWidth:250,m:2}}>
<CardActionArea>
<CardMedia 
sx={{minHeight:"280px"}}
component="img"
image={item.image}
alt="MenuFood"
 />


<CardContent>
<Typography variant='h5' component='div'>{item.name}</Typography>
<Typography variant="body2" color="text.secondary">
         {item.description}
          </Typography>

</CardContent>
</CardActionArea>
<CardActions>
<Button varient="filled"> Add to Card</Button>

</CardActions>

</Card>

  ))}
    </Box>
  
    </Layout>
     
</>
  )
}

export default Menu
