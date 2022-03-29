import { Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

const GetStarted: React.FC = () => (
  <Box p="40px">
    <Text
      as="span"
      display="block"
      maxW="max-content"
      mx="auto"
      color="base-gray-2"
      fontWeight="500"
      fontSize={{ base: '12px', md: '14px' }}
      textTransform="uppercase"
      letterSpacing="0.08em"
    >
      Get Started
    </Text>
    <Text
      as="span"
      display="block"
      maxW="max-content"
      mx="auto"
      color="base-primary-green"
      fontWeight="700"
      fontSize={{ base: '2xl', md: '3xl' }}
      mt={{ base: '25px', md: '50px' }}
      mb="20px"
    >
      Welcome!
    </Text>
    <Text
      as="p"
      textAlign="center"
      color="base-primary-green"
      display={{ md: 'none' }}
      mb="30px"
    >
      First, let us know whether you&apos;re the artist or the producer for this
      song.
    </Text>
    <Box maxW="max-content" mx="auto">
      <Image
        src="/assets/artist-button.png"
        cursor="pointer"
        border="2px solid"
        borderColor="transparent"
        borderRadius="5px"
        _active={{ borderColor: 'base-secondary-green' }}
        display={{ base: 'none', md: 'block' }}
      />
      <Image
        src="/assets/artist-button-mobile.png"
        cursor="pointer"
        border="2px solid"
        borderColor="transparent"
        borderRadius="5px"
        _active={{ borderColor: 'base-secondary-green' }}
        display={{ md: 'none' }}
      />
      <Image
        src="/assets/producer-button.png"
        mt="20px"
        cursor="pointer"
        border="2px solid"
        borderColor="transparent"
        borderRadius="5px"
        _active={{ borderColor: 'base-secondary-green' }}
        display={{ base: 'none', md: 'block' }}
      />
      <Image
        src="/assets/producer-button-mobile.png"
        cursor="pointer"
        mt="20px"
        border="2px solid"
        borderColor="transparent"
        borderRadius="5px"
        _active={{ borderColor: 'base-secondary-green' }}
        display={{ md: 'none' }}
      />
    </Box>
  </Box>
);

export default GetStarted;
