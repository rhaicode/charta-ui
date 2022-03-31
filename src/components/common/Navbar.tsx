import { AddIcon } from '@chakra-ui/icons';
import {
  Flex,
  Image,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ChartaButton from './ChartaButton';

const Navbar: React.FC<{ noHamburger?: boolean }> = ({ noHamburger }) => (
  <Flex
    color="#fff"
    justifyContent={{ base: 'center', md: 'space-between' }}
    pos="relative"
    alignItems="center"
    h={{ base: '45px', md: '60px' }}
  >
    <Link to="/">
      <Image
        display={{ md: 'none' }}
        src="/assets/charta-logo-mobile.png"
        alignSelf="center"
        alt="charta-logo"
      />
      <Image
        display={{ base: 'none', md: 'block' }}
        src="/assets/charta-logo.png"
        alignSelf="center"
        alt="charta-logo"
      />
    </Link>

    <Flex display={{ base: 'none', md: 'flex' }}>
      <Box mr="24px">
        <Link to="/login">
          <Button variant="ghost" fontWeight="500">
            Login
          </Button>
        </Link>
      </Box>
      <Link to="/signup">
        <ChartaButton px="2rem">Sign up</ChartaButton>
      </Link>
    </Flex>
    {!noHamburger && (
      <Box pos="absolute" left="0px" top="4px">
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            display={{ md: 'none' }}
            variant="outline"
            icon={<Image src="/assets/hamburger-icon.png" mx="auto" />}
            borderColor="transparent"
          />
          <MenuList>
            <MenuItem icon={<AddIcon />} command="⌘T">
              New Tab
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    )}
  </Flex>
);

export default Navbar;
