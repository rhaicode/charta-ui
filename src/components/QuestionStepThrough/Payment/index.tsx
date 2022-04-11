import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { onboardedUserAtomPersist } from '../../../atoms';
import PaymentSummary from './PaymentSummary';
import MakePayment from './MakePayment';

const stepsComponent: Record<
  number,
  {
    name: string;
    component: ReactNode;
  }
> = {
  1: {
    name: 'Payment Summary',
    component: <PaymentSummary />,
  },
  2: {
    name: 'Make Payment',
    component: <MakePayment />,
  },
};

const MainPayment: React.FC = () => {
  const history = useHistory();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNext = () => {
    setOnboardedUser({
      ...onboardedUser,
      paymentStep: onboardedUser.paymentStep + 1,
    });
    window.scrollTo(0, 0);
  };

  const onPrev = () => {
    if (onboardedUser.paymentStep === 1) {
      setOnboardedUser({
        ...onboardedUser,
        reviewingStep: 6,
        isReviewing: true,
        isPaying: false,
        paymentStep: 0,
        step: 0,
        subStep: 0,
      });
      history.push('/review');
    } else {
      setOnboardedUser({
        ...onboardedUser,
        paymentStep: onboardedUser.paymentStep - 1,
      });
      window.scrollTo(0, 0);
    }
  };

  return (
    <Box p={{ base: '30px', md: '40px' }} color="base-primary-green">
      <Flex alignItems="center" justifyContent="center" pos="relative">
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
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        mx="auto"
        maxW="450px"
      >
        {React.cloneElement(
          (stepsComponent[onboardedUser.paymentStep as number]
            ?.component as ReactElement<
            any,
            string | JSXElementConstructor<any>
          >) || <Box />,
          { onNext }
        )}
      </Flex>
    </Box>
  );
};

export default MainPayment;
