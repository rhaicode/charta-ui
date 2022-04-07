import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { useAtom } from 'jotai';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';
import { onboardedUserAtomPersist } from '../../../../atoms';

const ReviewContractDescription: React.FC = () => {
  const history = useHistory();
  const [onboardedUser, setOnboardedUser] = useAtom(onboardedUserAtomPersist);

  return (
    <>
      <Image src="/assets/review-logo.png" />
      <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
        You made it!
      </Text>
      <Text as="p" textAlign="center" mt="20px" mb="30px" maxW="38ch">
        Before finalizing your contract, let&apos;s walk through each section to
        make sure all information is correct.
      </Text>
      <ChartaContinueButton
        px="4rem"
        onClick={() => {
          setOnboardedUser({
            ...onboardedUser,
            isReviewing: true,
            reviewingStep: 1,
          });
          history.push('/review');
        }}
        position={{ base: 'absolute', md: 'relative' }}
        bottom={{ base: '0px', md: 'auto' }}
        mb={{ base: '40px', md: '0px' }}
        w={{ base: '80vw', md: 'auto' }}
        mx="auto"
      >
        Start review
      </ChartaContinueButton>
    </>
  );
};

export default ReviewContractDescription;
