import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

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
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      Kirk will need to pay [you] the cash payment of [amount] within 7 days of
      you delivering the final master of &quot;Here Comes the Sun&quot; to
      [artist first name] and [artist first name] accepting that master as the
      final version.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      If the final master has already been accepted, then Kirk will need to pay
      you within 7 days of signing the contract.
    </Text>
    <ChartaContinueButton
      px="4rem"
      py="1rem"
      mt={{ md: '40px' }}
      mb={{ base: '40px', md: '0px' }}
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      w={{ base: '83vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default CashPayment;
