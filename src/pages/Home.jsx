import { Box } from '@mui/material';
import { useState } from 'react';

import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

function Home() {
  const [ bodyPart, setBodyPart ] = useState('all');
  const [ exercises, setExercises ] = useState([]);

  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} setBodyPart={setBodyPart} bodyPart={bodyPart}/>
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home