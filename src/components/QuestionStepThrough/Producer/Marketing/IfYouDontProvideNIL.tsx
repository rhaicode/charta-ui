import React from 'react';
import { Box, FormControl, Input, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const IfYouDontProvideNIL: React.FC<{
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
      If [you don&apos;t] provide NIL Assets, then Kirk will have to create
      marketing materials using images and bios that [they] find elsewhere.
    </Text>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="500"
      mr="auto"
      mt="2rem"
    >
      If Kirk sends [you] marketing materials that don&apos;t include
      pre-approved NIL Assets, how many days will [you] have to approve those
      marketing materials?
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

export default IfYouDontProvideNIL;
