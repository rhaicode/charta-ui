import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import ChartaContinueButton from '../../../common/forms/ChartaContinueButton';

const DisputesBetweenParties: React.FC<{ onNext?: () => void }> = ({
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
      Disputes between Parties
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      In the event a breach can&apos;t be, or isn&apos;t, fixed, and one party
      has to sue the other party, it&apos;s typical for the party that wins that
      lawsuit to be reimbursed for its reasonable legal fees and expenses.
    </Text>
    <Text as="p" lineHeight="28px" mr="auto" mt="20px">
      These are called &quot;prevailing party fees&quot; and these types of
      lawsuits are called &quot;direct claims.&quot;
    </Text>

    <Box h="8rem" display={{ md: 'none' }} />
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

export default DisputesBetweenParties;
