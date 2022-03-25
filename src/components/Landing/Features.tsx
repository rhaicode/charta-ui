import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import GreenDash from './GreenDash';

const Features: React.FC = () => (
  <Box mt="140px">
    <Flex gap="100px" alignItems="center" mb="100px" minH="max-content">
      <Box position="relative">
        <Box
          backgroundColor="base-light-green"
          width="546px"
          height="380px"
          borderRadius="15px"
          mt="30px"
        />
        <Image
          src="./assets/mobile_dash.png"
          alt="Mobile Dash"
          position="absolute"
          top="0px"
          left="30%"
        />
      </Box>
      <Box>
        <Text as="span" fontWeight="500" fontSize="32px" lineHeight="40px">
          Customized, easy to use, and collaborative
        </Text>
        <GreenDash my="1.25rem" />
        <Text as="p" maxW="45ch" lineHeight="25px">
          Our platform helps you and your collaborator painlessly negotiate a
          customized contract, providing you self-help tools at every step of
          the way. Once both parties agree, you will be presented with a
          finished contract that&apos;s ready to sign.
        </Text>
      </Box>
    </Flex>
    <Flex alignItems="center" gap="100px" justifyContent="end">
      <Box>
        <Text as="span" fontWeight="500" fontSize="32px" lineHeight="40px">
          Take it one question at a time
        </Text>
        <GreenDash my="1.25rem" />
        <Text as="p" maxW="47ch" lineHeight="25px">
          Contracts can be intimidating. We&apos;ll guide you through everything
          you need to do one question at a time. We will ensure that you create
          a customized contract to meet your needs.
        </Text>
      </Box>
      <Box pos="relative">
        <Box
          backgroundColor="base-light-green"
          width="546px"
          height="380px"
          borderRadius="15px"
          mt="30px"
        />
        <Image
          src="./assets/phone-1.png"
          alt="Phone 1"
          pos="absolute"
          top="0px"
          left="25px"
        />
        <Image
          src="./assets/phone-2.png"
          alt="Phone 2"
          pos="absolute"
          top="70px"
          left="198px"
        />
        <Image
          src="./assets/phone-3.png"
          alt="Phone 3"
          pos="absolute"
          top="140px"
          right="25px"
        />
      </Box>
    </Flex>
  </Box>
);

export default Features;
