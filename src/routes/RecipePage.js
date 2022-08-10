import { Box, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useParams } from 'react-router-dom';
import { getSpecificRecipe } from '../services/recipes';
import IngredientCard from '../components/IngredientCard';
export default function RecipePage() {
  const [recipe, setRecipe] = React.useState({
    title: 'loading...',
    image:
      'http://portal.ufvjm.edu.br/a-universidade/cursos/grade_curricular_ckan/loading.gif',
    servings: 'loading...',
    readyInMinutes: 'loading...',
    extendedIngredients: [],
  });
  const { recipeId } = useParams();
  React.useEffect(() => {
    const fetchSpecificRecipe = async () => {
      const response = await getSpecificRecipe(recipeId);
      setRecipe(response.data);
    };
    fetchSpecificRecipe();
    console.log(recipe);
  });

  const { title, image, servings, readyInMinutes, extendedIngredients } =
    recipe;

  return (
    <Box>
      <Image width="100vw" height="30vh" src={image} />
      <Text marginTop="20px" fontSize="4xl">
        {title}
      </Text>
      <Box
        bgGradient="linear(to-r, #f7f710, #ffc200)"
        height="75px"
        width="100vw"
      >
        <Text fontSize="lg" color="black">
          Servings: {servings} portions!
        </Text>
        <Text fontSize="lg" color="black">
          Ready in {readyInMinutes} minutes!
        </Text>
      </Box>
      <Box>
        {extendedIngredients.map(ingredient => {
          return (
            <IngredientCard
              name={ingredient.name}
              image={ingredient.image}
              metricMeasures={ingredient.measures.metric}
            />
          );
        })}
      </Box>
    </Box>
  );
}
