import React from 'react';
import {
  Text,
  Input,
  FormControl,
  FormLabel,
  Checkbox,
} from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const FullName: React.FC<{ onNext?: () => void }> = ({ onNext = () => {} }) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
      mr="auto"
    >
      What&apos;s your full name?
    </Text>

    <FormControl maxW="345px">
      <Input
        id="firstName"
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
      <Input
        id="lastName"
        type="text"
        variant="flushed"
        placeholder="Last name"
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
          What&apos;s your professional name?
        </Text>
      </FormLabel>
      <Input
        id="proName"
        type="text"
        variant="flushed"
        placeholder="Professional name"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
      />
    </FormControl>
    <FormControl maxW="345px">
      <Checkbox size="lg" mt="30px" borderColor="base-gray-3">
        <Text
          as="span"
          color="base-gray-3"
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400"
        >
          Same as my legal name
        </Text>
      </Checkbox>
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
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default FullName;
