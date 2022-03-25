import { Flex, Image, Button } from '@chakra-ui/react';
import ChartaButton from './ChartaButton';

const Navbar: React.FC = () => (
  <Flex
    color="#fff"
    justifyContent="space-between"
    alignItems="center"
    h="60px"
  >
    <Image
      src="./assets/charta-logo.png"
      alignSelf="center"
      alt="charta-logo"
    />
    <Flex>
      <Button variant="ghost" fontWeight="500" mr="24px">
        Login
      </Button>
      <ChartaButton px="2rem">Get started</ChartaButton>
    </Flex>
  </Flex>
);

export default Navbar;
