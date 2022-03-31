import { Button, ButtonProps } from '@chakra-ui/react';

const ChartaFormButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    backgroundColor="#F5F3F1"
    fontWeight="400"
    color="base-primary-green"
    borderRadius="5px"
    w={{ base: 'full', md: '350px' }}
    h="46px"
    {...props}
  >
    {children}
  </Button>
);

export default ChartaFormButton;
