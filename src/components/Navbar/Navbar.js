import {
  HStack,
  Icon,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineTool,
  AiOutlineContacts,
} from "react-icons/ai";

export default function Navbar() {
  return (
    <HStack
      paddingX={"30px"}
      paddingY={"15px"}
      position={"fixed"}
      width={"100%"}
      zIndex={"20"}
      top={"0px"}
      left={"0px"}
    >
      <Spacer />
      <Menu>
        <MenuButton
          className="menu-icon"
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant={"ghost"}
          colorScheme={"whiteAlpha"}
          color={"white"}
          transform={"scale(1.6)"}
        />
        <MenuList>
          <MenuItem>
            <Link w={"100%"} href="#head">
              <Icon as={AiOutlineHome} /> Welcome
            </Link>
          </MenuItem>
          <MenuItem>
            <Link w={"100%"} href="#about">
              <Icon as={AiOutlineUser} /> About
            </Link>
          </MenuItem>
          <MenuItem>
            <Link w={"100%"} href="#projects">
              <Icon as={AiOutlineTool} /> Projects
            </Link>
          </MenuItem>
          <MenuItem>
            <Link w={"100%"} href="#contact">
              <Icon as={AiOutlineContacts} /> Contact
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
