import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const Statements: React.FC<{ onNext?: () => void }> = ({
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
      Statements
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      Every time an artist pays their producer profits or royalties, the artist
      has to create and provide a statement showing how that payment was
      calculated.
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

export default Statements;
