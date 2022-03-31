import React from 'react';
import { Text, Input, FormControl, FormLabel } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const ProducerInfo: React.FC<{ onNext?: () => void }> = ({
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
      What is [your producer&apos;s] name?
    </Text>

    <FormControl>
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
    <FormControl>
      <FormLabel>
        <Text
          as="p"
          fontSize={{ base: 'lg', md: 'xl' }}
          lineHeight="28px"
          fontWeight="500"
          mt="40px"
          mr="auto"
        >
          What is [your producer&apos;s] email address?
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
    <ChartaButton
      px="4rem"
      py="1rem"
      mt={{ md: '40px' }}
      mb={{ base: '40px', md: '0px' }}
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
    >
      Continue
    </ChartaButton>
  </>
);

export default ProducerInfo;
