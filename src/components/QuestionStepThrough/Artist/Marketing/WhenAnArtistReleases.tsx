import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const WhenAnArtistReleases: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text as="p" fontSize="lg" lineHeight="24px" fontWeight="500" mr="auto">
      When an artist releases a song, they may want to market it by, among other
      things, creating music videos and or giving the producer credit and using
      its name, image, and likeness.
    </Text>
    <Text
      as="p"
      fontSize="lg"
      lineHeight="24px"
      fontWeight="500"
      mr="auto"
      mt="2rem"
    >
      These next questions will help make sure both parties are on board with
      how [song name] is going to be promoted.
    </Text>
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

export default WhenAnArtistReleases;
