import { Text, VStack } from "@chakra-ui/react";
import { projectsData } from "./projectData";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <VStack height={"1200px"}>
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Projects
      </Text>
      <VStack mt={"50px"} padding={{ base: "10px", md: "22px" }} gap={{base: "50px", lg: "100px"}}>
        {projectsData.map((project, index) => (
          <ProjectCard project={project} key={index} index={index} />
        ))}
      </VStack>
    </VStack>
  );
}
