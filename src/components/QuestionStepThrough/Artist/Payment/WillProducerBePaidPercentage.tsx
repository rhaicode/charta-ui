import React from 'react';
import { FormControl, Input, Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const WillProducerBePaidPercentage: React.FC<{
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
        Will [producer first name] be paid a percentage of any profits or
        royalties that [you make] from [song name]?
      </Text>
      <ChartaFormButton mt="30px" onClick={onOpen} isSelected={isOpen}>
        Yes
      </ChartaFormButton>
      <ChartaFormButton
        mt="20px"
        onClick={() => {
          onNext();
        }}
      >
        No
      </ChartaFormButton>
      {isOpen && (
        <>
          <Text
            as="p"
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="28px"
            fontWeight="500"
            mr="auto"
            mt="40px"
          >
            How much?
          </Text>
          <FormControl maxW="345px">
            <Input
              id="lastName"
              type="text"
              variant="flushed"
              placeholder="Enter amount"
              _placeholder={{ color: 'base-gray-3' }}
              borderBottom="1px solid"
              borderBottomColor="base-gray-3"
              mt="20px"
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
      )}
    </>
  );
};

export default WillProducerBePaidPercentage;
