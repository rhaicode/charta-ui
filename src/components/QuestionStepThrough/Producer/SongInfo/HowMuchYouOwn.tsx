import React from 'react';
import { FormControl, Input, Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const HowMuchYouOwn: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        How much of the composition will you own?
      </Text>
      <FormControl maxW="345px" mt="30px">
        <Input
          id="proName"
          type="text"
          variant="flushed"
          placeholder="Enter percentage %"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
        />
      </FormControl>
      <ChartaFormButton mt="20px" isSelected={isOpen} onClick={onOpen}>
        None. I want to buy them out.
      </ChartaFormButton>
      <ChartaContinueButton
        px="4rem"
        py="1rem"
        mt={{ md: '30px' }}
        mb={{ base: '40px', md: '0px' }}
        onClick={() => {
          onNext();
        }}
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

export default HowMuchYouOwn;
