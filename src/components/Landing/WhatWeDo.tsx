import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import ChartaButton from '../common/ChartaButton';

const WhatWeDo: React.FC = () => (
  <Box mt="120px" textAlign="center" display={{ base: 'none', md: 'block' }}>
    <Text as="span" fontWeight="500" fontSize={{ base: '2xl', md: '32px' }}>
      What we do at Charta
    </Text>
    <Text
      as="p"
      mt="16px"
      maxW="75ch"
      mx="auto"
      lineHeight="28px"
      fontSize={{ md: 'lg' }}
      letterSpacing="0.01em"
    >
      Once both parties agree on all the terms, Charta will provide them with
      the final contract to sign and store in their dashboards. We&apos;re also
      developing proprietary tech that will let us turn those traditional paper
      contracts into smart contracts that can be executed on the blockchain.
      It&apos;s that simple. No legal fees, DIY template agreements or
      unenforceable handshake deals.
    </Text>
    <Text
      as="p"
      mt="24px"
      maxW="75ch"
      mx="auto"
      lineHeight="28px"
      fontSize={{ md: 'lg' }}
      letterSpacing="0.01em"
    >
      If you&apos;re like us, and you can&apos;t wait to see this become a
      reality, sign up below to receive updates and a discount code for your
      first contract when we launch!
    </Text>
    <ChartaButton mt="40px" px="4rem">
      Sign up now
    </ChartaButton>
  </Box>
);

export default WhatWeDo;
