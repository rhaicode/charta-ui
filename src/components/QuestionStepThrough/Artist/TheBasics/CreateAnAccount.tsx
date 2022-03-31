import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/ChartaFormButton';

const CreateAnAccount: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
    >
      Would you like to create an account now?
    </Text>
    <Text
      as="p"
      fontSize="16px"
      textAlign={{ base: 'left', md: 'center' }}
      lineHeight="24px"
      fontWeight="400"
      mt="20px"
    >
      This will allow you to save your progress and return to finish your offer
      at any time.
    </Text>
    <ChartaFormButton
      mt="30px"
      onClick={() => {
        onNext();
      }}
    >
      Yes, please!
    </ChartaFormButton>
    <ChartaFormButton
      mt="20px"
      onClick={() => {
        onNext();
      }}
    >
      Not right now
    </ChartaFormButton>
  </>
);

export default CreateAnAccount;
