import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { HiPencil } from 'react-icons/hi';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const Legal: React.FC = () => (
  <Box mt="40px">
    <Box>
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          If you need to file a lawsuit against the other party, where do you
          want to do that?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="nameOfSong"
        type="text"
        variant="flushed"
        value="Los Angeles, California"
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
          If you win a direct claim, do you want the other party to reimburse
          you for your prevailing party fees?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        value="Music Video, Lyric Video, Teaser Videos"
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
          If you&apos;re sued because the other party used a sample without
          permission, do you want them to indemnify you?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
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
          If the other party is sued because you used a sample without
          permission, will you indemnify them?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
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
    <Text as="p" mt="30px" fontStyle="italic">
      If all terms look good to you, it&apos;s time to send over the contract to
      Kirk.
    </Text>
    <Flex mt="30px" justifyContent="center">
      <ChartaContinueButton px="2rem" onClick={() => {}}>
        Pay and send
      </ChartaContinueButton>
    </Flex>
  </Box>
);

export default Legal;
