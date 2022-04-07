import { Box, Flex, Text, Button, Input } from '@chakra-ui/react';
import React from 'react';
import { HiPencil } from 'react-icons/hi';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const Marketing: React.FC<{ onNext?: () => void }> = ({ onNext }) => (
  <Box mt="40px">
    <Box>
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          Will Kirk be credited as a producer of &quot;Permission Slip&quot;?
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
          How would you like to be credited?
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="firstName"
        type="text"
        variant="flushed"
        value="Produced by KJ"
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
          Do you want Kirk to provide you with pre-approved photos, likenesses,
          and bios (NIL Assets) to use when marketing &quot;Permission
          Slip&quot;?
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
    <Flex
      mt="30px"
      h="30px"
      backgroundColor="base-gray-6"
      minW="calc(100% + 80px)"
      ml="-40px"
      px="40px"
      alignItems="center"
      color="black"
      fontWeight="500"
    >
      Promotional Videos
    </Flex>
    <Box mt="30px">
      <Flex justifyContent="space-between" w="full" alignItems="center">
        <Text as="p" color="base-gray-2" fontSize="14px">
          Select all the types of promo videos that can be created for
          &quot;Permission Slip&quot;:
        </Text>
        <Button variant="ghost" color="base-gray-3" size="sm">
          <HiPencil fontSize="18px" />
        </Button>
      </Flex>
      <Input
        id="producerName"
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
    <Flex mt="30px" justifyContent="center">
      <ChartaContinueButton px="2rem" onClick={onNext}>
        Review next section
      </ChartaContinueButton>
    </Flex>
  </Box>
);

export default Marketing;
