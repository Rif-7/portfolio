import {
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <HStack paddingX={"30px"} paddingY={"15px"}>
      <Image src="navlogo.png" alt="logo" w={"70px"} />
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
          <MenuItem>Profile</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
