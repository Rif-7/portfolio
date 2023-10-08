import { Flex, Image, Text, VStack } from "@chakra-ui/react";

const languages = [
  { name: "Python", url: "skills/python.png" },
  { name: "JavaScript", url: "skills/js.png" },
  { name: "SQL", url: "skills/sql.png" },
  { name: "HTML", url: "skills/HTML.png" },
  { name: "CSS", url: "skills/css.png" },
];

const otherSkills = [
  { name: "React", url: "skills/react.png" },
  { name: "Express JS", url: "skills/express.png" },
  { name: "Node JS", url: "skills/nodejs.png" },
  { name: "Redux", url: "skills/redux.png" },
  { name: "Mongo DB", url: "skills/mongodb.png" },
  { name: "Chakra UI", url: "skills/chakraui.png" },
  { name: "Git", url: "skills/git.png" },
  { name: "Firebase", url: "skills/firebase.png" },
  { name: "Webpack", url: "skills/webpack.png" },
  { name: "MySQL", url: "skills/mysql.png" },
];

export default function Skills() {
  return (
    <VStack maxW={"800px"} w={"100%"} mt={"25px"}>
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
    <VStack
      rounded={"md"}
      bg={{ base: "white", lg: "inherit" }}
      color={{ base: "black", lg: "white" }}
    >
      <Text
        className="space"
        fontSize={"28px"}
        fontWeight={"semibold"}
        textDecor={{ base: "underline", lg: "none" }}
      >
        {title}
      </Text>
      <Flex
        wrap={"wrap"}
        gap={"18px"}
        padding={"18px"}
        justify={"center"}
        align={"center"}
      >
        {skills.map((skill, index) => (
          <VStack
            key={index}
            rounded={"md"}
            w={{ base: "auto", lg: "100px" }}
            h={{ base: "auto", lg: "100px" }}
            bg={{ base: "inherit", lg: "white" }}
            color={{ base: "inherit", lg: "black" }}
            padding={{ lg: "8px" }}
          >
            <Image alt={skill.name} src={skill.url} w={"50px"} />
            <Text fontSize={"16px"} fontWeight={"semibold"}>
              {skill.name}
            </Text>
          </VStack>
        ))}
      </Flex>
    </VStack>
  );
}
