import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const Payments: React.FC<{ onNext?: () => void }> = ({ onNext = () => {} }) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="600"
      mr="auto"
    >
      Payments
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      An artist won&apos;t have to pay their producer any profits or royalties
      until they recoup their recording costs.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      Once those recording costs are recouped, the artist will pay the producer
      their profit share or royalty within 30 days after the end of the month in
      which the artist received or was credited that money.
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
);

export default Payments;
