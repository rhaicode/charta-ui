import React from 'react';
import { Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';

import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const DoYouSubjectControlledCompositionClauses: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 4,
      subStep: 1,
      prevSubStep: 11,
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        Do you want to be subject to the controlled composition clauses?
      </Text>
      <ChartaFormButton
        mt="30px"
        onClick={() => {
          onNextStep();
        }}
      >
        Yes
      </ChartaFormButton>
      <ChartaFormButton
        mt="20px"
        onClick={() => {
          onNextStep();
        }}
      >
        No
      </ChartaFormButton>
    </>
  );
};

export default DoYouSubjectControlledCompositionClauses;
