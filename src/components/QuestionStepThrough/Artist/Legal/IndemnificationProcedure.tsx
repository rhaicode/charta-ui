import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaButton from '../../../common/ChartaButton';

const IndemnificationProcedure: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Text
      as="p"
      fontSize={{ base: 'lg', md: 'xl' }}
      lineHeight="28px"
      fontWeight="600"
      mr="auto"
    >
      Indemnification Procedure
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      If you&apos;re being sued, but the other party, who we&apos;ll call the
      “indemnifying party,” has to reimburse you, then it makes sense that the
      indemnifying party doesn&apos;t want you to run up big legal bills or
      enter into an unfavorable settlement.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      With that in mind, the indemnifying party can take over the lawsuit on
      your behalf and pay for all the legal fees and judgments or settlements.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      The one thing that the indemnifying party can&apos;t do is agree to a
      settlement that makes you pay anything unless you give your written
      permission.
    </Text>
    <Box h="8rem" display={{ md: 'none' }} />
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

export default IndemnificationProcedure;
