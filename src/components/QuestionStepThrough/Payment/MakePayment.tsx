import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  defaultOnboardedUser,
  fromPaymentScreenAtom,
  onboardedUserAtomPersist,
} from '../../../atoms';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const MakePaymentComponent: React.FC<{
  loading: boolean;
  submit: () => void;
}> = ({ loading, submit }) => (
  <>
    <Box mt="14px" textAlign="center" mb="60px">
      <Text as="span" fontWeight="600" fontSize="2xl">
        Make payment
      </Text>
      <Text as="p" fontSize="sm" mt="18px" maxW="40ch" lineHeight="24px">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Text>
    </Box>
    <FormControl mb="40px" isDisabled={loading}>
      <FormLabel fontSize="sm" fontWeight="400" color="base-gray-2">
        Card number
      </FormLabel>
      <Input
        id="lastName"
        type="text"
        variant="flushed"
        value="0000 0000 0000 0000"
        _placeholder={{ color: 'base-gray-5' }}
        borderBottom="1px solid"
        borderBottomColor="base-gray-5"
        mt="-1.5rem"
      />
    </FormControl>
    <FormControl mb="40px" isDisabled={loading}>
      <FormLabel fontSize="sm" fontWeight="400" color="base-gray-2">
        Cardholder name
      </FormLabel>
      <Input
        type="text"
        variant="flushed"
        borderBottom="1px solid"
        borderBottomColor="base-gray-5"
        mt="-1.5rem"
      />
    </FormControl>
    <Flex mb="30px" w="full">
      <FormControl mr="20px" isDisabled={loading}>
        <FormLabel fontSize="sm" fontWeight="400" color="base-gray-2">
          Exp date
        </FormLabel>
        <Input
          type="text"
          variant="flushed"
          borderBottom="1px solid"
          borderBottomColor="base-gray-5"
          mt="-1.5rem"
        />
      </FormControl>
      <FormControl isDisabled={loading}>
        <FormLabel fontSize="sm" fontWeight="400" color="base-gray-2">
          CVV
        </FormLabel>
        <Input
          type="text"
          variant="flushed"
          borderBottom="1px solid"
          borderBottomColor="base-gray-5"
          mt="-1.5rem"
        />
      </FormControl>
    </Flex>
    <FormControl mb="40px" isDisabled={loading}>
      <Checkbox size="lg" borderColor="base-gray-3">
        <Text
          as="span"
          color="base-gray-3"
          fontSize="16px"
          lineHeight="20px"
          fontWeight="400"
        >
          Save card for next time
        </Text>
      </Checkbox>
    </FormControl>
    <Box h="4rem" display={{ md: 'none' }} />
    <ChartaContinueButton
      px="8rem"
      onClick={submit}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '83vw', md: 'auto' }}
      mx="auto"
      isDisabled={loading}
      isLoading={loading}
      loadingText="Processing..."
    >
      Continue
    </ChartaContinueButton>
  </>
);

const MakePayment: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const [, setFromPaymentScreen] = useAtom(fromPaymentScreenAtom);

  const [, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const submit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setOnboardedUser({ ...defaultOnboardedUser, isContractSent: true });
      setFromPaymentScreen(true);
      history.push('/contract-sent');
      window.scrollTo(0, 0);
    }, 3000);
  };

  return <MakePaymentComponent loading={loading} submit={submit} />;
};

export default MakePayment;
