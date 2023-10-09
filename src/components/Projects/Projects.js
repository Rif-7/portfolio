import { Text, VStack } from "@chakra-ui/react";

export default function Projects() {
  return (
    <VStack height={"1200px"}>
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Projects
      </Text>
    </VStack>
  );
}
