import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import ChartaButton from '../common/ChartaButton';

const GetStartedForm: React.FC = () => {
  const history = useHistory();
  return (
    <Box
      p={{ base: '40px', md: '60px' }}
      backgroundColor="rgba(255,255,255,0.1)"
      borderRadius="15px"
      maxW="466px"
      mx="auto"
      mt={{ base: '100px', md: '180px' }}
    >
      <Text
        textAlign="center"
        as="span"
        fontSize={{ base: 'xl', md: '2xl' }}
        fontWeight="500"
        display="block"
        letterSpacing="0.01em"
      >
        Fill form to get started
      </Text>
      <form>
        <FormControl mt="40px">
          <FormLabel fontWeight="400" fontSize="14px">
            Email address
          </FormLabel>
          <Input
            id="emailAddress"
            type="text"
            variant="flushed"
            placeholder="Email address"
            _placeholder={{ color: 'base-gray-3' }}
            borderBottom="1px solid"
            borderBottomColor="base-gray-3"
            mt="-2rem"
          />
        </FormControl>
        <FormControl mt="30px">
          <Text
            as="span"
            fontWeight="400"
            fontSize="14px"
            mr="auto"
            display="block"
            mb="10px"
          >
            I am a
          </Text>
          <Flex
            color="white"
            justifyContent="space-between"
            alignItems="center"
          >
            <Checkbox>Artist</Checkbox>
            <Checkbox>Producer</Checkbox>
            <Checkbox>Others</Checkbox>
          </Flex>
        </FormControl>
        <FormControl mt="30px">
          <FormLabel fontWeight="400" fontSize="14px">
            Enter your name
          </FormLabel>
          <Input
            id="name"
            type="text"
            variant="flushed"
            placeholder="Your name    "
            _placeholder={{ color: 'base-gray-3' }}
            borderBottom="1px solid"
            borderBottomColor="base-gray-3"
            mt="-2rem"
          />
        </FormControl>
        <ChartaButton
          w="full"
          mt="30px"
          onClick={() => {
            history.push('/get-started');
          }}
        >
          Submit
        </ChartaButton>
      </form>
    </Box>
  );
};

export default GetStartedForm;
