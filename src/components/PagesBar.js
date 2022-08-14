import { Box, Button, Flex } from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PagesBar(props) {
  const { pages } = props;
  console.log(pages.length);
  return (
    <Box
      w="90vw"
      h={`${30 * Math.ceil(pages.length / 8)}px`}
      border="1px"
      borderRadius="15px"
      flexDir="row"
    >
      {pages.map((page, i) => {
        return <PageButton num={i + 1} key={i + 1} />;
      })}
    </Box>
  );
}

function PageButton(props) {
  const navigate = useNavigate();
  const { num } = props;
  const onClick = () => {
    navigate(`/${num}`, { replace: true });
  };
  return (
    <Button h="30px" w="30px" variant="none" onClick={onClick}>
      {num}
    </Button>
  );
}
