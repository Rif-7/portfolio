import { Flex, Text } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      w={"100%"}
      bg={"#0075F2"}
      direction={"column"}
      align={"center"}
      className="raleway"
      paddingY={"50px"}
      paddingX={"30px"}
      gap={"20px"}
      color={"white"}
    >
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        About
      </Text>

      <Text color={"white"} fontSize={"32px"} fontWeight={"semibold"}>
        Hi, I&apos;m Rifan. Nice to meet you.
      </Text>

      <Text color={"white"} maxW={"800px"} fontSize={"22px"}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam laoreet
        massa ultricies, porttitor metus ut, gravida risus. Suspendisse eu
        fermentum ligula. Quisque sollicitudin mi at blandit dapibus. Cras
        lobortis non arcu eu sodales. Nam aliquam urna id magna congue, in
        tincidunt erat malesuada. Nulla porttitor metus nunc, eget eleifend
        turpis ornare vitae. Integer at ornare nibh. Pellentesque consectetur
        ipsum id justo porttitor, ut bibendum quam hendrerit. Quisque a lacinia
        leo, a lacinia nulla. Fusce lacinia blandit nulla, ut blandit sapien
        fringilla et. Praesent ut aliquam enim.
      </Text>
    </Flex>
  );
}
