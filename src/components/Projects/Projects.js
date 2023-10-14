import { Button, Link, Text, VStack } from "@chakra-ui/react";
import { projectsData } from "./projectData";
import ProjectCard from "./ProjectCard";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Projects() {
  return (
    <VStack py={"30px"}>
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Projects
      </Text>
      <VStack
        mt={"50px"}
        padding={{ base: "10px", md: "22px" }}
        gap={{ base: "50px", lg: "100px" }}
      >
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </VStack>
      <Text
        fontSize={{ base: "16px", md: "22px" }}
        className="raleway"
        mt={"30px"}
        fontWeight={"semibold"}
      >
        Visit my&nbsp;
        <Link isExternal href="https://github.com/Rif-7">
          <Button
            variant={"link"}
            fontSize={{ base: "16px", md: "22px" }}
            rightIcon={<ExternalLinkIcon />}
          >
            github
          </Button>
        </Link>
        &nbsp;to see more of my work.
      </Text>
    </VStack>
  );
}
