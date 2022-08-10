import { Box, Grid, Image, Text } from '@chakra-ui/react';
import React from 'react';

export default function IngredientCard(props) {
  const { name, image, metricMeasures } = props;
  const { amount, unitLong } = metricMeasures;
  console.log(metricMeasures);
  return (
    <Box
      bgColor="white"
      borderRadius="full"
      width="90vw"
      height="115px"
      boxShadow="2xl"
      marginTop="10px"
    >
      <Grid templateRows="(repeat(1, 1fr))" templateColumns="repeat(2, 1fr)">
        <Image src={image} boxSize="115px" borderRadius="full" />
        <Box marginTop="20px" paddingRight="30px">
          <Text color="black" fontSize="xl" alignSelf="flex-start">
            {name}
          </Text>
          <Text color="black" fontSize="xl" alignSelf="flex-start">
            {Math.ceil(amount)} {unitLong}
          </Text>
        </Box>
      </Grid>
    </Box>
  );
}
