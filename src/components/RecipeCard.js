import { Box, Image, Link, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import React from 'react';

export default function RecipeCard(props) {
  const { title, image, recipeId } = props;

  return (
    <LinkBox
      borderWidth="1px"
      borderRadius="10"
      height={['200px', '220px']}
      width={['40vw', '15vw']}
    >
      <LinkOverlay href={`${recipeId}`}>
        <Box>
          <Image
            src={image}
            borderTopRadius="10"
            height={['100px', '150px']}
            width={['40vw', '15vw']}
            marginBottom="10px"
          />
          <Text>{title}</Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}
