import { Button, ButtonProps } from '@chakra-ui/react';

interface ChartaFormButtonProps {
  isSelected?: boolean;
}

const ChartaFormButton: React.FC<ButtonProps & ChartaFormButtonProps> = ({
  children,
  isSelected,
  ...props
}) => (
  <Button
    backgroundColor="#F5F3F1"
    fontWeight="400"
    color="base-primary-green"
    borderRadius="5px"
    w={{ base: 'full', md: '350px' }}
    h="46px"
    {...(isSelected && {
      backgroundColor: 'base-secondary-green',
      color: 'white',
    })}
    {...props}
  >
    {children}
  </Button>
);

export default ChartaFormButton;
