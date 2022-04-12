import React from 'react';
import { Image, Text, Flex, Box } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const ControlledCompositionClauses: React.FC<{ onNext?: () => void }> = ({
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
      <Image src="/assets/cd-player-logo.png" alignSelf="center" />
    </Flex>
    <Text
      as="span"
      display="block"
      fontWeight="700"
      fontSize="2xl"
      mt="30px"
      textAlign={{ base: 'center', md: 'left' }}
    >
      Controlled Composition Clauses
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px" maxW="36ch">
      When a label releases a song that the artist co-wrote, labels call the
      underlying composition a &quot;controlled composition.&quot; Controlled
      composition clauses only cover physical record sales, like CDs and vinyl.
    </Text>
    <Box h="4rem" display={{ md: 'none' }} />
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

export default ControlledCompositionClauses;
