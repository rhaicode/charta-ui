import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const TwoWaysProducerCanBePaid: React.FC<{ onNext?: () => void }> = ({
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
      There are two ways a producer can be paid:
    </Text>
    <Text
      as="span"
      display="block"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
      mt="30px"
    >
      1. Profit Split or Royalties
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="12px" mb="40px">
      The artist can split the profits or royalties from sales of the song with
      the producer. Usually a producer gets anywhere from 20% to 25% of an
      artist&apos;s profits or the royalties their label pays them.
    </Text>
    <Text
      as="span"
      display="block"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
    >
      2. Cash Fee
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1rem" mb="40px">
      Cash is king. If the producer is also receiving a profit split or royalty,
      then the cash fee can be a prepayment of future profits or royalties.
    </Text>
    <Box h="6rem" display={{ base: 'block', md: 'none' }} />
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

export default TwoWaysProducerCanBePaid;
