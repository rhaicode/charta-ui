import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const PaymentsAndStatements: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/payments-statements-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Payments &amp; Statements
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px">
      Let&apos;s talk about when profit or royalty payments and accounting
      statements will be sent.
    </Text>
    <ChartaContinueButton
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
    </ChartaContinueButton>
  </>
);

export default PaymentsAndStatements;
