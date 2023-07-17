import React from 'react'
import Layout from '../component/Layouts/Layout'
import { Box, Table,TableBody, TableCell, TableHead,TableContainer, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import Paper from '@mui/material/Paper';
const Contact = () => {
  return (
    <>
    <Layout>
    <Box sx={{bgcolor:"#ebc6c3" ,padding:"1.5rem"}}>
    <Typography variant="h4" component="div"
  sx={{textAlign:"center",my:2,
   }}
   >Here for Our Contact Details</Typography>
  <Typography variant="body" component="div"
  sx={{my:2,fontFamily: "Georgia"}}

   >
   Reach out to customer support: If you have the app installed on your device, check within the app for a "Help" or "Support" section. Many apps offer in-app customer support, and you can contact them directly through that.</Typography>


     <TableContainer component={Paper} sx={{width:"600px",
     '@media(max-width:600px)':{width:"300px"}
     }}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "skyblue", pt: 1 }} /> help@myrest.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>




    </Box>
    </Layout>
     
</>
  )
}           

export default Contact
