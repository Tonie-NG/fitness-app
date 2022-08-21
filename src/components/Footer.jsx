import { Box, Stack, Typography } from '@mui/material';

import LogoImage from '../assets/images/Logo-1.png';

function Footer() {
  return (
    <Box mt='80px' bgcolor='black'>
      <Stack gap='40px' alignItems='center' px='40px' pt='24px'>
        <Typography variant='h5' color='white'>Tonie Gym</Typography>
      </Stack>
    </Box>
  )
}

export default Footer