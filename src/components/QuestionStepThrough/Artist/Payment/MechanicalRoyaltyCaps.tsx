import React from 'react';
import { Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const MechanicalRoyaltyCaps: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text as="p" fontSize="xl" lineHeight="28px" fontWeight="600" mr="auto">
      Mechanical Royalty Caps
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      Labels will also cap the total amount of mechanical royalties that they
      will pay on controlled compositions, usually 1X the controlled rate on
      singles, 4X the controlled rate on EPs, and 10X the controlled rate on
      albums.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      If the artist cannot get the co-writers of controlled compositions to
      agree to all of these restrictions, then the artist has to reimburse the
      label for any mechanical royalties it pays in excess of the caps.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="30px">
      Collectively, the controlled rate and caps are called &quot;controlled
      composition clauses.&quot;
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

export default MechanicalRoyaltyCaps;
