import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const SampleClearance: React.FC<{ onNext?: () => void }> = ({
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
      Sample Clearance
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      In order to release [song name], you&apos;re going to have to get
      permission to use the master samples or composition samples. If you
      don&apos;t, the owners of the original master or composition will own 100%
      of [song name].
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      For master samples, you&apos;ll have to get permission from the owner of
      the sampled master as well as the owners of the composition that was
      performed in the sampled master.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem" mb="20px">
      For composition samples, you&apos;ll have to get permission from the
      owners of the sampled composition.
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

export default SampleClearance;
