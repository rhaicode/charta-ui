import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const MechanicalRoyalties: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text as="p" fontSize="xl" lineHeight="28px" fontWeight="600" mr="auto">
      Mechanical Royalties
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      Since the label is the owner of the master, it has to pay $0.091, or
      $0.0175 per minute of playing time, whichever is greater, to the owners of
      the composition every time it creates a physical copy of the master. These
      are called &quot;mechanical royalties.&quot;
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="1.5rem">
      Labels consider the $0.091 per track to be the “statutory minimum”
      mechanical royalty.
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
);

export default MechanicalRoyalties;
