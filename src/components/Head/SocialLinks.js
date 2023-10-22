import { HStack, Image, Link } from "@chakra-ui/react";
import socials from "../../links";

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
        <Link href={socials.linkedin} isExternal>
          <Image
            className="social-icon"
            src={"linkedin.png"}
            w={"50px"}
            h={"50px"}
            alt="Linkedin Logo"
          />
        </Link>

        <Link href={socials.github} isExternal>
          <Image
            className="social-icon"
            src={"github.png"}
            w={"50px"}
            h={"50px"}
            alt="Github Logo"
          />
        </Link>

        <Link href={socials.email} isExternal>
          <Image
            className="social-icon"
            src={"mail.png"}
            w={"50px"}
            h={"50px"}
            alt="Email Logo"
          />
        </Link>

        <Link href={socials.resume} isExternal>
          <Image
            className="social-icon"
            src={"resume.png"}
            w={"50px"}
            h={"50px"}
            alt="Email Logo"
          />
        </Link>
      </HStack>
    </HStack>
  );
}
