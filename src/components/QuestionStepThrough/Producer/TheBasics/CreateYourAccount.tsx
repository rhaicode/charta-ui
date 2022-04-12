import React from 'react';
import {
  Text,
  Input,
  FormControl,
  Checkbox,
  Box,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { useAtom } from 'jotai';

import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import PasswordField from '../../../common/forms/PasswordField';
import ResponsiveModal from '../../../common/ResponsiveModal';
import { onboardedUserAtomPersist } from '../../../../atoms';

const CreateYourAccount: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 2,
      subStep: 1,
      prevSubStep: 7,
    });
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        Great! Let&apos;s create your account.
      </Text>
      <Text as="p" mr="auto" mt="12px" mb="30px">
        You&apos;ll receive an email confirmation.
      </Text>
      <FormControl maxW="345px">
        <Input
          id="emailAddress"
          type="text"
          variant="flushed"
          placeholder="Email address"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
        />
      </FormControl>
      <FormControl maxW="345px">
        <Input
          id="address"
          type="text"
          variant="flushed"
          placeholder="Enter address"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
          mt="30px"
        />
      </FormControl>
      <FormControl maxW="345px">
        <Input
          id="address"
          type="text"
          variant="flushed"
          placeholder="Choose city"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
          mt="30px"
        />
      </FormControl>
      <FormControl maxW="345px">
        <Input
          id="address"
          type="text"
          variant="flushed"
          placeholder="Choose state"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
          mt="30px"
        />
      </FormControl>
      <FormControl>
        <Checkbox size="lg" mt="16px" borderColor="base-gray-3">
          <Text
            as="span"
            color="base-gray-3"
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
          >
            I live outside of the United States
          </Text>
        </Checkbox>
      </FormControl>
      <PasswordField
        mt="30px"
        placeholder="Password"
        inputVariant="flushed"
        hideLabel
        placeholderStyles={{ color: 'base-gray-3' }}
        borderBottomColor="base-gray-3"
      />
      <PasswordField
        mt="30px"
        placeholder="Re-enter password"
        inputVariant="flushed"
        hideLabel
        placeholderStyles={{ color: 'base-gray-3' }}
        borderBottomColor="base-gray-3"
      />
      <FormControl>
        <Checkbox size="lg" mt="30px" borderColor="base-gray-3">
          <Text
            as="span"
            color="base-gray-3"
            fontSize="16px"
            lineHeight="20px"
            fontWeight="400"
          >
            I am above the age of 18.
          </Text>
        </Checkbox>
      </FormControl>
      <Box h="6rem" display={{ base: 'block', md: 'none' }} />
      <ChartaContinueButton
        px="4rem"
        py="1rem"
        mt={{ md: '40px' }}
        mb={{ base: '40px', md: '0px' }}
        onClick={onOpen}
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        w={{ base: '83vw', md: 'auto' }}
        ml={{ base: 'auto', md: '0px' }}
      >
        Create Account
      </ChartaContinueButton>
      <ResponsiveModal
        minW={{ base: '100vw', md: '466px' }}
        minH={{ base: '100vh', md: ' 360px' }}
        padding={{ base: '20px', md: '30px' }}
        isOpen={isOpen}
        onClose={onClose}
        title="Legal Disclaimer"
        body={
          <>
            <Text as="p" lineHeight="24px" mt="0px">
              Hey! Before we go any further, we just want to let you know that
              this contract will be governed by United States law. You and your
              collaborator will need to pick a US state or territory where you
              will file any lawsuits and litigate any disputes.
            </Text>
            <Text as="p" lineHeight="24px" mt="2rem">
              If that&apos;s OK, then let&apos;s keep rolling!
            </Text>
          </>
        }
        footer={
          <Flex direction="column" alignItems="center" w="full">
            <ChartaContinueButton
              w={{ base: 'full', md: '224px' }}
              onClick={() => {
                onNextStep();
              }}
            >
              Continue
            </ChartaContinueButton>
          </Flex>
        }
      />
    </>
  );
};

export default CreateYourAccount;
