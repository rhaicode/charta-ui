import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import GreenDash from './GreenDash';

const Features: React.FC = () => (
  <Box mt={{ md: '80px', lg: '140px' }} mb="50px">
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      alignItems="center"
      mb="100px"
      minH="max-content"
    >
      <Box
        position="relative"
        order={{ base: '2', lg: '0' }}
        mx={{ md: 'auto', lg: '0px' }}
        mr={{ lg: '100px' }}
        mt={{ base: '4rem', lg: '0px' }}
      >
        <Box
          backgroundColor="rgba(255,255,255,0.1)"
          width={{ base: '340px', md: '420px', lg: '546px' }}
          height={{ base: '220px', md: '275px', lg: '380px' }}
          borderRadius="15px"
          mt="30px"
        />
        <Image
          display={{ base: 'block', md: 'none' }}
          src="./assets/mobile_dash-mobile.png"
          alt="Mobile Dash"
          position="absolute"
          top="0px"
          left={{ base: '28%' }}
          h={{ md: '330px', lg: 'auto' }}
        />
        <Image
          display={{ base: 'none', md: 'block' }}
          src="./assets/mobile_dash.png"
          alt="Mobile Dash"
          position="absolute"
          top="0px"
          left="28%"
          h={{ md: '330px', lg: 'auto' }}
        />
      </Box>
      <Box order={{ base: '1', lg: '0' }} mt={{ base: '80px', md: '0px' }}>
        <Text
          as="span"
          fontWeight="500"
          fontSize={{ base: '25px', md: '32px' }}
          lineHeight="40px"
        >
          Customized, easy to use, and collaborative
        </Text>
        <GreenDash my="1.25rem" mx={{ base: '0px', md: 'auto', lg: '0px' }} />
        <Text
          as="p"
          maxW={{ md: '60ch', lg: '45ch' }}
          lineHeight="25px"
          textAlign={{ base: 'left', md: 'center', lg: 'left' }}
        >
          Our platform helps you and your collaborator painlessly negotiate a
          customized contract, providing you self-help tools at every step of
          the way. Once both parties agree, you will be presented with a
          finished contract that&apos;s ready to sign.
        </Text>
      </Box>
    </Flex>
    <Flex
      alignItems={{ md: 'center' }}
      justifyContent={{ lg: 'flex-end' }}
      direction={{ base: 'column', lg: 'row' }}
    >
      <Box mr={{ lg: '100px' }} order={{ base: '1', lg: '0' }}>
        <Text
          as="span"
          display="block"
          fontWeight="500"
          fontSize={{ base: '25px', md: '32px' }}
          w={{ md: 'max-content' }}
          lineHeight="40px"
          mx={{ base: '0px', md: 'auto', lg: '0px' }}
          mt={{ base: '80px', md: '0px' }}
        >
          Take it one question at a time
        </Text>
        <GreenDash my="1.25rem" mx={{ base: '0px', md: 'auto', lg: '0px' }} />
        <Text
          as="p"
          lineHeight="25px"
          maxW={{ md: '55ch', lg: '45ch' }}
          textAlign={{ base: 'left', md: 'center', lg: 'left' }}
        >
          Contracts can be intimidating. We&apos;ll guide you through everything
          you need to do one question at a time. We will ensure that you create
          a customized contract to meet your needs.
        </Text>
      </Box>
      <Box
        pos="relative"
        order={{ base: '2', lg: '0' }}
        mt={{ base: '40px', md: '4rem', lg: '0px' }}
      >
        <Image
          display={{ md: 'none' }}
          src="./assets/step-through-mobile.png"
          mx="auto"
        />
        <Box
          backgroundColor="rgba(255,255,255,0.1)"
          display={{ base: 'none', md: 'block' }}
          width={{ md: '495px', lg: '546px' }}
          height={{ md: '330px', lg: '380px' }}
          borderRadius="15px"
          mt="30px"
        />
        <Image
          src="./assets/phone-1.png"
          alt="Phone 1"
          display={{ base: 'none', md: 'block' }}
          pos="absolute"
          top="0px"
          left="25px"
          h={{ md: '260px', lg: 'auto' }}
        />
        <Image
          src="./assets/phone-2.png"
          alt="Phone 2"
          display={{ base: 'none', md: 'block' }}
          pos="absolute"
          top="70px"
          left={{ md: '180px', lg: '198px' }}
          h={{ md: '260px', lg: 'auto' }}
        />
        <Image
          src="./assets/phone-3.png"
          alt="Phone 3"
          display={{ base: 'none', md: 'block' }}
          pos="absolute"
          top={{ md: '120px', lg: '140px' }}
          right={{ md: '25px', lg: '25px' }}
          h={{ md: '260px', lg: 'auto' }}
        />
      </Box>
    </Flex>
  </Box>
);

export default Features;
