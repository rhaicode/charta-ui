import React from 'react';
import { Text, Input, FormControl } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const HowManySongsSampled: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
      mr="auto"
    >
      How many songs were sampled?
    </Text>
    <FormControl maxW="345px">
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        placeholder="Number of songs"
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

export default HowManySongsSampled;
