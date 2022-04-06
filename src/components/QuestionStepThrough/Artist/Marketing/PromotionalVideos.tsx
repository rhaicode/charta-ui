import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const PromotionalVideos: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/promotional-videos-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Promotional Videos
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px" maxW="40ch">
      One of the best ways to advertise a song is to create music videos, lyric
      videos and other promotional videos that can be shared on all forms of
      media, including social media like YouTube and Facebook. We&apos;ll call
      these &quot;promo videos.&quot;
    </Text>
    <Box h="8rem" display={{ md: 'none' }} />
    <ChartaContinueButton
      px="4rem"
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default PromotionalVideos;
