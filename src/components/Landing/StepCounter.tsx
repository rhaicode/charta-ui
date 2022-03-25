import { Flex, Text } from '@chakra-ui/react';
import React from 'react';

const StepCounter: React.FC<{ stepNumber: number }> = ({ stepNumber }) => (
  <Flex
    h="45px"
    w="45px"
    border="1px solid"
    rounded="full"
    borderColor="base-peach"
    alignItems="center"
    justifyContent="center"
  >
    <Flex
      h="35px"
      w="35px"
      rounded="full"
      backgroundColor="base-peach"
      alignItems="center"
      justifyContent="center"
    >
      <Text as="span" color="#1D4237" fontWeight="600">
        {stepNumber}
      </Text>
    </Flex>
  </Flex>
);

export default StepCounter;
