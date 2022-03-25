import React from 'react';
import { Box, Container } from '@chakra-ui/react';

import Navbar from '../components/common/Navbar';
import Hero from '../components/Landing/Hero';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Features';
import CallToAction from '../components/Landing/CallToAction';
import Footer from '../components/common/Footer';

const Landing: React.FC = () => (
  <Box backgroundColor="base-dark-green-1" minH="100vh" pt="27px" color="white">
    <Container maxW="container.xl">
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
