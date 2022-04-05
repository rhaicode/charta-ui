import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const ControlledRates: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="600"
      mr="auto"
    >
      Controlled Rates
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      In order to keep their costs down, labels will tell the artist that they
      will only pay a fraction of the statutory minimum rate, usually 75%, for
      mechanical royalties on controlled compositions. This is the
      &quot;controlled rate.&quot;
    </Text>
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
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Continue
    </ChartaButton>
  </>
);

export default ControlledRates;
