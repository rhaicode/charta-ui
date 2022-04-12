import { Flex, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';

import ChartaButton from '../common/ChartaButton';

const Hero: React.FC = () => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    w="100%"
    direction={{ base: 'column', lg: 'row' }}
    gap="5%"
    mt={{ md: '20px', lg: '80px' }}
  >
    <Box mt={{ md: '0px', lg: '6rem' }} order={{ base: '2', lg: '0' }}>
      <Text
        as="span"
        fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
        fontWeight="500"
        lineHeight={{ base: '42px', md: '50px', lg: '70px' }}
        letterSpacing="0.02em"
        display="block"
        textAlign={{ base: 'center', lg: 'left' }}
        maxW={{ lg: '15ch' }}
        mx={{ base: 'auto', lg: '0px' }}
      >
        Move at the speed of agreement
      </Text>
      <Text
        as="p"
        fontSize={{ base: 'base', md: 'lg' }}
        lineHeight="28px"
        letterSpacing="0.01em"
        mt="2.25rem"
        fontWeight="400"
        textAlign={{ base: 'center', lg: 'left' }}
        maxW={{ md: '52ch', lg: '48ch' }}
        mx={{ base: 'auto', lg: '0px' }}
      >
        With our platform, you can spend more time making music, and less time
        worrying about producer deals. On Charta, you can negotiate and execute
        a contract all in plain English, starting at just $50 per agreement.
      </Text>
      <Flex maxW={{ base: 'full', lg: 'max-content' }}>
        <ChartaButton
          px="3rem"
          mt="2.75rem"
          w={{ base: 'full', md: '16rem', lg: 'auto' }}
          py={{ base: '1.75rem', md: '1.5rem', lg: '1rem' }}
          mx={{ base: 'auto', lg: '0px' }}
          onClick={() => {
            document
              .querySelector('.preregister')!
              .scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Sign up now
        </ChartaButton>
      </Flex>
    </Box>
    <Flex justifyContent="end" order={{ base: '1', lg: '0' }}>
      <Box
        h={{ base: '220px', md: '415px', lg: '505px' }}
        position="relative"
        w={{ base: '320px', md: '480px', lg: '560px' }}
        mx={{ md: 'auto', lg: '0px' }}
        mt={{ base: '40px', lg: '0px' }}
        mb={{ base: '1rem', md: '2rem', lg: '0px' }}
      >
        <Box
          w={{ base: '186px', md: '280px', lg: '385px' }}
          h={{ base: '170px', md: '280px', lg: '385px' }}
          position="absolute"
          top={{ base: '20px', md: '90px', lg: '48px' }}
          left={{ base: '60px', md: '90px', lg: '80px' }}
          backgroundColor="#fff"
          opacity="0.1"
          borderRadius="15px"
        />
        <>
          <Image
            display={{ base: 'block', md: 'none' }}
            src="./assets/man-on-phone-mobile.png"
            position="relative"
            top="0px"
            left="0px"
            zIndex="2"
          />
          <Image
            display={{ base: 'block', md: 'none' }}
            src="./assets/woman-on-guitar-mobile.png"
            position="absolute"
            bottom="0px"
            right="0px"
          />
          <Image
            display={{ base: 'none', md: 'block' }}
            src="./assets/man-on-phone.png"
            alt="Man on phone"
            position="relative"
            top={{ md: '0px', lg: '0px' }}
            left={{ md: '0px', lg: '0px' }}
            zIndex="2"
            w={{ md: '235px', lg: '279px' }}
            h={{ md: '295px', lg: '372px' }}
          />
          <Image
            display={{ base: 'none', md: 'block' }}
            src="./assets/woman-on-guitar.png"
            alt="Woman on guitar"
            position="absolute"
            bottom={{ md: '0px', lg: '0px' }}
            right={{ md: '0px', lg: '0px' }}
            w={{ md: '270px', lg: '335px' }}
            h={{ md: '270px', lg: '335px' }}
          />
        </>
      </Box>
    </Flex>
  </Flex>
);

export default Hero;
