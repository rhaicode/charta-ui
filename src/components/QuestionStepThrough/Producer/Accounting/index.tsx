import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import AccountingDescription from './AccountingDescription';
import AdvancesRoyalties from './AdvancesRoyalties';
import AfterAllTheRecordingCosts from './AfterAllTheRecordingCosts';
import Audits from './Audits';
import CashPayment from './CashPayment';
import CashPaymentCanBeOneFee from './CashPaymentCanBeOneFee';
import Payments from './Payments';
import PaymentsAndStatements from './PaymentsAndStatements';
import PostRecoupment from './PostRecoupment';
import Statements from './Statements';
import WhatPercentageOfCashPayment from './WhatPercentageOfCashPayment';
import WhenDoesProducerPaidProfits from './WhenDoesProducerPaidProfits';
import WhenDoesProducerPaidRoyalties from './WhenDoesProducerPaidRoyalties';

const subSteps: Record<string, ReactNode> = {
  1: <AccountingDescription />,
  2: <CashPayment />,
  3: <AdvancesRoyalties />,
  4: <CashPaymentCanBeOneFee />,
  5: <WhatPercentageOfCashPayment />,
  6: <WhenDoesProducerPaidProfits />,
  7: <WhenDoesProducerPaidRoyalties />,
  8: <PostRecoupment />,
  9: <AfterAllTheRecordingCosts />,
  10: <PaymentsAndStatements />,
  11: <Payments />,
  12: <Statements />,
  13: <Audits />,
};

const Accounting: React.FC = () => {
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

export default Accounting;
