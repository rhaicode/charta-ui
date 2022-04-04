import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';

import { useAtom } from 'jotai';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaButton from '../../../common/ChartaButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const DoesSongNameHaveSamples: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => {
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  const {
    isOpen: isOpenYes,
    onOpen: onOpenYes,
    onClose: onCloseYes,
  } = useDisclosure();
  const {
    isOpen: isOpenIdk,
    onOpen: onOpenIdk,
    onClose: onCloseIdk,
  } = useDisclosure();

  const onNextStep = () => {
    setOnboardedUser({
      ...onboardedUser,
      step: 3,
      subStep: 1,
      prevSubStep: 12,
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
        Does [song name] have any samples in it?
      </Text>
      <ChartaFormButton
        mt="30px"
        onClick={() => {
          onOpenYes();
          onCloseIdk();
        }}
        isSelected={isOpenYes}
      >
        Yes
      </ChartaFormButton>
      <ChartaFormButton
        mt="20px"
        onClick={() => {
          onNextStep();
        }}
      >
        No
      </ChartaFormButton>
      <ChartaFormButton
        mt="20px"
        onClick={() => {
          onOpenIdk();
          onCloseYes();
        }}
        isSelected={isOpenIdk}
      >
        I don&apos;t know
      </ChartaFormButton>
      {isOpenYes && (
        <Text
          as="p"
          fontStyle="italic"
          fontSize="14px"
          textAlign="center"
          mt={{ base: '30px', md: '40px' }}
          mb={{ base: '20px', md: '0px' }}
        >
          No worries! We&apos;ll come back to this later.
        </Text>
      )}
      {isOpenIdk && (
        <Text
          as="p"
          fontStyle="italic"
          fontSize="14px"
          textAlign="center"
          maxW="42ch"
          mt={{ base: '30px', md: '40px' }}
          mb={{ base: '20px', md: '0px' }}
        >
          That&apos;s OK! We&apos;ll have to fill that information in before we
          finish the contract, but that won&apos;t stop us from sending out the
          offer today.
        </Text>
      )}
      {(isOpenYes || isOpenIdk) && (
        <ChartaButton
          px="4rem"
          py="1rem"
          mt={{ md: '30px' }}
          mb={{ base: '40px', md: '0px' }}
          onClick={() => {
            if (isOpenYes) {
              onNext();
            }
          }}
          position={{ base: 'absolute', md: 'relative' }}
          bottom={{ base: '0px', md: 'auto' }}
        >
          Continue
        </ChartaButton>
      )}
    </>
  );
};

export default DoesSongNameHaveSamples;
