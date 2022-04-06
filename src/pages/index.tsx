import React from 'react';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../components/common/Navbar';
import Hero from '../components/Landing/Hero';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Features';
import Footer from '../components/common/Footer';
import WhatWeDo from '../components/Landing/WhatWeDo';
import GetStartedForm from '../components/Landing/GetStartedForm';

const Landing: React.FC = () => (
  <Box
    background="linear-gradient(180deg, rgba(50, 61, 97, 0) 0%, #323D61 100%), url(./assets/background-texture.png);"
    position="relative"
    pt={{ base: '12px', md: '27px' }}
    pb="12rem"
    color="white"
  >
    <Container maxW="container.xl" overflowX="hidden">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <HowItWorks />
      <Features />
      <GetStartedForm />
    </Container>
    <Footer />
  </Box>
);

export default Landing;
