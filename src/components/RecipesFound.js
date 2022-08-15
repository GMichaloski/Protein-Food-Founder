import { Box, Grid } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { getRecipes } from '../services/recipes';
import PagesBar from './PagesBar';
import RecipeCard from './RecipeCard';

export default function RecipesFound(props) {
  const { page } = props;

  const [recipeData, setRecipeData] = React.useState([
    { title: '', image: '', recipeId: '' },
  ]);
  const { data, status } = useQuery(['getRecipe', page], () =>
    getRecipes(page)
  );
  const recipes = data?.data.results;
  useEffect(() => {
    console.log(data?.data.results);
    if (recipes) {
      setRecipeData(recipes);
    }
  }, [recipes]);

  return (
    <Box>
      <Grid
        id="scrollableGrid"
        border="1px"
        widht="90vw"
        height="60vh"
        padding="17px"
        gridTemplateRows={'230px 1fr'}
        gridTemplateColumns={'170px 1fr'}
        overflow="auto"
      >
        {recipeData.map(recipe => (
          <RecipeCard
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            recipeId={recipe.id}
          />
        ))}
      </Grid>
      <PagesBar pages={recipeData} />
    </Box>
  );
}
