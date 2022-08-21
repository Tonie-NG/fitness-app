import { Box, Button, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';


function SimilarExercises({ targetMusleExercises, equipmentExercises}) {
  return (
    <Box sx={{ mt: {lg:'100px', xs:'0'} }}>
      <Typography variant="h3" mb={5}>Exercises that Target the same muscle area</Typography>
      <Stack direction="row" sx={{ p:'2px', position:'relative' }}>
        {targetMusleExercises.length ? <HorizontalScrollbar data={targetMusleExercises} /> : <Loader />}
      </Stack>
      <Typography variant="h3" mb={5}>Exercises that use similar equipments</Typography>
      <Stack direction="row" sx={{ p:'2px', position:'relative' }}>
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />}
      </Stack>
    </Box>
  )
}

export default SimilarExercises