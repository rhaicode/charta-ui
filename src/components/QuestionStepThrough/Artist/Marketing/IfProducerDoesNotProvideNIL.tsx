import React from 'react';
import { Box, FormControl, Input, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const IfProducerDoesNotProvideNIL: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
      mr="auto"
    >
      If [producer first name] doesn&apos;t provide NIL Assets, then [you] will
      have to create marketing materials using images and bios that [you] find
      elsewhere.
    </Text>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
      mr="auto"
      mt="2rem"
    >
      If you send [producer first name] marketing materials that don&apos;t
      include pre-approved NIL Assets, how many days will [producer first name]
      have to approve those marketing materials?
    </Text>
    <FormControl maxW="345px">
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        placeholder="Number of days"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        mt="30px"
      />
    </FormControl>
    <Box h="8rem" display={{ md: 'none' }} />
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

export default IfProducerDoesNotProvideNIL;
