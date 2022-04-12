import { Box, Flex, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { onboardedUserAtomPersist } from '../../../atoms';
import DottedBreadCrumb from '../../common/forms/DottedBreadCrumb';

import TheBasics from './TheBasics';
import SongInfo from './SongInfo';
import Payment from './Payment';
import Marketing from './Marketing';
import Accounting from './Accounting';
import Legal from './Legal';
import ReviewContract from './ReviewContract';

const stepsComponent: Record<
  number,
  {
    name: string;
    alternateName?: string;
    component: ReactNode;
    lastSubstep: number;
  }
> = {
  1: {
    name: 'The Basics',
    component: <TheBasics />,
    lastSubstep: 5,
  },
  2: {
    name: 'Song Information',
    alternateName: 'Song Info',
    component: <SongInfo />,
    lastSubstep: 12,
  },
  3: {
    name: 'Payment',
    component: <Payment />,
    lastSubstep: 11,
  },
  4: {
    name: 'Marketing',
    component: <Marketing />,
    lastSubstep: 10,
  },
  5: {
    name: 'Accounting',
    component: <Accounting />,
    lastSubstep: 15,
  },
  6: {
    name: 'Legal',
    component: <Legal />,
    lastSubstep: 12,
  },
  7: {
    name: 'Review Contract',
    component: <ReviewContract />,
    lastSubstep: 1,
  },
};

const ArtistSteps: React.FC = () => {
  const history = useHistory();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onPrev = () => {
    if (onboardedUser.step === 1 && +onboardedUser.subStep === 1) {
      history.push('/get-started');
    } else {
      const isInvalidPrevSubstep =
        Number(onboardedUser.subStep) === 1 &&
        Number(onboardedUser.prevSubStep) === 0;

      if (
        onboardedUser.hasAccountCreated &&
        ((onboardedUser.step === 6 && onboardedUser.subStep === 1) ||
          isInvalidPrevSubstep)
      ) {
        setOnboardedUser({
          ...onboardedUser,
          step: 5,
          subStep: 14,
          hasAccountCreated: true,
        });
        return;
      }

      const calculatedSubstep = Number(onboardedUser.prevSubStep)
        ? onboardedUser.prevSubStep
        : +onboardedUser.subStep - 1;

      const incomingSubstep = isInvalidPrevSubstep
        ? stepsComponent[(Number(onboardedUser.step) - 1) as number].lastSubstep
        : calculatedSubstep;

      const incomingStep =
        onboardedUser.subStep === 1
          ? +onboardedUser.step - 1
          : +onboardedUser.step;

      setOnboardedUser({
        ...onboardedUser,
        step: incomingStep,
        subStep: incomingSubstep,
        prevSubStep: 0,
      });
      window.scrollTo(0, 0);
    }
  };

  return (
    <Box p={{ base: '30px', md: '40px' }} color="base-primary-green">
      <Flex alignItems="center" justifyContent="center" pos="relative">
        <Text
          as="span"
          display="block"
          maxW="max-content"
          alignSelf="center"
          color="base-gray-2"
          fontWeight="500"
          fontSize={{ base: '12px', md: '14px' }}
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          {onboardedUser.step < 7 ? `Step ${onboardedUser.step}: ` : ''}
          {stepsComponent[onboardedUser.step as number]?.name}
        </Text>
        <Box
          position="absolute"
          left="-8px"
          mb="2px"
          color="base-primary-green"
          onClick={onPrev}
        >
          <FiChevronLeft fontSize="20px" cursor="pointer" />
        </Box>
      </Flex>
      <DottedBreadCrumb steps={stepsComponent} mt="24px" />
      {React.cloneElement(
        (stepsComponent[onboardedUser.step as number]
          ?.component as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >) || <Box />
      )}
    </Box>
  );
};

export default ArtistSteps;
