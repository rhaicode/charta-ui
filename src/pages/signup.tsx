import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Text,
  Input,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ChartaButton from '../components/common/ChartaButton';

import Footer from '../components/common/Footer';
import PasswordField from '../components/common/forms/PasswordField';
import Navbar from '../components/common/Navbar';

const Signup: React.FC = () => (
  <Box
    backgroundColor="base-dark-green-1"
    minH="100vh"
    position="relative"
    pt={{ base: '12px', md: '27px' }}
    pb={{ base: '4rem', md: '16rem' }}
    color="white"
  >
    <Container maxW="container.xl" overflowX="hidden">
      <Navbar noHamburger />
      <Box
        mt={{ base: '40px', md: '80px' }}
        backgroundColor="base-light-green"
        minH={{ base: '80vh', md: '0px' }}
        p={{ base: '40px', md: '60px' }}
        maxW="466px"
        mx="auto"
        borderRadius="15px"
        textAlign="center"
      >
        <Text as="span" fontWeight="500" fontSize="xl">
          Sign up
        </Text>
        <form>
          <FormControl mt="40px">
            <FormLabel fontWeight="400" fontSize="14px">
              Email address
            </FormLabel>
            <Input
              type="email"
              placeholder="Enter email"
              mt="-0.5rem"
              _placeholder={{
                color: '#FFFFFF',
                opacity: '0.6',
              }}
            />
          </FormControl>
          <PasswordField mt="40px" placeholder="Enter password" />
          <PasswordField mt="40px" placeholder="Re-enter password" />
          <Link to="/get-started">
            <ChartaButton w="full" mt="40px">
              Sign up
            </ChartaButton>
          </Link>
        </form>
        <Text as="p" w={{ base: '20ch', md: 'full' }} mx="auto" mt="30px">
          Already have an account?{' '}
          <Link to="/login">
            <Text as="span" color="base-gold">
              Log in
            </Text>
          </Link>
        </Text>
      </Box>
    </Container>
    <Footer display={{ base: 'none', md: 'flex' }} />
    <Text
      as="p"
      display={{ base: 'block', md: 'none' }}
      position="absolute"
      w="100%"
      bottom="0px"
      textAlign="center"
      mb="1rem"
    >
      © 2022 Charta. All rights reserved.
    </Text>
  </Box>
);

export default Signup;
