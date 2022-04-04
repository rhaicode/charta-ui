import { Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import BeforeWeGetGoing from './BeforeWeGetGoing';
import DidProducerHelpWrite from './DidProducerHelpWrite';
import MasterCompleted from './MasterCompleted';
import SongDescription from './SongDescription';
import WhoIsGoingToRelease from './WhoIsGoingToRelease';

const subSteps: Record<string, ReactNode> = {
  1: <SongDescription />,
  2: <BeforeWeGetGoing />,
  3: <MasterCompleted />,
  4: <WhoIsGoingToRelease />,
  5: <DidProducerHelpWrite />,
};

const SongInfo: React.FC = () => {
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
    1: '405px',
    2: '455px',
    3: '455px',
    4: '455px',
    '5b': '455px',
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
          md: preferredMaxWidthOnSubStep[onboardedUser.subStep] ?? '345px',
        }}
        mx="auto"
      >
        {React.cloneElement(
          subSteps[`${onboardedUser.subStep}`] as ReactElement<
            any,
            string | JSXElementConstructor<any>
          >,
          {
            onNext,
          }
        )}
      </Flex>
    </Flex>
  );
};

export default SongInfo;
