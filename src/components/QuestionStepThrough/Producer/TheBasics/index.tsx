import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import CreateAnAccount from './CreateAnAccount';
import CreateYourAccount from './CreateYourAccount';
import DoYouHaveLoanoutCompany from './DoYouHaveLoanoutCompany';
import FullName from './FullName';
import NameOfSong from './NameOfSong';
import ArtistInfo from './ArtistInfo';
import TellUsAboutYourLoanoutCompany from './TellUsAboutYourLoanoutCompany';
import TheBasicsDescription from './TheBasicsDescription';

const subSteps: Record<string, ReactNode> = {
  1: <TheBasicsDescription />,
  2: <NameOfSong />,
  3: <FullName />,
  4: <CreateAnAccount />,
  5: <DoYouHaveLoanoutCompany />,
  '5b': <TellUsAboutYourLoanoutCompany />,
  6: <ArtistInfo />,
  7: <CreateYourAccount />,
};

const TheBasics: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNext = (argSubStep?: string, prevSubStep?: string) => {
    setOnboardedUser({
      ...onboardedUser,
      subStep: argSubStep ?? +onboardedUser.subStep + 1,
      prevSubStep: prevSubStep ?? '0',
    });
    window.scrollTo(0, 0);
  };

  const preferredMaxWidthOnSubStep: Record<string, string> = {
    4: '405px',
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

export default TheBasics;
