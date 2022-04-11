import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const BeforeWeGetGoing: React.FC<{ onNext?: () => void }> = ({
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
      Before we get going, remember that there are tow copyrights in every song
      you hear:
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
      1. The Composition
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="12px" mb="40px">
      This is the written musical notes and lyrics.
    </Text>
    <Text
      as="span"
      display="block"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
    >
      2. The Master
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="12px">
      This is the master sound recording of the composition being performed.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1rem" mb="40px">
      Copies of the master, which are what listeners stream and purchase, are
      called “records.”
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
      w={{ base: '83vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default BeforeWeGetGoing;
