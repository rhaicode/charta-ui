import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const DoYouWantProducerProvidePreapprovedPhotos: React.FC<{
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
        Do you want [producer first name] to provide [you] with pre-approved
        photos, likenesses, and bios (&quot;NIL Assets&quot;) to use when
        marketing [song name]?
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
            Great! [Producer first name] will have 2 weeks to send those
            materials to [you].
          </Text>
          <ChartaContinueButton
            px="4rem"
            py="1rem"
            mt={{ md: '40px' }}
            mb={{ base: '40px', md: '0px' }}
            onClick={() => {
              onNext();
            }}
            position={{ base: 'absolute', md: 'relative' }}
            bottom={{ base: '0px', md: 'auto' }}
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

export default DoYouWantProducerProvidePreapprovedPhotos;
