import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import ChartaContinueButton from '../../common/forms/ChartaContinueButton';

const PaymentSummary: React.FC<{ onNext?: () => void }> = ({
  onNext = () => {},
}) => (
  <>
    <Box mt="14px" textAlign="center" mb={{ base: '60px', md: '76px' }}>
      <Text as="span" fontWeight="600" fontSize="2xl">
        Payment summary
      </Text>
      <Text as="p" fontSize="sm" mt="18px" maxW="40ch" lineHeight="24px">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint.
      </Text>
    </Box>
    <Box borderTop="1px solid" py="20px" borderTopColor="base-gray-5" w="full">
      <Grid
        templateColumns="repeat(2,1fr)"
        templateRows="repeat(2,1fr)"
        rowGap="40px"
      >
        <Box>
          <Text
            as="span"
            display="block"
            fontSize="sm"
            color="base-gray-2"
            lineHeight="20px"
          >
            Order date
          </Text>
          <Text as="span" display="block">
            12 Jan, 2022
          </Text>
        </Box>
        <Box textAlign="right">
          <Text
            as="span"
            display="block"
            fontSize="sm"
            color="base-gray-2"
            lineHeight="20px"
          >
            Order No.
          </Text>
          <Text as="span" display="block">
            NJK1304208
          </Text>
        </Box>
        <Box>
          <Text
            as="span"
            display="block"
            fontSize="sm"
            color="base-gray-2"
            lineHeight="20px"
          >
            Order
          </Text>
          <Text as="span" display="block">
            Contract Initiation
          </Text>
        </Box>
        <Box textAlign="right">
          <Text
            as="span"
            display="block"
            fontSize="sm"
            color="base-gray-2"
            lineHeight="20px"
          >
            Price
          </Text>
          <Text as="span" display="block">
            $50
          </Text>
        </Box>
      </Grid>
    </Box>
    <Flex
      borderTop="1px solid"
      py="20px"
      borderTopColor="base-gray-5"
      justifyContent="space-between"
      alignItems="center"
      w="full"
    >
      <Text
        as="span"
        display="block"
        fontSize="sm"
        color="base-gray-2"
        lineHeight="20px"
      >
        Tax fee
      </Text>
      <Text as="span">$0</Text>
    </Flex>
    <Flex
      borderTop="1px solid"
      py="20px"
      borderTopColor="base-gray-5"
      justifyContent="space-between"
      alignItems="center"
      w="full"
    >
      <Text
        as="span"
        display="block"
        fontSize="sm"
        color="base-gray-2"
        lineHeight="20px"
      >
        Total
      </Text>
      <Text as="span">$50</Text>
    </Flex>
    <ChartaContinueButton
      px="8rem"
      onClick={onNext}
      position={{ base: 'absolute', md: 'relative' }}
      bottom={{ base: '0px', md: 'auto' }}
      mb={{ base: '40px', md: '0px' }}
      w={{ base: '83vw', md: 'auto' }}
      mt={{ md: '80px' }}
      mx="auto"
    >
      Continue
    </ChartaContinueButton>
  </>
);

export default PaymentSummary;
