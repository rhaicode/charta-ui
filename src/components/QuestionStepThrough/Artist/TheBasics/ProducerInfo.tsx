import React from 'react';
import {
  Text,
  Input,
  FormControl,
  FormLabel,
  useDisclosure,
  Button,
  Flex,
} from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import ResponsiveModal from '../../../common/ResponsiveModal';

const ProducerInfo: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        What is [your producer&apos;s] name?
      </Text>

      <FormControl maxW="345px">
        <Input
          id="producerFirstName"
          type="text"
          variant="flushed"
          placeholder="First name"
          _placeholder={{ color: 'base-gray-3' }}
          borderBottom="1px solid"
          borderBottomColor="base-gray-3"
          mt="0.5rem"
        />
      </FormControl>
      <FormControl maxW="345px">
        <FormLabel>
          <Text
            as="p"
            fontSize={{ base: 'lg', md: 'xl' }}
            lineHeight="28px"
            fontWeight="500"
            mt="40px"
            mr="auto"
          >
            What is [your producer&apos;s] email address?
          </Text>
        </FormLabel>
        <Input
          id="producerEmailAddress"
          type="text"
          variant="flushed"
          placeholder="Email address"
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
        onClick={onOpen}
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        w={{ base: '83vw', md: 'auto' }}
        mx="auto"
      >
        Continue
      </ChartaContinueButton>
      <ResponsiveModal
        minW={{ base: '100vw', md: '466px' }}
        minH={{ base: '100vh', md: ' 360px' }}
        padding={{ base: '20px', md: '30px' }}
        isOpen={isOpen}
        onClose={onClose}
        title="Are you sure you want to leave?"
        body={
          <Text as="p" lineHeight="24px" mt="0px">
            All progress you have made will be lost if you do not create an
            account.
          </Text>
        }
        footer={
          <Flex direction="column" alignItems="center" w="full">
            <ChartaContinueButton
              w={{ base: 'full', md: '224px' }}
              onClick={() => {
                onNext();
              }}
            >
              Create an account
            </ChartaContinueButton>
            <Button
              mt="20px"
              w={{ base: 'full', md: '224px' }}
              onClick={() => {
                onClose();
              }}
              border="1px solid"
              borderColor="base-primary-green"
            >
              Exit
            </Button>
          </Flex>
        }
      />
    </>
  );
};

export default ProducerInfo;
