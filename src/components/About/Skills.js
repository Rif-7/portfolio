import { Flex, Image, Text, VStack } from "@chakra-ui/react";
import { languages, otherSkills } from "./skillData";

export default function Skills() {
  return (
    <VStack
      maxW={"800px"}
      w={"100%"}
      mt={"25px"}
      align={"center"}
      justify={"center"}
    >
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Skills
      </Text>
      <VStack gap={"12px"} align={"stretch"}>
        <SkillSet skills={languages} title={"Languages"} />
        <SkillSet skills={otherSkills} title={"Frameworks & Tools"} />
      </VStack>
    </VStack>
  );
}

function SkillSet({ skills, title }) {
  return (
    <VStack rounded={"md"} color={"white"} align={"center"} justify={"center"}>
      <Text
        className="space"
        fontSize={{ base: "24px", md: "28px" }}
        fontWeight={"semibold"}
      >
        {title}
      </Text>
      <Flex
        wrap={"wrap"}
        gap={{ base: "10px", md: "18px" }}
        padding={{ base: "0px", md: "18px" }}
        justify={"center"}
        align={"center"}
      >
        {skills.map((skill, index) => (
          <VStack
            key={index}
            rounded={"md"}
            w={{ base: "80px", md: "100px" }}
            h={{ base: "80px", md: "100px" }}
            bg={"white"}
            color={"black"}
            align={"center"}
            justify={"center"}
            padding={{ base: "4px", md: "8px" }}
          >
            <Image
              alt={skill.name}
              src={skill.url}
              w={{ base: "40px", md: "50px" }}
            />
            <Text
              fontSize={{ base: "14px", md: "16px" }}
              fontWeight={"semibold"}
            >
              {skill.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
}
