import { Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Footer: React.FC = () => (
  <Flex backgroundColor="base-light-green" h="77px">
    <Container maxW="container.xl" my="auto">
      <Flex justifyContent="space-between">
        <Image src="./assets/charta-footer-logo.png" alt="Charta Footer Logo" />
        <Text as="span" lineHeight="24px">
          © 2022 Charta. All rights reserved.
        </Text>
      </Flex>
    </Container>
  </Flex>
);

export default Footer;
