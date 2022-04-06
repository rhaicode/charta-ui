import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const WhyShouldDoContract: React.FC<{ onNext?: () => void }> = ({
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
      Why should I do a contract?
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      If an artist doesn&apos;t pay a producer for helping to create a master of
      a song, then, under U.S. copyright law, the producer is an equal co-owner
      of the master.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      An artist may be OK splitting the profits from selling records equally
      with a producer, but the artist still needs to own 100% of the copyright
      of the master so that they can control when and where the song is released
      and other uses of the song.
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

export default WhyShouldDoContract;
