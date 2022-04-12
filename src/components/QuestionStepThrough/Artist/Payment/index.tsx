import { Box, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { onboardedUserAtomPersist } from '../../../../atoms';
import ControlledCompositionClauses from './ControlledCompositionClauses';
import ControlledRates from './ControlledRates';
import DoesProducerSubjectControlledCompositionClauses from './DoesProducerSubjectControlledCompositionClauses';
import DoesRecordDealCompositionClauses from './DoesRecordDealCompositionClauses';
import MechanicalRoyalties from './MechanicalRoyalties';
import MechanicalRoyaltyCaps from './MechanicalRoyaltyCaps';
import PaymentDescription from './PaymentDescription';
import TwoWaysProducerCanBePaid from './TwoWaysProducerCanBePaid';
import WhyShouldDoContract from './WhyShouldDoContract';
import WillProducerBePaidPercentage from './WillProducerBePaidPercentage';
import WillYouBePayingCashFee from './WillYouBePayingCashFee';

const subSteps: Record<string, ReactNode> = {
  1: <PaymentDescription />,
  2: <WhyShouldDoContract />,
  3: <TwoWaysProducerCanBePaid />,
  4: <WillYouBePayingCashFee />,
  5: <WillProducerBePaidPercentage />,
  6: <ControlledCompositionClauses />,
  7: <MechanicalRoyalties />,
  8: <ControlledRates />,
  9: <MechanicalRoyaltyCaps />,
  10: <DoesRecordDealCompositionClauses />,
  11: <DoesProducerSubjectControlledCompositionClauses />,
};

const Payment: React.FC = () => {
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

export default Payment;
