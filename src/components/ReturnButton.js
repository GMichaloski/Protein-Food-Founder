import { Box, IconButton } from '@chakra-ui/react';
import React from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
export default function ReturnButton() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/1', { replace: true });
  };
  return (
    <Box position="fixed" top="10px" left="10px">
      <IconButton
        aria-label="return"
        icon={<BsArrowReturnLeft />}
        variant="outline"
        colorScheme="black"
        bg="black"
        onClick={onClick}
      />
    </Box>
  );
}
