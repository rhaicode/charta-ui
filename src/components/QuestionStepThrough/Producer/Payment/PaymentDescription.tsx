import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const PaymentDescription: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/payment-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Payment
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px">
      Now we&apos;re on to the most important part.
    </Text>
    <ChartaContinueButton
      px="4rem"
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '83vw', md: 'auto' }}
      mx="auto"
    >
      Let&apos;s go
    </ChartaContinueButton>
  </>
);

export default PaymentDescription;
