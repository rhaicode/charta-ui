import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const PostRecoupment: React.FC<{ onNext?: () => void }> = ({
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
      Post-Recoupment Producer Royalties
    </Text>
    <Text lineHeight="28px" mr="auto" mt="20px">
      Once recording costs are recouped, the producer will be paid its royalties
      in one of two ways:
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
      1. Prospectively
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="12px" mb="40px">
      The producer is paid royalties on all sales made after the recording costs
      were recouped.
    </Text>
    <Text
      as="span"
      display="block"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
    >
      2. Retroactively
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="12px">
      The producer is paid royalties on all sales made after the song was
      released, starting with the first sale, or &quot;record one.&quot;
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

export default PostRecoupment;
