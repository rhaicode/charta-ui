import React from 'react';
import { Text, Input, FormControl, FormLabel } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const ProducerInfo: React.FC<{ onNext?: () => void }> = () => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 2,
      subStep: 1,
      prevSubStep: 5,
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
        What&apos;s the artist&apos;s name?
      </Text>

      <FormControl maxW="345px">
        <Input
          id="producerFirstName"
          type="text"
          variant="flushed"
          placeholder="First name"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
          mt="0.5rem"
        />
      </FormControl>
      <FormControl maxW="345px">
        <FormLabel>
          <Text
            as="p"
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="28px"
            fontWeight="500"
            mt="40px"
            mr="auto"
          >
            What&apos;s the artist&apos;s email address?
          </Text>
        </FormLabel>
        <Input
          id="producerEmailAddress"
          type="text"
          variant="flushed"
          placeholder="Email address"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
        />
      </FormControl>
      <ChartaContinueButton
        px="4rem"
        py="1rem"
        mt={{ md: '40px' }}
        mb={{ base: '40px', md: '0px' }}
        onClick={onNextStep}
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        w={{ base: '83vw', md: 'auto' }}
        mx="auto"
      >
        Continue
      </ChartaContinueButton>
    </>
  );
};

export default ProducerInfo;
