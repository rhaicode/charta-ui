import { Text, Image, useDisclosure, Button } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import ChartaContinueButton from '../common/forms/ChartaContinueButton';

const ContractSent: React.FC = () => {
  const { isOpen, onOpen } = useDisclosure();
  const location = useLocation();

  return (
    <>
      {(!(location.state as any)?.fromPaymentScreen || isOpen) && (
        <>
          <Image
            src="/assets/check-icon.png"
            mt={{ base: '40px', md: '60px' }}
          />
          <Text as="p" fontWeight="600" fontSize="2xl" mt="20px">
            Your contract has been sent to Dominik.
          </Text>
          <Text as="p" textAlign="center" color="base-gray-1" mt="20px">
            They will receive an email to review the contract. You will be
            notified of any changes they want to make. After you both agree on
            all terms, the contract will be finalized.
          </Text>
          <ChartaContinueButton w={{ base: 'full', md: '224px' }} mt="30px">
            View Contract
          </ChartaContinueButton>
          <Button
            mt="20px"
            w={{ base: 'full', md: '224px' }}
            onClick={() => {}}
            border="1px solid"
            borderColor="base-primary-green"
          >
            Back to dashboard
          </Button>
        </>
      )}
      {(location.state as any)?.fromPaymentScreen && !isOpen && (
        <>
          <Image
            src="/assets/payments-statements-logo.png"
            mt={{ base: '80px', md: '120px' }}
          />
          <Text
            as="span"
            display="block"
            fontWeight="700"
            fontSize="2xl"
            mt="30px"
          >
            Payment successful
          </Text>
          <Text as="p" textAlign="center" mt="20px" mb="30px" maxW="30ch">
            Your payment is successful and your contract has been sent.
          </Text>
          <ChartaContinueButton
            px="4rem"
            onClick={onOpen}
            position={{ base: 'absolute', md: 'relative' }}
            bottom={{ base: '0px', md: 'auto' }}
            mb={{ base: '40px', md: '0px' }}
            w={{ base: '83vw', md: 'auto' }}
            mx="auto"
          >
            Continue
          </ChartaContinueButton>
        </>
      )}
    </>
  );
};
export default ContractSent;
