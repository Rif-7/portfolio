import { Flex, Text } from "@chakra-ui/react";
import Skills from "./Skills";
import { useEffect, useState } from "react";

export default function About() {
  const [myAge, setMyAge] = useState(20);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyAge(getAge);
    }, 3200);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myDob = new Date(2003, 5, 3);
  const MsPerYear = 1000 * 60 * 60 * 24 * 365.25;
  const getAge = () => {
    const curr = new Date();
    const ageInMs = curr - myDob;
    const age = ageInMs / MsPerYear;
    return age.toFixed(7);
  };

  return (
    <Flex
      id="about"
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
        I'm a&nbsp;
        <Text as={"b"} className="space-mono">
          {myAge}
        </Text>
        -year-old computer science undergraduate from Kerala, India. I've been
        coding since I was 17, with a strong focus in web development. I'm all
        about crafting clean, user-friendly frontends and architecting robust,
        efficient backends. Along the way, I've explored serveral other fields,
        such as cybersecurity, penetration testing and machine learning. I spent
        most of my time working on personal projects with a lineup of
        interesting applications I want to create. In my free time, I enjoy
        catching up with my favorite football clubs, listening to music, and
        reading
      </Text>

      <Skills />
    </Flex>
  );
}
