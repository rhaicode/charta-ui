import { Box, Flex, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { onboardedUserAtomPersist } from '../../../atoms';
import DottedBreadCrumb from '../../common/forms/DottedBreadCrumb';

import TheBasics from './TheBasics';

const stepsComponent: Record<
  number,
  { name: string; alternateName?: string; component: ReactNode }
> = {
  1: {
    name: 'The Basics',
    component: <TheBasics />,
  },
  2: {
    name: 'Song Information',
    alternateName: 'Song Info',
    component: <Box />,
  },
  3: {
    name: 'Payment',
    component: <Box />,
  },
  4: {
    name: 'Marketing',
    component: <Box />,
  },
  5: {
    name: 'Accounting',
    component: <Box />,
  },
  6: {
    name: 'Legal',
    component: <Box />,
  },
};

const ArtistSteps: React.FC = () => {
  const history = useHistory();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

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
          Step {onboardedUser.step}: {stepsComponent[onboardedUser.step].name}
        </Text>
        <Box
          position="absolute"
          left="-8px"
          mb="2px"
          color="base-primary-green"
          onClick={() => {
            if (onboardedUser.step === 1 && +onboardedUser.subStep === 1) {
              history.push('/get-started');
            } else {
              setOnboardedUser({
                ...onboardedUser,
                step: onboardedUser.step,
                subStep:
                  onboardedUser.prevSubStep !== '0'
                    ? onboardedUser.prevSubStep
                    : +onboardedUser.subStep - 1,
                prevSubStep: '0',
              });
            }
          }}
        >
          <FiChevronLeft fontSize="20px" cursor="pointer" />
        </Box>
      </Flex>
      <DottedBreadCrumb steps={stepsComponent} mt="24px" />
      {React.cloneElement(
        stepsComponent[onboardedUser.step].component as ReactElement<
          any,
          string | JSXElementConstructor<any>
        >
      )}
    </Box>
  );
};

export default ArtistSteps;
