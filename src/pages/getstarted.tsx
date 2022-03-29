import { Box, Flex, Container } from '@chakra-ui/react';
import React from 'react';
import Navbar from '../components/common/Navbar';
import GetStarted from '../components/Steps/GetStarted';

const GetStartedPage: React.FC = () => (
  <Box minH="100vh" position="relative" backgroundColor="#E5E5E5" pb="65px">
    <Flex backgroundColor="base-secondary-green">
      <Container maxW="container.xl" overflow="hidden">
        <Navbar />
      </Container>
    </Flex>
    <Box
      backgroundColor="white"
      maxW={{ base: 'full', md: '610px', lg: '710px' }}
      minH={{ base: '100vh', md: '760px', lg: '860px' }}
      mt={{ md: '35px' }}
      mx="auto"
    >
      <GetStarted />
    </Box>
  </Box>
);

export default GetStartedPage;
