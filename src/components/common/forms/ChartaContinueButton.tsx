import { Button, ButtonProps } from '@chakra-ui/react';

const ChartaContinueButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <Button
    backgroundColor="base-primary-green"
    fontWeight="500"
    color="white"
    borderRadius="5px"
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
