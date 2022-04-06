import React from 'react';
import { Text, Input, FormControl } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const WhatsTheNameOfTheSongSampled: React.FC = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);
  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 3,
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
        fontWeight="500"
        mr="auto"
      >
        What&apos;s the name of the song you&apos;ve sampled?
      </Text>
      <FormControl maxW="345px">
        <Input
          id="firstName"
          type="text"
          variant="flushed"
          placeholder="Name of song"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
          mt="0.5rem"
        />
      </FormControl>
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

export default WhatsTheNameOfTheSongSampled;
