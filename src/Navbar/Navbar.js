import {
  Collapse,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

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
      <Image
        src="navlogo.png"
        alt="logo"
        w={"70px"}
        onClick={() => setIsOpen(!isOpen)}
      />
      <Collapse in={isOpen} animateOpacity>
        <VStack
          gap={"0px"}
          className="raleway"
          fontSize={"18px"}
          color={"white"}
          fontWeight={"semibold"}
        >
          <Text>Muhammad</Text>
          <Text>Rifan N. A</Text>
        </VStack>
      </Collapse>
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
