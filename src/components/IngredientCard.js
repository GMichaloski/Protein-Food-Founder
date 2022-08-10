import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function IngredientCard(props) {
  const { name, image, metricMeasures } = props;
  const { amount, unitShort, unitLong } = metricMeasures;
  const imageURL = `https://spoonacular.com/cdn/ingredients_500x500/${image}`;
  return (
    <Box
      bgColor="white"
      borderRadius="full"
      width="90vw"
      height="100px"
      boxShadow="2xl"
      marginTop="10px"
    >
      <Grid templateRows="(repeat(1, 1fr))" templateColumns="repeat(2, 1fr)">
        <Image src={imageURL} boxSize="100px" borderRadius="full" />
        <Box marginTop="10px" paddingRight="30px">
          <Text color="black" fontSize="xl" alignSelf="flex-start">
            {name}
          </Text>
          <Text color="black" fontSize="xl" alignSelf="flex-start">
            {Math.ceil(amount)}{' '}
            {unitShort ? unitShort : amount > 1 ? 'units' : 'unit'}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
