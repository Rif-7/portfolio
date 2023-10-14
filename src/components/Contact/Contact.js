import { Button, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiGithub } from "react-icons/fi";
import ContactIcon from "./ContactIcon";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Contact() {
  return (
    <VStack
      bg={"#0075F2"}
      borderTop={"75px solid #0075F2"}
      clipPath={"polygon(0 0,100% 90px, 100% 100%,0 100%)"}
      color={"white"}
      py={"30px"}
      gap={"30px"}
    >
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Contact
      </Text>

      <HStack gap={{ base: "0px", md: "8px" }}>
        <ContactIcon icon={FiGithub} />
        <ContactIcon icon={MdEmail} />
        <ContactIcon icon={FaLinkedinIn} />
      </HStack>

      <Link>
        <Button
          variant={"outline"}
          color={"white"}
          colorScheme="whiteAlpha"
          className="raleway"
          rightIcon={<ExternalLinkIcon />}
        >
          View Resume
        </Button>
      </Link>

      <Text
        className="raleway"
        fontSize={{ base: "12px", md: "16px", lg: "18px" }}
      >
        Copyright © 2023 Created by Muhammad Rifan N. A
      </Text>
    </VStack>
  );
}
