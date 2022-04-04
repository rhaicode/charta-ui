import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const BeforeSongNameIsReleased: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text as="p" fontSize="xl" lineHeight="28px" fontWeight="600" mr="auto">
      Before [song name] is released, it&apos;s crucial that we figure out
      whether or not it contains any samples. There are two types of samples:
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
      1. Master Samples
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="12px" mb="40px">
      These are audio snippets of other songs that you include in the master of
      your song.
    </Text>
    <Text
      as="span"
      display="block"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
    >
      2. Composition Samples
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1rem" mb="40px">
      These are snippets of lyrics or sheet music from other songs that get
      re-recorded in your song.
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

export default BeforeSongNameIsReleased;
