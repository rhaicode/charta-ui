import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const WhenDoesProducerPaidRoyalties: React.FC<{ onNext?: () => void }> = ({
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
      When does a producer start getting paid royalties?
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      A producer starts getting paid royalties once the artist&quot;s net
      royalties are enough to cover the recording costs of the master. The
      &quot;net royalties&quot; are the artist&quot;s gross royalties minus any
      producer or mixer royalties.
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
      If an artist spends $10,000 on recording costs, and their net royalty from
      their label is 16% of record sales, then there needs to be $10,000 / 16%,
      or $62,500, in record sales before the producer starts receiving
      royalties.
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

export default WhenDoesProducerPaidRoyalties;
