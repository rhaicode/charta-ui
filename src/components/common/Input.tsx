import { Input, InputProps } from '@chakra-ui/react';
import React from 'react';

const ThemedInput: React.FC<InputProps> = ({ ...props }) => (
  <Input {...props} variant="flushed" />
);

export default ThemedInput;
