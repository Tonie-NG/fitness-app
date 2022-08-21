import { useState, useEffect } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utilities/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar';

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  const [ search, setSearch ] = useState('');
  const [ bodyParts, setBodyParts ] = useState([]);

  // || exercise.target.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search) || exercise.bodypart.toLowerCase().includes(search)     -------------------------ADD TO LINE 26 WHEN YOU FIGURE OUT WHAT YOU'RE DOING TO DO

  useEffect (() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

      setBodyParts(['all', ...bodyPartsData]);
    }
    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)

      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search) 
      );

      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack alignItems='center' mt="37px" justifyContent='center' p='20px'>

      <Typography fontWeight={700}  sx= {{
        fontSize: { lg: '44px', xs: '30px'}
      }} mb='50px' textAlign='center'>
        Awesome Exercises Designed <br />for You
      </Typography>

      <Box position="relative" mb='72px'>
        <TextField 
        sx={{
          input: { 
            fontWeight: '700',
            border: 'none', borderRadius: '4px'
          },
          width: { lg: '800px', xs: '350px'},
          backgroundColor: '#FFF',
          borderRadius: '40px',
        }}
          height='76px'
          value={search}
          onChange= {(e) => setSearch(e.target.value.toLowerCase())}
          placeholder='Search Exercises'
          type='text'
        />
        <Button className='search-btn' sx={{
          backgroundColor: '#FF2625',
          color: '#fff',
          textTransform: 'none',
          width: { lg: '175px', xs: '80px'},
          fontSize: { lg: '20px', xs: '14px'},
          height: '56px',
          position: 'absolute',
          right: '0'
        }} onClick={handleSearch} > Search</Button>
      </Box> 

      <Box sx= {{ position: 'relative', width: '100%', p: '20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart= {bodyPart} setBodyPart ={setBodyPart} isBodyPart/>
      </Box>
    </Stack>
  )
}

export default SearchExercises