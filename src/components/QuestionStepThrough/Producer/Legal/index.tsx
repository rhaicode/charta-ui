import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import DisputeResolution from './DisputeResolution';
import DisputesBetweenParties from './DisputesBetweenParties';
import IfTheOtherPartyIsSued from './IfTheOtherPartyIsSued';
import IfYouNeedToFileLawsuit from './IfYouNeedToFileLawsuit';
import IfYoureSuedBecauseOfSomething from './IfYoureSuedBecauseOfSomething';
import IfYoureSuedBecauseTheOtherParty from './IfYoureSuedBecauseTheOtherParty';
import IfYouWinADirectClaim from './IfYouWinADirectClaim';
import Indemnification from './Indemnification';
import IndemnificationProcedure from './IndemnificationProcedure';
import LegalDescription from './LegalDescription';
import RerecordingRestrictions from './RerecordingRestrictions';
import RoyaltyHoldback from './RoyaltyHoldback';

const subSteps: Record<string, ReactNode> = {
  1: <LegalDescription />,
  2: <RerecordingRestrictions />,
  3: <DisputeResolution />,
  4: <DisputesBetweenParties />,
  5: <IfYouNeedToFileLawsuit />,
  6: <IfYouWinADirectClaim />,
  7: <Indemnification />,
  8: <IfYoureSuedBecauseOfSomething />,
  9: <IfYoureSuedBecauseTheOtherParty />,
  10: <IfTheOtherPartyIsSued />,
  11: <IndemnificationProcedure />,
  12: <RoyaltyHoldback />,
};

const Legal: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNext = (argSubStep?: string, prevSubStep?: string) => {
    setOnboardedUser({
      ...onboardedUser,
      subStep: argSubStep ?? +onboardedUser.subStep + 1,
      prevSubStep: prevSubStep ?? 0,
    });
    window.scrollTo(0, 0);
  };

  const preferredMaxWidthOnSubStep: Record<string, string> = {
    6: '330px',
    9: '350px',
    10: '350px',
  };

  return (
    <Flex mt="40px">
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        color="base-primary-green"
        maxW={{
          base: '300px',
          md: preferredMaxWidthOnSubStep[onboardedUser.subStep] ?? '463px',
        }}
        mx="auto"
      >
        {React.cloneElement(
          (subSteps[`${onboardedUser.subStep}`] as ReactElement<
            any,
            string | JSXElementConstructor<any>
          >) || <Box />,
          {
            onNext,
          }
        )}
      </Flex>
    </Flex>
  );
};

export default Legal;
