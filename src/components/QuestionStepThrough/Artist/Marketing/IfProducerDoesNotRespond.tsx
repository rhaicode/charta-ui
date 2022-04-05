import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaButton from '../../../common/ChartaButton';

const IfProducerDoesNotRespond: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => {
  const { isOpen, onOpen } = useDisclosure();

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
        mr="auto"
      >
        If [producer first name] doesn&apos;t respond within [amount] days and
        [producer first name doesn&apos;t provide NIL Assets within 7 days after
        that deadline, can you use the marketing materials you created?
      </Text>
      <ChartaFormButton mt="30px" onClick={onOpen} isSelected={isOpen}>
        Yes
      </ChartaFormButton>
      <ChartaFormButton
        mt="20px"
        onClick={() => {
          onNext();
        }}
      >
        No
      </ChartaFormButton>
      {isOpen && (
        <>
          <Text
            as="p"
            lineHeight="22px"
            fontWeight="400"
            textAlign="center"
            mt="40px"
            fontStyle="italic"
            maxW="38ch"
          >
            This may prevent you from referencing [producer first name] in any
            marketing materials.
          </Text>
          <ChartaButton
            px="4rem"
            py="1rem"
            mt={{ md: '40px' }}
            mb={{ base: '40px', md: '0px' }}
            onClick={() => {
              onNext();
            }}
            position={{ base: 'absolute', md: 'relative' }}
            bottom={{ base: '0px', md: 'auto' }}
            w={{ base: '80vw', md: 'auto' }}
            mx="auto"
          >
            Continue
          </ChartaButton>
        </>
      )}
    </>
  );
};

export default IfProducerDoesNotRespond;
