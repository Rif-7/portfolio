import {
  Badge,
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
        boxShadow={"dark-lg"}
        borderStyle={"solid"}
        borderWidth={"2px"}
        borderColor={"blue.200"}
        rounded={"sm"}
        alt={title}
        src={links.image}
        w={"100%"}
        maxW={"600px"}
        alignSelf={"flex-start"}
        transitionDuration={"200ms"}
        _hover={{
          transform: "translate(0px, -5px)",
        }}
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
                className="raleway"
              >
                Code
              </Button>
            </Link>
            <Link isExternal href={links.preview}>
              <Button
                variant={"outline"}
                colorScheme={"blue"}
                color={"#0075F2"}
                className="raleway"
              >
                Preview
              </Button>
            </Link>
          </HStack>
        </Box>
        <Flex wrap={"wrap"} gap={"4px"}>
          {tags.map((tag, index) => (
            <Badge key={index} variant={"solid"} colorScheme={"blue"}>
              {tag}
            </Badge>
          ))}
        </Flex>
      </VStack>
    </Flex>
  );
}
