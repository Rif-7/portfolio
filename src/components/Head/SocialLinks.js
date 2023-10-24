import { Center, Flex, HStack, Icon, Link } from "@chakra-ui/react";
import socials from "../../links";

import { TbBrandGithubFilled } from "react-icons/tb";
import { BiLogoLinkedin, BiSolidUserDetail } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function SocialLinks() {
  return (
    <HStack position={"absolute"} top={"30px"} left={"10px"} width={"100%"}>
      <Flex direction={"column"} gap={"10px"} padding={"5px"} rounded={"md"}>
        <SocialIcon link={socials.github} icn={TbBrandGithubFilled} />
        <SocialIcon link={socials.linkedin} icn={BiLogoLinkedin} />
        <SocialIcon link={socials.email} icn={MdEmail} />
        <SocialIcon link={socials.resume} icn={BiSolidUserDetail} />
      </Flex>
    </HStack>
  );
}

function SocialIcon({ link, icn }) {
  return (
    <Link href={link} color={"gray.700"} isExternal>
      <Center
        padding={"4px"}
        border={"6px solid #2D3748"}
        rounded={"full"}
        className="social-icon"
      >
        <Icon as={icn} boxSize={{ base: "6", md: "8" }} />
      </Center>
    </Link>
  );
}
