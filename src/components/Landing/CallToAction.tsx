import { Flex, Text } from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';

import ChartaButton from '../common/ChartaButton';

const CallToAction: React.FC = () => {
  const history = useHistory();

  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="base-light-green-2"
      py={{ base: '24px', md: '56px', lg: '78px' }}
      px={{ base: '25px', md: '0px' }}
      borderRadius="15px"
      mt={{ base: '50px', md: '100px', lg: '150px' }}
    >
      <Text
        as="span"
        fontWeight="500"
        fontSize={{ base: '30px', md: '36px', lg: '40px' }}
        lineHeight="47px"
        textAlign="center"
        maxW={{ base: '14ch', md: 'full' }}
      >
        Move at the speed of agreement
      </Text>

      <ChartaButton
        px="3rem"
        py={{ base: '1.5rem', md: '1.25rem' }}
        mt={{ base: '1rem', md: '2.25rem' }}
        w={{ base: 'full', md: 'auto' }}
        onClick={() => {
          history.push('/signup');
        }}
      >
        Sign up now
      </ChartaButton>
    </Flex>
  );
};

export default CallToAction;
