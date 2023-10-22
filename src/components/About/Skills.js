import { Text, VStack } from "@chakra-ui/react";
import { languages, otherSkills } from "./skillData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import SkillSet from "./SkillSet";

export default function Skills() {
  const container = useRef();
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.from(".skill-box", {
        scrollTrigger: {
          trigger: ".skill-box",
          start: "top 90%",
          once: true,
        },
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
      });
    }, container);

    return () => ctx.revert();
  }, []);

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
        <SkillSet skills={otherSkills} title={"Frameworks & Technologies"} />
      </VStack>
    </VStack>
  );
}
