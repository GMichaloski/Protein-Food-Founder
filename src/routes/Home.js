import React from 'react';
import { Box } from '@chakra-ui/react';
import Forms from '../components/Forms';
import RecipesFound from '../components/RecipesFound';
import { useParams } from 'react-router-dom';

export default function Home() {
  const { page } = useParams();
  return (
    <Box textAlign="center" fontSize="xl" margin={['25px 10px', '40px 300px']}>
      <Forms />
      <RecipesFound page={page} />
    </Box>
  );
}
