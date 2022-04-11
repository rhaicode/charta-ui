import { Box, Container, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React from 'react';

import { onboardedUserAtomPersist } from '../atoms';
import Navbar from '../components/common/Navbar';
import Payment from '../components/QuestionStepThrough/Payment';

const PaymentPage: React.FC = () => {
  const [onboardedUser] = useAtom(onboardedUserAtomPersist);

  return (
    <Box
      minH="100vh"
      position="relative"
      backgroundColor="#E5E5E5"
      pb={{ md: '65px' }}
    >
      <Flex backgroundColor="base-secondary-green">
        <Container maxW="container.xl" overflow="hidden">
          <Navbar noHamburger />
        </Container>
      </Flex>
      <Box
        backgroundColor="white"
        maxW={{ base: 'full', md: '610px', lg: '710px' }}
        minH={{ base: '100vh', md: '760px', lg: '860px' }}
        mt={{ md: '35px' }}
        mx="auto"
      >
        {onboardedUser.type === 'ARTIST' && <Payment />}
      </Box>
    </Box>
  );
};

export default PaymentPage;
