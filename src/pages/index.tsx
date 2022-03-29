import React from 'react';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../components/common/Navbar';
import Hero from '../components/Landing/Hero';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Features';
import CallToAction from '../components/Landing/CallToAction';
import Footer from '../components/common/Footer';

const Landing: React.FC = () => (
  <Box
    backgroundColor="base-dark-green-1"
    position="relative"
    pt={{ base: '12px', md: '27px' }}
    pb={{ base: '16rem', md: '16rem' }}
    color="white"
  >
    <Container maxW="container.xl" overflowX="hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <CallToAction />
    </Container>
    <Footer />
  </Box>
);

export default Landing;
