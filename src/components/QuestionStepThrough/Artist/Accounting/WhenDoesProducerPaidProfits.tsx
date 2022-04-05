import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const WhenDoesProducerPaidProfits: React.FC<{ onNext?: () => void }> = ({
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
      When does a producer start getting paid profits?
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      A producer starts getting paid profits once the artist makes enough
      profits to cover the recording, marketing, and promotion costs of the
      master, collectively called &quot;recording costs.&quot;
    </Text>
    <Text
      as="p"
      lineHeight="28px"
      mr="auto"
      mt="1.5rem"
      fontWeight="500"
      fontSize="lg"
    >
      Example
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="0.75rem">
      If an artist spends $10,000 on recording costs and it makes a profit of
      85% on each record sold, then there needs to be $10,000 / 85%, or $11,765,
      in record sales before the producer starts receiving profits.
    </Text>
    <Box h="6rem" display={{ base: 'block', md: 'none' }} />
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

export default WhenDoesProducerPaidProfits;
