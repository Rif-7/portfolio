import {
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

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
          as={IconButton}
          aria-label="Options"
          icon={<GiHamburgerMenu />}
          variant={"ghost"}
          colorScheme={"whiteAlpha"}
          color={"white"}
          transform={"scale(1.6)"}
        />
        <MenuList>
          <MenuItem>About</MenuItem>
          <MenuItem>Projects</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
