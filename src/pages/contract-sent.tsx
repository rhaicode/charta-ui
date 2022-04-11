import { Box, Container, Flex } from '@chakra-ui/react';
import React from 'react';

import Navbar from '../components/common/Navbar';
import ContractSent from '../components/QuestionStepThrough/ContractSent';

const ContractSentPage: React.FC = () => (
  <Box
    minH="100vh"
    position="relative"
    backgroundColor="#E5E5E5"
    pb={{ md: '65px' }}
  >
    <Flex backgroundColor="base-secondary-green">
      <Container maxW="container.xl" overflow="hidden">
        <Navbar noHamburger />
      </Container>
    </Flex>
    <Box
      backgroundColor="white"
      maxW={{ base: 'full', md: '610px', lg: '710px' }}
      minH={{ base: '100vh', md: '760px', lg: '860px' }}
      mt={{ md: '35px' }}
      mx="auto"
    >
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        color="base-primary-green"
        maxW={{
          base: '300px',
          md: '470px',
        }}
        textAlign="center"
        mx="auto"
      >
        <ContractSent />
      </Flex>
    </Box>
  </Box>
);

export default ContractSentPage;
