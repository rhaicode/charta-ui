import {
  Box,
  Button,
  Flex,
  FormControl,
  FormControlProps,
  FormLabel,
  Input,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai';

interface PasswordFieldProps {
  inputVariant?:
    | 'outline'
    | (string & {})
    | 'filled'
    | 'flushed'
    | 'unstyled'
    | undefined;
  hideLabel?: boolean;
  placeholderStyles?: any;
}

const PasswordField: React.FC<FormControlProps & PasswordFieldProps> = ({
  placeholder,
  inputVariant,
  hideLabel,
  placeholderStyles,
  borderBottomColor,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <FormControl {...props}>
      {!hideLabel && (
        <FormLabel fontWeight="400" fontSize="14px">
          {placeholder}
        </FormLabel>
      )}
      <Flex position="relative">
        <Input
          variant={inputVariant}
          type={isOpen ? 'text' : 'password'}
          placeholder={placeholder}
          mt="-0.5rem"
          _placeholder={{
            color: '#FFFFFF',
            opacity: '0.6',
            ...placeholderStyles,
          }}
          borderBottomColor={borderBottomColor}
        />
        <Box position="absolute" right="0px" bottom="3px">
          {isOpen ? (
            <Button
              size="sm"
              onClick={onClose}
              variant="ghost"
              _hover={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
            >
              <AiFillEyeInvisible fontSize="16px" />
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={onOpen}
              variant="ghost"
              _hover={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
            >
              <AiFillEye fontSize="16px" />
            </Button>
          )}
        </Box>
      </Flex>
    </FormControl>
  );
};

export default PasswordField;
