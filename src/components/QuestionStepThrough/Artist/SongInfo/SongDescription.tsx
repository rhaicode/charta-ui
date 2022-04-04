import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const SongDescription: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/song-info-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Song Information
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px">
      Next, we need to know a little more about the song.
    </Text>
    <ChartaButton
      px="4rem"
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
    >
      Continue
    </ChartaButton>
  </>
);

export default SongDescription;
