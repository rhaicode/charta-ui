import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';

const HowDoesYourLabelPayYou: React.FC<{
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
      How does your label pay you?
    </Text>
    <ChartaFormButton
      mt="30px"
      onClick={() => {
        onNext();
      }}
    >
      Profit Split
    </ChartaFormButton>
    <ChartaFormButton
      mt="20px"
      onClick={() => {
        onNext();
      }}
    >
      Rpyalty
    </ChartaFormButton>
  </>
);

export default HowDoesYourLabelPayYou;
