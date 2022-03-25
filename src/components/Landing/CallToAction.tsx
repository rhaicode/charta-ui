import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import ChartaButton from '../common/ChartaButton';

const CallToAction: React.FC = () => (
  <Flex
    direction="column"
    justifyContent="center"
    alignItems="center"
    backgroundColor="base-light-green-2"
    pt="82px"
    py="78px"
    borderRadius="15px"
    mt="150px"
    mb="120px"
  >
    <Text as="span" fontWeight="500" fontSize="40px" lineHeight="47px">
      Move at the speed of argument
    </Text>
    <ChartaButton px="3rem" mt="2.25rem">
      Get started
    </ChartaButton>
  </Flex>
);

export default CallToAction;
