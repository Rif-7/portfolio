import { Center, Icon } from "@chakra-ui/react";

export default function ContactIcon({ icon }) {
  return (
    <Center
      border={"5px solid white"}
      padding={"8px"}
      rounded={"full"}
      transform={{ base: "scale(.8)", md: "scale(1)" }}
      _hover={{
        color: "#0075F2",
        bg: "white",
      }}
    >
      <Icon as={icon} boxSize={{ base: "10", md: "8" }} />
    </Center>
  );
}
