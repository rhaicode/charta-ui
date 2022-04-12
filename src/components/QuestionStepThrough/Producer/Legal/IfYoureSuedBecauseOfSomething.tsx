import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const IfYoureSuedBecauseOfSomething: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text as="p" fontSize="lg" lineHeight="24px" fontWeight="500" mr="auto">
      If you&apos;re sued because of something the other party did, it&apos;s
      not fair that you should have to pay legal fees and expenses to defend
      yourself and, potentially, even pay the judgment or settlement amount.
    </Text>
    <Text
      as="p"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
      mt="20px"
    >
      If the other party is the reason why you&apos;re being sued, they should
      reimburse you for your reasonable legal fees and expenses and cover any
      judgments or settlements.
    </Text>
    <Text
      as="p"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
      mt="20px"
    >
      That&apos;s indemnification.
    </Text>
    <Box h="6rem" display={{ md: 'none' }} />
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

export default IfYoureSuedBecauseOfSomething;
