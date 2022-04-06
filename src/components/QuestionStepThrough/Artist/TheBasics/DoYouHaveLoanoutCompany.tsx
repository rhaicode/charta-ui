import React from 'react';
import { Text, useDisclosure } from '@chakra-ui/react';
import ChartaFormButton from '../../../common/forms/ChartaFormButton';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import ResponsiveModal from '../../../common/ResponsiveModal';

const DoYouHaveLoanoutCompany: React.FC<{
  onNext?: (subStep?: string, prevStep?: string | number) => void;
}> = ({ onNext = () => {} }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        as="p"
        fontSize={{ base: 'lg', md: 'xl' }}
        lineHeight="28px"
        fontWeight="500"
      >
        Do you have a loan-out company?
      </Text>
      <Text
        as="p"
        mr={{ base: 'auto', md: '0px' }}
        fontSize="12px"
        lineHeight="16px"
        fontWeight="500"
        mt="20px"
        textTransform="uppercase"
        color="#56ad95"
        letterSpacing="0.08em"
        onClick={onOpen}
        cursor="pointer"
      >
        What&apos;s this?
      </Text>
      <ChartaFormButton
        mt="30px"
        onClick={() => {
          onNext('5b', 5);
        }}
      >
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
      <ResponsiveModal
        isOpen={isOpen}
        onClose={onClose}
        title="Loan-out company"
        body={
          <>
            <Text as="p" lineHeight="24px">
              Some artists and producers will form a limited liability company
              or a corporation that will &quot;loan out&quot; the services of
              the artist or producer to other people to help create songs.
            </Text>
            <Text as="p" mt={{ base: '1.5rem', md: '2rem' }} lineHeight="24px">
              Artists and producers mostly create loan-out companies for tax
              reasons. If you have a loan-out company, you usually have to
              guarantee that your loan-out company will do everything it is
              supposed to do under the producer agreement, and, if it
              doesn&apos;t, then you&apos;re on the hook personally.
            </Text>
          </>
        }
        footer={
          <ChartaContinueButton
            px="4rem"
            w={{ base: 'full', md: 'auto' }}
            onClick={onClose}
            mx="auto"
          >
            Got it, thanks!
          </ChartaContinueButton>
        }
      />
    </>
  );
};

export default DoYouHaveLoanoutCompany;
