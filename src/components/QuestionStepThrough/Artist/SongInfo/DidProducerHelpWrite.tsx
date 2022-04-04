import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';

const DidProducerHelpWrite: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
      mr="auto"
    >
      Did [the producer] help write the composition?
    </Text>
    <ChartaFormButton
      mt="20px"
      onClick={() => {
        onNext();
      }}
    >
      Yes
    </ChartaFormButton>
    <ChartaFormButton
      mt="20px"
      onClick={() => {
        onNext();
      }}
    >
      No
    </ChartaFormButton>
  </>
);

export default DidProducerHelpWrite;
