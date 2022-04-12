import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { HiPencil } from 'react-icons/hi';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const Payment: React.FC<{ onNext?: () => void }> = ({ onNext }) => (
  <Box mt="40px">
    <Box>
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          Will Dominik be paying a cash fee to you for your work on
          &quot;Permission Slip&quot;?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="nameOfSong"
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
          How much?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        value="$5,000.00"
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
          Will you be paid a percentage of any profits or royalties that you
          make from &quot;Permission Slip&quot;?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="professionalName"
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
          How much?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="loanOutCompany"
        type="text"
        variant="flushed"
        value="25%"
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
          Does your record deal have controlled composition clauses?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="loanOutCompanyDetails"
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
          Do you want Kirk to be subject to the controlled composition clauses?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="producerName"
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

export default Payment;
