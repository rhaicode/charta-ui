import { Button, ButtonProps } from '@chakra-ui/react';

const ChartaButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    backgroundColor="base-peach-btn"
    fontWeight="500"
    color="#0D261F"
    borderRadius="5px"
    {...props}
  >
    {children}
  </Button>
);

export default ChartaButton;
