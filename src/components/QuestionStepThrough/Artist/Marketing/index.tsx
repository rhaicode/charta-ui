import { Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import DoYouWantProducerProvidePreapprovedPhotos from './DoYouWantProducerProvidePreapprovedPhotos';
import IfProducerDoesNotProvideNIL from './IfProducerDoesNotProvideNIL';
import IfProducerDoesNotRespond from './IfProducerDoesNotRespond';
import MarketingDescription from './MarketingDescription';
import NameImageLikeliness from './NameImageLikeliness';
import PromotionalVideos from './PromotionalVideos';
import PromoVideoLicense from './PromoVideoLicense';
import WhenAnArtistReleases from './WhenAnArtistReleases';
import WillTheProducerBeCredited from './WillTheProducerBeCredited';
import WithThatInMind from './WithThatInMind';

const subSteps: Record<string, ReactNode> = {
  1: <MarketingDescription />,
  2: <WhenAnArtistReleases />,
  3: <WillTheProducerBeCredited />,
  4: <NameImageLikeliness />,
  5: <DoYouWantProducerProvidePreapprovedPhotos />,
  6: <IfProducerDoesNotProvideNIL />,
  7: <IfProducerDoesNotRespond />,
  8: <PromotionalVideos />,
  9: <PromoVideoLicense />,
  10: <WithThatInMind />,
};

const Marketing: React.FC = () => {
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
    7: '480px',
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

export default Marketing;
