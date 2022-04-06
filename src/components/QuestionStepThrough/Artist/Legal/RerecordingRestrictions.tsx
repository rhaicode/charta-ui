import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const RerecordingRestrictions: React.FC<{ onNext?: () => void }> = ({
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
      Re-recording Restrictions
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      It&apos;s important to artists that there are no competing masters of a
      song that can take away from their record sales.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      Producers typically are not able to re-record a composition and create a
      new master for 5 years. If an artist doesn&apos;t commercially release the
      final master within 12 months after getting it from the producer, then the
      producer can re-record the composition and create a new master.
    </Text>
    <Box h="8rem" display={{ md: 'none' }} />
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

export default RerecordingRestrictions;
