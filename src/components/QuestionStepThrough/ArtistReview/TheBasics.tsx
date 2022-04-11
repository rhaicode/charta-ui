import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { HiPencil } from 'react-icons/hi';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const TheBasics: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <Box mt="40px">
    <Box>
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          What&apos;s the name of the song?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="nameOfSong"
        type="text"
        variant="flushed"
        value="Name of song"
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
          What&apos;s your full name?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        value="First name"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        isDisabled
        mt="-0.65rem"
      />
      <Input
        id="lastName"
        type="text"
        variant="flushed"
        value="Last name"
        _placeholder={{ color: 'base-gray-3' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-3"
        isDisabled
        mt="0.25rem"
      />
    </Box>
    <Box mt="30px">
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          What&apos;s your professional name?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="professionalName"
        type="text"
        variant="flushed"
        value="Professional name"
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
          Do you have a loan-out company?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="loanOutCompany"
        type="text"
        variant="flushed"
        value="Yes"
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
          Tell us about your loan-out company?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="loanOutCompanyDetails"
        type="text"
        variant="flushed"
        value="Your loanout company"
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
          What&apos;s your producer&apos;s name?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="producerName"
        type="text"
        variant="flushed"
        value="Producer name"
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
          What&apos;s your producer&apos;s email address?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="producerEmailAddress"
        type="text"
        variant="flushed"
        value="Producer email address"
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

export default TheBasics;
