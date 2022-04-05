import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const DisputeResolution: React.FC<{ onNext?: () => void }> = ({
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
      Dispute Resolution
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      It&apos;s always helpful to have rules that can guide you if and when a
      dispute happens. Most importantly, how long does someone have to fix a
      breach of the contract?
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      If the breach is not making a payment, a person will have 15 days to fix
      it. If the breach is anything but not making a payment, a person will have
      30 days to fix it.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      That said, if the breach is not giving a producer proper credit, an artist
      will have to fix that as soon as possible
    </Text>
    <Box h="8rem" display={{ md: 'none' }} />
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

export default DisputeResolution;
