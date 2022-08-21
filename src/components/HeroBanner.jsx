import { Box, Button, Stack, Typography } from '@mui/material';
import banner from '../assets/images/banner.png'

function HeroBanner() {
  return (
    <Box sx= {{
      mt: { lg: '100px', xs: '70px'},
      ml: {sm: '50px'}
    }} position="relative" p='20px'>
      <Typography color="#FF2625" fontSize="26px" fontWeight="600">
        Fitness Club
      </Typography>
      <Typography fontWeight="700"
      sx={{ fontSize: { lg: '44px', xs: '40px'}}} mb='23px' mt='30px'>
        Sweat, Smile<br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight='35px' mb={4}>Checkout the most effective fitness programs
      </Typography>
      <Button sx= {{ backgroundColor: '#FF2625', padding: '15px' }} href='#exercises' variant='contained' color='error'>Explore Exercises</Button>
      <Typography 
        fontWeight={600}
        color='#FF2625'
        fontSize= '200px'
        sx={{
          mt: '-150px',
          opacity: 0.1,
          display: { lg: 'block', xs: 'none'}
        }}
      >EXERCISE</Typography>
      <img src={banner} alt="banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner