import React from 'react';
import { useAtom } from 'jotai';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const RoyaltyHoldback: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);
  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 7,
      subStep: 1,
      prevSubStep: 12,
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
        Royalty Holdback
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="20px">
        If the producer might have to indemnify the artist, it doesn&apos;t make
        sense that the artist has to continue paying royalties to the producer.
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="20px">
        In this case, the artist will hold those royalties back until the
        infringement claim is resolved.
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="20px">
        If a producer puts up a bond in the amount that it may have to reimburse
        the artist, which includes reasonable attorneys&apos; fees and any
        damages, then the artist will be covered, and the artist can resume
        paying the producer royalties.
      </Text>

      <Box h="8rem" display={{ md: 'none' }} />
      <ChartaContinueButton
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
      </ChartaContinueButton>
    </>
  );
};

export default RoyaltyHoldback;
