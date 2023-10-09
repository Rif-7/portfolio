import { Flex, Image, Text, VStack } from "@chakra-ui/react";

const languages = [
  { name: "Python", url: "skills/python.png" },
  { name: "JavaScript", url: "skills/js.png" },
  { name: "SQL", url: "skills/sql.png" },
  { name: "HTML", url: "skills/html.png" },
  { name: "CSS", url: "skills/css.png" },
];

const otherSkills = [
  { name: "React JS", url: "skills/react.png" },
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
      <Text className="space" fontSize={"28px"} fontWeight={"semibold"}>
        {title}
      </Text>
      <Flex
        wrap={"wrap"}
        gap={{ base: "10px", md: "18px" }}
        padding={"18px"}
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
