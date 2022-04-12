import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';

const AfterAllTheRecordingCosts: React.FC<{
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
      After all the recording costs of &quot;Here Comes the Sun&quot; are
      recouped, I want to pay Dominik royalties:
    </Text>
    <ChartaFormButton
      mt="30px"
      onClick={() => {
        onNext();
      }}
    >
      Prospectively
    </ChartaFormButton>
    <ChartaFormButton
      mt="20px"
      onClick={() => {
        onNext();
      }}
    >
      Retroactively
    </ChartaFormButton>
  </>
);

export default AfterAllTheRecordingCosts;
