import { Flex, Text } from "@chakra-ui/react";
import Skills from "./Skills";

export default function About() {
  return (
    <Flex
      w={"100%"}
      backgroundImage={"about-bg.jpg"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
      direction={"column"}
      align={"center"}
      className="raleway"
      paddingY={"50px"}
      paddingX={"30px"}
      gap={"20px"}
      color={"black"}
    >
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        About
      </Text>

      <Text fontSize={"32px"} fontWeight={"semibold"}>
        Hi, I&apos;m Rifan. Nice to meet you.
      </Text>

      <Text maxW={"800px"} w={"100%"} fontSize={"22px"} padding={"5px"}>
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

      <Skills />
    </Flex>
  );
}
