import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function ProjectCard({ project, index }) {
  const { title, description, tags, links } = project;

  return (
    <Flex
      direction={{
        base: "column",
        lg: index % 2 === 0 ? "row" : "row-reverse",
      }}
      gap={"30px"}
    >
      <Image
        alt={title}
        src={links.image}
        w={"100%"}
        maxW={"550px"}
        alignSelf={"flex-start"}
      />

      <VStack alignItems={"flex-start"} maxW={"400px"}>
        <Text
          className="raleway"
          fontSize={"22px"}
          fontWeight={"semibold"}
          color={"#0075F2"}
        >
          {title}
        </Text>
        <Box
          className="merriweather"
          fontWeight={"thin"}
          borderBottom={"1px solid gray"}
          pb={"30px"}
        >
          <Text> {description}</Text>
          <HStack gap={"4px"} mt={"16px"}>
            <Link isExternal href={links.code}>
              <Button
                variant={"outline"}
                colorScheme={"blue"}
                color={"#0075F2"}
              >
                Code
              </Button>
            </Link>
            <Link isExternal href={links.preview}>
              <Button
                variant={"outline"}
                colorScheme={"blue"}
                color={"#0075F2"}
              >
                Preview
              </Button>
            </Link>
          </HStack>
        </Box>
        <Text
          className="merriweather"
          fontSize={"14px"}
          fontStyle={"italic"}
          color={"gray"}
        >
          {tags}
        </Text>
      </VStack>
    </Flex>
  );
}
