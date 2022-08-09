import React from 'react';
import { Box } from '@chakra-ui/react';
import Forms from '../components/Forms';
import RecipesFound from '../components/RecipesFound';

export default function Home() {
  return (
    <Box textAlign="center" fontSize="xl" margin={['25px 10px', '40px 300px']}>
      <Forms />
      {/* <RecipesFound /> */}
    </Box>
  );
}
