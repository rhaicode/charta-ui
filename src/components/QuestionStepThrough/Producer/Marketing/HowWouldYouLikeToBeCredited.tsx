import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';

const HowWouldYouLikeToBeCredited: React.FC<{
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
      How would you like to be credited?
    </Text>
    <ChartaFormButton
      mt="30px"
      onClick={() => {
        onNext();
      }}
    >
      Producer credit
    </ChartaFormButton>
  </>
);

export default HowWouldYouLikeToBeCredited;
