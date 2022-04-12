import React from 'react';
import { Text, Input, FormControl } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const TellUsAboutYourLoanoutCompany: React.FC<{
  onNext?: (subStep?: string | number, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
    >
      Tell us about your loan-out company
    </Text>
    <FormControl>
      <Input
        id="nameOfLoanoutCompany"
        type="text"
        variant="flushed"
        placeholder="Name of loan-out company"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        mt="20px"
      />
    </FormControl>
    <FormControl>
      <Input
        id="typeOfLoanoutCompany"
        type="text"
        variant="flushed"
        placeholder="Type of loan-out company"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        mt="10px"
      />
    </FormControl>
    <FormControl>
      <Input
        id="stateOfFormation"
        type="text"
        variant="flushed"
        placeholder="State of formation"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        mt="10px"
      />
    </FormControl>
    <ChartaContinueButton
      px="4rem"
      py="1rem"
      mt={{ md: '40px' }}
      mb={{ base: '40px', md: '0px' }}
      onClick={() => {
        onNext(6);
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

export default TellUsAboutYourLoanoutCompany;
