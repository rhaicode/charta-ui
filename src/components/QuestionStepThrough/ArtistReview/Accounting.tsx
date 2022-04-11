import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { HiPencil } from 'react-icons/hi';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const Accounting: React.FC<{ onNext?: () => void }> = ({ onNext }) => (
  <Box mt="40px">
    <Box>
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          What percentage of the cash payment will be considered an advance
          against future profits or royalties?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="nameOfSong"
        type="text"
        variant="flushed"
        value="50%"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        isDisabled
        mt="-0.65rem"
      />
    </Box>
    <Box mt="30px">
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          After all the recording costs of &quot;Permission Slip&quot; are
          recouped, I want to pay Kirk royalties:
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        value="Retrospectively"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        isDisabled
        mt="-0.65rem"
      />
    </Box>
    <Box h="4rem" display={{ md: 'none' }} />
    <Flex mt="30px" justifyContent="center">
      <ChartaContinueButton
        px="2rem"
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        mb={{ base: '40px', md: '0px' }}
        w={{ base: '83vw', md: 'auto' }}
        mx="auto"
        onClick={onNext}
      >
        Review next section
      </ChartaContinueButton>
    </Flex>
  </Box>
);

export default Accounting;
