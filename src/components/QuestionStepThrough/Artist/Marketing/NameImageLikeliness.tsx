import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const NameImageLikeliness: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text as="p" fontSize="lg" lineHeight="28px" fontWeight="600" mr="auto">
      Name, Image &amp; Likeness
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      When an artist promotes a song, they will typically reference the producer
      they worked with and use that producer&amp;s professional name, image, and
      likeness in marketing materials.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      The next couple questions will help make sure that both parties agree on
      how those marketing materials will be created.
    </Text>
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

export default NameImageLikeliness;
