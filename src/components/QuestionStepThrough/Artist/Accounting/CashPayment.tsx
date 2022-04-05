import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const CashPayment: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="600"
      mr="auto"
    >
      Cash Payment
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      You&apos;ll need to pay [producer first name] the cash payment of [amount]
      within 7 days of [producer first name] delivering the final master of
      [song name] to [you] and [you] accepting that master as the final version.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      If the final master has already been accepted, then you&apos;ll need to
      pay [producer first name] within 7 days of signing the contract.
    </Text>
    <ChartaButton
      px="4rem"
      py="1rem"
      mt={{ md: '40px' }}
      mb={{ base: '40px', md: '0px' }}
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaButton>
  </>
);

export default CashPayment;
