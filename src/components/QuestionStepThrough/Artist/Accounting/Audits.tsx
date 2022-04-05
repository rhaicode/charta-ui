import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import ChartaButton from '../../../common/ChartaButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const Audits: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);
  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 6,
      subStep: 1,
      prevSubStep: 13,
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="600"
        mr="auto"
      >
        Audits
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="30px">
        A producer can audit an artist once a year and only looking back at 3
        years&apos; worth of statements. Each statement can only be audited
        once.
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="30px">
        Sales reports and other statements prepared by distributors or labels
        cannot be audited. A producer will have 12 months to point out any
        mistakes in those sales reports or other third-party statements to an
        artist, though.
      </Text>
      <Box h="6rem" display={{ md: 'none' }} />
      <ChartaButton
        px="4rem"
        py="1rem"
        mt={{ md: '40px' }}
        mb={{ base: '40px', md: '0px' }}
        onClick={() => {
          onNextStep();
        }}
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        w={{ base: '80vw', md: 'auto' }}
        mx="auto"
      >
        Continue
      </ChartaButton>
    </>
  );
};

export default Audits;
