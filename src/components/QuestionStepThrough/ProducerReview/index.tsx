import { Box, Flex, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { onboardedUserAtomPersist } from '../../../atoms';
import Legal from './Legal';
import Accounting from './Accounting';
import Marketing from './Marketing';
import Payment from './Payment';
import SongInformation from './SongInformation';
import TheBasics from './TheBasics';

const stepsComponent: Record<
  number,
  {
    name: string;
    component: ReactNode;
  }
> = {
  1: {
    name: 'The Basics',
    component: <TheBasics />,
  },
  2: {
    name: 'Song Information',
    component: <SongInformation />,
  },
  3: {
    name: 'Payment',
    component: <Payment />,
  },
  4: {
    name: 'Marketing',
    component: <Marketing />,
  },
  5: {
    name: 'Accounting',
    component: <Accounting />,
  },
  6: {
    name: 'Legal',
    component: <Legal />,
  },
};

const ArtistReview: React.FC = () => {
  const history = useHistory();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNext = () => {
    setOnboardedUser({
      ...onboardedUser,
      reviewingStep: onboardedUser.reviewingStep + 1,
    });
    window.scrollTo(0, 0);
  };

  const onPrev = () => {
    if (onboardedUser.reviewingStep === 1) {
      setOnboardedUser({
        ...onboardedUser,
        prevSubStep: 0,
        step: 7,
        subStep: 1,
        isReviewing: false,
        reviewingStep: 0,
        paymentStep: 0,
      });
      history.push('/step-through');
    } else {
      setOnboardedUser({
        ...onboardedUser,
        reviewingStep: onboardedUser.reviewingStep - 1,
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
          {onboardedUser.reviewingStep < 7
            ? `Step ${onboardedUser.reviewingStep}: `
            : ''}
          {stepsComponent[onboardedUser.reviewingStep as number].name}
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
      {React.cloneElement(
        (stepsComponent[onboardedUser.reviewingStep as number]
          ?.component as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >) || <Box />,
        { onNext }
      )}
    </Box>
  );
};

export default ArtistReview;
