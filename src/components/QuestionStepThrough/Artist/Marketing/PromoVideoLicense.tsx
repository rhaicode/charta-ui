import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const PromoVideoLicense: React.FC<{ onNext?: () => void }> = ({
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
      Promo Video License
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      If a producer co-owns the composition of a song with an artist, then the
      artist needs permission from the producer to create promo videos.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      Even though the artist won&apos;t pay a license fee to the producer to
      create the promo video, that won&apos;t stop the producer from directly
      collecting their share of any money from DSPs from streaming promo videos,
      including YouTube, for example.
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
      w={{ base: '83vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default PromoVideoLicense;
