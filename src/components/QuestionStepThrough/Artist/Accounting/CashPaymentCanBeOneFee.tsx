import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const CashPaymentCanBeOneFee: React.FC<{ onNext?: () => void }> = ({
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
      A cash payment can be (1) a fee, (2) an advance against future profits or
      royalties or (3) both.
    </Text>

    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      If all the cash payment is a fee, then the producer has to wait longer to
      earn profits or royalties, but they will start receiving checks as soon as
      they do.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      If all the cash payment is an advance, then the producer will earn profits
      or royalties faster, but they will start receiving checks only after they
      earn profits or royalties in the same amount as the advance.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      With that in mind, people typically agree that the cash payment is half
      fee, half advance.
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
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default CashPaymentCanBeOneFee;
