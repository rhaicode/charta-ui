import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import WillYouProvidePreapprovedPhotos from './WillYouProvidePreapprovedPhotos';
import HowWouldYouLikeToBeCredited from './HowWouldYouLikeToBeCredited';
import IfYouDontProvideNIL from './IfYouDontProvideNIL';
import IfYouDontRespond from './IfYouDontRespond';
import MarketingDescription from './MarketingDescription';
import NameImageLikeliness from './NameImageLikeliness';
import PromotionalVideos from './PromotionalVideos';
import PromoVideoLicense from './PromoVideoLicense';
import WhenAnArtistReleases from './WhenAnArtistReleases';
import WillYouBeCredited from './WillYouBeCredited';
import WithThatInMind from './WithThatInMind';

const subSteps: Record<string, ReactNode> = {
  1: <MarketingDescription />,
  2: <WhenAnArtistReleases />,
  3: <WillYouBeCredited />,
  4: <HowWouldYouLikeToBeCredited />,
  5: <NameImageLikeliness />,
  6: <WillYouProvidePreapprovedPhotos />,
  7: <IfYouDontProvideNIL />,
  8: <IfYouDontRespond />,
  9: <PromotionalVideos />,
  10: <PromoVideoLicense />,
  11: <WithThatInMind />,
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

export default Marketing;
