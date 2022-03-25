import { Grid, Box, Text, Image } from '@chakra-ui/react';
import React from 'react';
import ChartaButton from '../common/ChartaButton';

const Hero: React.FC = () => (
  <Grid
    templateColumns="repeat(2, 1fr)"
    columnGap="128px"
    alignItems="center"
    mt="80px"
  >
    <Box mt="6rem">
      <Text
        as="span"
        fontSize="6xl"
        fontWeight="500"
        lineHeight="70px"
        letterSpacing="0.02em"
        display="block"
      >
        Move at the speed of agreement
      </Text>
      <Text
        as="p"
        fontSize="lg"
        lineHeight="28px"
        letterSpacing="0.01em"
        mt="2.25rem"
        fontWeight="400"
      >
        With our platform, you can spend more time making music, and less time
        worrying about producer deals. On Charta, you can negotiate and execute
        a contract all in plain English, starting at just $25 per agreement.
      </Text>
      <ChartaButton px="3rem" mt="2.75rem">
        Get started
      </ChartaButton>
    </Box>
    <Box position="relative" minH="500px">
      <Box
        w="385px"
        h="385px"
        position="absolute"
        top="48px"
        left="80px"
        backgroundColor="#fff"
        opacity="0.1"
        borderRadius="15px"
      />
      <Image
        src="./assets/man-on-phone.png"
        alt="Man on phone"
        position="relative"
        top="0px"
        left="0px"
        zIndex="2"
      />
      <Image
        src="./assets/woman-on-guitar.png"
        alt="Woman on guitar"
        position="absolute"
        bottom="0px"
        right="0px"
      />
    </Box>
  </Grid>
);

export default Hero;
