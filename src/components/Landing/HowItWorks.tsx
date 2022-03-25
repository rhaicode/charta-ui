import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import StepCounter from './StepCounter';
import GreenDash from './GreenDash';

const steps = [
  {
    title: 'Make your offer',
    description:
      "Our platform helps you easily create a comprehensive offer. Once you're done, we'll email that offer to your collaborator.",
  },
  {
    title: 'Negotiate with your collaborator',
    description:
      'Once your collaborator receives your offer, they can respond with their preferred terms, and our platform will help you seamlessly identify and resolve any disagreements so that you can finalize your agreement.',
  },
  {
    title: 'Sign your agreement',
    description:
      "Once you and your collaborator are done negotiating, we automatically create a customized contract on our platform for you to sign. It's that simple.",
  },
];

const HowItWorks: React.FC = () => (
  <Box mt="86px">
    <Text
      as="span"
      display="block"
      maxW="max-content"
      mx="auto"
      fontSize="32px"
      fontWeight="500"
      mb="30px"
    >
      How it works
    </Text>
    <Grid
      templateColumns="repeat(3, 1fr)"
      borderRadius="15px"
      backgroundColor="base-dark-green"
      p="20px"
      columnGap="20px"
    >
      {steps.map((s, i) => (
        <Box
          key={s.title}
          borderRadius="15px"
          backgroundColor="base-light-green"
          p="35px"
        >
          <Box maxW="max-content" mx="auto">
            <StepCounter stepNumber={i + 1} />
          </Box>
          <Text
            as="span"
            fontWeight="500"
            fontSize="2xl"
            lineHeight="30px"
            textAlign="center"
            display="block"
            mt="1.25rem"
          >
            {s.title}
          </Text>
          <GreenDash mx="auto" my="20px" />
          <Text as="p" textAlign="center" fontSize="15px" lineHeight="24px">
            {s.description}
          </Text>
        </Box>
      ))}
    </Grid>
  </Box>
);

export default HowItWorks;
