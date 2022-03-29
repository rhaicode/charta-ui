import {
  Box,
  Container,
  FormControl,
  FormLabel,
  Text,
  Flex,
  useDisclosure,
  Button,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import ChartaButton from '../components/common/ChartaButton';

import Footer from '../components/common/Footer';
import Input from '../components/common/Input';
import Navbar from '../components/common/Navbar';

const Login: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
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
            Log in
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
            <FormControl mt="40px">
              <FormLabel fontWeight="400" fontSize="14px">
                Password
              </FormLabel>
              <Flex position="relative">
                <Input
                  type="password"
                  placeholder="Enter password"
                  mt="-0.5rem"
                  _placeholder={{
                    color: '#FFFFFF',
                    opacity: '0.6',
                  }}
                />
                <Box position="absolute" right="0px">
                  {isOpen ? (
                    <Button
                      size="sm"
                      onClick={onClose}
                      variant="ghost"
                      _hover={{ background: 'transparent' }}
                      _active={{ background: 'transparent' }}
                    >
                      <AiFillEyeInvisible fontSize="16px" />
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={onOpen}
                      variant="ghost"
                      _hover={{ background: 'transparent' }}
                      _active={{ background: 'transparent' }}
                    >
                      <AiFillEye fontSize="16px" />
                    </Button>
                  )}
                </Box>
              </Flex>
            </FormControl>

            <ChartaButton w="full" mt="40px">
              Log in
            </ChartaButton>
          </form>
          <Text as="p" w={{ base: '20ch', md: 'full' }} mx="auto" mt="30px">
            Do you have an account?{' '}
            <Text as="span" color="base-gold">
              Sign up
            </Text>
          </Text>
          <Text
            as="span"
            display="block"
            textAlign="center"
            color="base-gold"
            mt={{ base: '25px', md: '15px' }}
          >
            Forgot password
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
};

export default Login;
