import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import BeforeSongNameIsReleased from './BeforeSongNameIsReleased';
import BeforeWeGetGoing from './BeforeWeGetGoing';
import DidProducerHelpWrite from './DidProducerHelpWrite';
import DoesSongNameHaveSamples from './DoesSongNameHaveSamples';
import HowManySongsSampled from './HowManySongsSampled';
import HowMuchProducerOwn from './HowMuchProducerOwn';
import MasterCompleted from './MasterCompleted';
import SampleClearance from './SampleClearance';
import SamplesDescription from './SamplesDescription';
import SongDescription from './SongDescription';
import WhatsTheNameOfTheSongSampled from './WhatsTheNameOfTheSongSampled';
import WhoIsGoingToRelease from './WhoIsGoingToRelease';

const subSteps: Record<string, ReactNode> = {
  1: <SongDescription />,
  2: <BeforeWeGetGoing />,
  3: <MasterCompleted />,
  4: <WhoIsGoingToRelease />,
  5: <DidProducerHelpWrite />,
  6: <HowMuchProducerOwn />,
  7: <SamplesDescription />,
  8: <BeforeSongNameIsReleased />,
  9: <DoesSongNameHaveSamples />,
  10: <SampleClearance />,
  11: <HowManySongsSampled />,
  12: <WhatsTheNameOfTheSongSampled />,
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
    7: '385px',
    '4b': '455px',
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

export default SongInfo;
