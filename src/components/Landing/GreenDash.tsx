import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

const GreenDash: React.FC<BoxProps> = ({ ...props }) => (
  <Box h="1.5px" backgroundColor="#B2E3AA" width="58px" {...props} />
);

export default GreenDash;
