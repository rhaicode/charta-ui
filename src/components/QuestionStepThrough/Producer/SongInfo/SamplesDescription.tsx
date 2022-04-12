import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const SamplesDescription: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Flex
      w="150px"
      h="150px"
      rounded="full"
      backgroundColor="base-secondary-green"
      justifyContent="center"
    >
      <Image src="/assets/basic-music-logo.png" alignSelf="center" />
    </Flex>
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Samples
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px">
      Sometimes it&apos;s better to ask for permission than forgiveness,
      especially if you don&apos;t want to be sued for copyright infringement.
    </Text>
    <ChartaContinueButton
      px="4rem"
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '83vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default SamplesDescription;
