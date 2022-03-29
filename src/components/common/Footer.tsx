import { BoxProps, Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC<BoxProps> = ({ ...props }) => (
  <Flex
    backgroundColor="base-light-green"
    h={{ base: '140px', md: '77px' }}
    position="absolute"
    w="100%"
    bottom="0px"
    {...props}
  >
    <Container maxW="container.xl" my="auto">
      <Flex
        justifyContent="space-between"
        direction={{ base: 'column', md: 'row' }}
      >
        <Image
          display={{ base: 'block', md: 'none' }}
          src="./assets/charta-logo-mobile.png"
          alt="Charta Footer Logo"
          alignSelf="center"
        />
        <Image
          display={{ base: 'none', md: 'block' }}
          src="./assets/charta-footer-logo.png"
          alt="Charta Footer Logo"
        />
        <Text
          as="span"
          lineHeight="24px"
          mt={{ base: '30px', md: '0px' }}
          textAlign={{ base: 'center', md: 'left' }}
        >
          © 2022 Charta. All rights reserved.
        </Text>
      </Flex>
    </Container>
  </Flex>
);

export default Footer;
