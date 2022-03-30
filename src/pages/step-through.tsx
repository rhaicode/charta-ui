import { Box, Container, Flex } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React from 'react';

import { onboardedUserAtomPersist } from '../atoms';
import Navbar from '../components/common/Navbar';
import ArtistSteps from '../components/QuestionStepThrough/Artist/index';

const StepThrough: React.FC = () => {
  const [onboardedUser] = useAtom(onboardedUserAtomPersist);

  return (
    <Box minH="100vh" position="relative" backgroundColor="#E5E5E5" pb="65px">
      <Flex backgroundColor="base-secondary-green">
        <Container maxW="container.xl" overflow="hidden">
          <Navbar />
        </Container>
      </Flex>
      <Box
        backgroundColor="white"
        maxW={{ base: 'full', md: '610px', lg: '710px' }}
        minH={{ base: '100vh', md: '760px', lg: '860px' }}
        mt={{ md: '35px' }}
        mx="auto"
      >
        {onboardedUser.type === 'ARTIST' && <ArtistSteps />}
      </Box>
    </Box>
  );
};

export default StepThrough;
