import React, { useState } from 'react';
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
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import RecipePage from './routes/RecipePage';
function App() {
  const [recipe, setRecipe] = useState();
  const [recipeData, setRecipeData] = useState();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<Outlet />}>
          <Route path="/home" element={<Home />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
