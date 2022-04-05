import React from 'react';
import { Image, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const LegalDescription: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Image src="/assets/legal-logo.png" />
    <Text as="span" display="block" fontWeight="700" fontSize="2xl" mt="30px">
      Legal
    </Text>
    <Text as="p" textAlign="center" mt="20px" mb="30px">
      You&apos;re almost done, and this is the easiest part.
    </Text>
    <ChartaButton
      px="4rem"
      onClick={() => {
        onNext();
      }}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '80vw', md: 'auto' }}
      mx="auto"
    >
      Let&apos;s go
    </ChartaButton>
  </>
);

export default LegalDescription;
