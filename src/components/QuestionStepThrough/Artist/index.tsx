import { Box, Flex, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { onboardedUserAtomPersist } from '../../../atoms';

const stepsComponent: Record<number, any> = {
  1: {
    name: 'The Basics',
    component: <Box />,
  },
  2: {
    name: 'Song Information',
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
  const [onboardedUser] = useAtom(onboardedUserAtomPersist);

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
            if (onboardedUser.step === 1) {
              history.push('/get-started');
            } else {
              history.push(`/step-through/${onboardedUser.step - 1}`);
            }
          }}
        >
          <FiChevronLeft fontSize="20px" cursor="pointer" />
        </Box>
      </Flex>
    </Box>
  );
};

export default ArtistSteps;
