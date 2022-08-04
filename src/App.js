import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Flex,
  Grid,
} from '@chakra-ui/react';
import theme from './theme';
import Forms from './components/Forms';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box
        textAlign="center"
        fontSize="xl"
        margin={['25px 10px', '40px 300px']}
      >
        <Forms />
        <Flex flexDir="row">
          <RecipeCard
            image="https://www.receitasedicasdochef.com.br/wp-content/uploads/2014/10/Receitas-de-Cheesecake.jpg"
            title="Cheesecake brabo"
            recipeId="1"
          />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
