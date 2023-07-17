import React from 'react'
import Layout from '../component/Layouts/Layout'
import { Box, Divider, Typography } from '@mui/material'

const About = () => {
  return (
    <>
    <Layout>
<Divider/>
<Divider/>
  <Box  sx={{bgcolor:"#ebc6c3" ,padding:"1.5rem"}}>
  <Typography variant="h4" component="div"
  sx={{textAlign:"center",my:2,
   }}
   >Welcome To My Restuarant</Typography>

   <Typography variant="body" component="div" sx={{my:2,fontFamily: "Georgia"}}>
   <b><i>FastFoodFood</i></b> is an innovative and user-friendly online delivery app that aims to revolutionize the way people shop for their favorite products. With a seamless and intuitive interface, our app offers a diverse range of products from various categories, all at the convenience of your fingertips. Whether you're craving delicious meals, looking for groceries, or shopping for other essential items,<i>FastFood</i>  has got you covered.
   </Typography>
    <Typography variant="body" component="div"
    sx={{fontFamily: "Georgia"}}>
    
    Wide Range of Products: that hosts an extensive selection of products, ranging from food and groceries to electronics, beauty products, and more. Whatever you need, we've got it all in one place.

Easy Ordering: Placing an order has never been easier. With just a few taps, you can browse through the product catalog, add items to your cart, and check out securely within minutes.

Customizable Preferences: Tailor the app to your liking by setting preferences such as dietary restrictions or preferred stores. This way, you'll always see relevant products and personalized recommendations.

Real-Time Tracking: Stay informed about your order's status with real-time tracking. Know exactly when your order is being prepared, picked up, and delivered, giving you peace of mind.

Secure Payments: Our app ensures that all your transactions are secure and protected. Choose from various payment methods, including credit/debit cards, mobile wallets, and cash on delivery.

Scheduled Deliveries: Plan ahead and schedule your deliveries at your preferred time slots. Never worry about missing a delivery again.

Promotions and Discounts: Enjoy exciting promotions, deals, and discounts on your favorite products. We regularly update our offerings to make your shopping experience even more rewarding.

Customer Support: Our dedicated customer support team is available 24/7 to assist you with any queries or concerns you might have, ensuring a seamless experience throughout.

How It Works:

Registration: Download the [Your App Name] app from the App Store or Google Play and sign up with your details.

Select Location: Input your delivery address to see the available stores and products in your area.

Browse and Add Items: Explore the wide variety of products and add your desired items to the cart.

Review and Check Out: Double-check your order, apply any relevant discounts, and proceed to the secure checkout process.

Payment: Choose your preferred payment method and complete the transaction.

Real-Time Tracking: Keep an eye on your order's progress with real-time tracking from preparation to delivery.

Deliver to Your Doorstep: Sit back and relax as our delivery team brings your order right to your doorstep.
    </Typography>
  
  </Box>
    </Layout>
     
</>
  )
}

export default About
