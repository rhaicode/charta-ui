import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaButton from '../../../common/ChartaButton';

const CreateAnAccount: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
      >
        Would you like to create an account now?
      </Text>
      <Text
        as="p"
        fontSize="16px"
        textAlign={{ base: 'left', md: 'center' }}
        lineHeight="24px"
        fontWeight="400"
        mt="20px"
      >
        This will allow you to save your progress and return to finish your
        offer at any time.
      </Text>
      <ChartaFormButton
        mt="30px"
        onClick={() => {
          onNext();
        }}
      >
        Yes, please!
      </ChartaFormButton>
      <ChartaFormButton mt="20px" onClick={onOpen} isSelected={isOpen}>
        Not right now
      </ChartaFormButton>
      {isOpen && (
        <>
          <Text
            as="p"
            fontStyle="italic"
            fontSize="14px"
            textAlign="center"
            mt={{ base: '30px', md: '40px' }}
            mb={{ base: '20px', md: '0px' }}
          >
            No worries! If you exit before you&apos;re done, you&apos;ll have a
            chance to create an account to save your progress.
          </Text>

          <ChartaButton
            px="4rem"
            py="1rem"
            mt={{ md: '30px' }}
            mb={{ base: '40px', md: '0px' }}
            onClick={() => {
              onNext();
            }}
            position={{ base: 'absolute', md: 'relative' }}
            bottom={{ base: '0px', md: 'auto' }}
          >
            Continue
          </ChartaButton>
        </>
      )}
    </>
  );
};

export default CreateAnAccount;
