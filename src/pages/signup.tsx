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
import { Link } from 'react-router-dom';
import ChartaButton from '../components/common/ChartaButton';

import Footer from '../components/common/Footer';
import Input from '../components/common/Input';
import Navbar from '../components/common/Navbar';

const Signup: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpenReenter,
    onOpen: onOpenReenter,
    onClose: onCloseReenter,
  } = useDisclosure();

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
            <FormControl mt="40px">
              <FormLabel fontWeight="400" fontSize="14px">
                Password
              </FormLabel>
              <Flex position="relative">
                <Input
                  type="password"
                  placeholder="Enter password"
                  _placeholder={{
                    color: '#FFFFFF',
                    opacity: '0.6',
                  }}
                  mt="-0.5rem"
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
            <FormControl mt="40px">
              <FormLabel fontWeight="400" fontSize="14px">
                Re-enter password
              </FormLabel>
              <Flex position="relative">
                <Input
                  type="password"
                  placeholder="Re-enter password"
                  _placeholder={{
                    color: '#FFFFFF',
                    opacity: '0.6',
                  }}
                  mt="-0.5rem"
                />
                <Box position="absolute" right="0px">
                  {isOpenReenter ? (
                    <Button
                      size="sm"
                      onClick={onCloseReenter}
                      variant="ghost"
                      _hover={{ background: 'transparent' }}
                      _active={{ background: 'transparent' }}
                    >
                      <AiFillEyeInvisible fontSize="16px" />
                    </Button>
                  ) : (
                    <Button
                      size="sm"
                      onClick={onOpenReenter}
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
            <Link to="/get-started">
              <ChartaButton w="full" mt="40px">
                Sign up
              </ChartaButton>
            </Link>
          </form>
          <Text as="p" w={{ base: '20ch', md: 'full' }} mx="auto" mt="30px">
            Already have an account?{' '}
            <Text as="span" color="base-gold">
              Log in
            </Text>
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

export default Signup;
