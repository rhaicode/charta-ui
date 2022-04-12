import React from 'react';
import { Box, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useAtom } from 'jotai';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import ResponsiveModal from '../../../common/ResponsiveModal';
import { onboardedUserAtomPersist } from '../../../../atoms';

const Audits: React.FC<{ onNext?: () => void }> = ({ onNext = () => {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);
  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="600"
        mr="auto"
      >
        Audits
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="20px">
        A producer can audit an artist once a year and only looking back at 3
        years&apos; worth of statements. Each statement can only be audited
        once.
      </Text>
      <Text as="p" lineHeight="28px" mr="auto" mt="20px">
        Sales reports and other statements prepared by distributors or labels
        cannot be audited. A producer will have 12 months to point out any
        mistakes in those sales reports or other third-party statements to an
        artist, though.
      </Text>
      <Box h="6rem" display={{ md: 'none' }} />
      <ChartaContinueButton
        px="4rem"
        py="1rem"
        mt={{ md: '40px' }}
        mb={{ base: '40px', md: '0px' }}
        onClick={() => {
          if (onboardedUser.hasAccountCreated) {
            setOnboardedUser({
              ...onboardedUser,
              step: 6,
              subStep: 1,
              prevSubStep: 13,
              hasAccountCreated: true,
            });
          } else {
            onOpen();
          }
        }}
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

export default Audits;
