import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const TheBasicsDescription: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/basics-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      The Basics
    </Text>
    <Text as="p" textAlign="center" maxW="40ch" mt="20px" mb="30px">
      Let&apos;s get started with some basic information about you and the song
      you&apos;ve created.
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
      Let&apos;s start
    </ChartaButton>
  </>
);

export default TheBasicsDescription;
