import { Button, ButtonProps } from '@chakra-ui/react';

const ChartaContinueButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    backgroundColor="base-primary-green"
    fontWeight="500"
    fontSize="16px"
    color="white"
    borderRadius="5px"
    lineHeight="24px"
    _hover={{
      backgroundColor: 'gray.200',
      color: 'base-primary-green',
    }}
    _active={{
      backgroundColor: 'gray.200',
      color: 'base-primary-green',
    }}
    {...props}
  >
    {children}
  </Button>
);

export default ChartaContinueButton;
