import React from 'react';
import { Text, Input, FormControl, FormLabel } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const IfYouNeedToFileLawsuit: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <FormControl maxW="345px">
      <FormLabel>
        <Text
          as="p"
          fontSize={{ base: 'lg', md: 'xl' }}
          lineHeight="28px"
          fontWeight="500"
          mr="auto"
        >
          If you need to file a lawsuit against the other party, where do you
          want to do that?
        </Text>
      </FormLabel>
      <Input
        id="proName"
        type="text"
        variant="flushed"
        placeholder="City and State"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
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
);

export default IfYouNeedToFileLawsuit;
