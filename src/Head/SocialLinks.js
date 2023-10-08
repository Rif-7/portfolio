import { HStack, Image } from "@chakra-ui/react";

export default function SocialLinks() {
  return (
    <HStack
      position={"absolute"}
      top={"90vh"}
      left={"0px"}
      width={"100%"}
      justify={"center"}
    >
      <HStack gap={"10px"} padding={"5px"} bg={"whiteAlpha.600"} rounded={"md"}>
        <Image src={"linkedin.png"} w={"50px"} h={"50px"} alt="Linkedin Logo" />
        <Image src={"github.png"} w={"50px"} h={"50px"} alt="Github Logo" />
        <Image src={"mail.png"} w={"50px"} h={"50px"} alt="Email Logo" />
        <Image src={"resume.png"} w={"50px"} h={"50px"} alt="Email Logo" />
      </HStack>
    </HStack>
  );
}
