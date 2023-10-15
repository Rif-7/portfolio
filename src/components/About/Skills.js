import { Text, VStack } from "@chakra-ui/react";
import { languages, otherSkills } from "./skillData";
import { useRef } from "react";
import SkillSet from "./SkillSet";

export default function Skills() {
  const container = useRef();

  return (
    <VStack
      maxW={"800px"}
      w={"100%"}
      mt={"25px"}
      align={"center"}
      justify={"center"}
      ref={container}
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
