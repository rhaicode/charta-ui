import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const MarketingDescription: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/marketing-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Marketing
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px">
      Get the hype train rolling.
    </Text>
    <ChartaButton
      px="4rem"
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Let&apos;s go
    </ChartaButton>
  </>
);

export default MarketingDescription;
