import { Flex, Text, VStack } from "@chakra-ui/react";
import { certificateData } from "./certificateData";
import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <VStack id="certificates" py={"30px"}>
      <Text
        className="space"
        fontSize={{ base: "18px", md: "22px" }}
        textDecor={"underline"}
      >
        Certificates
      </Text>
      <Flex
        wrap={"wrap"}
        justify={"center"}
        mt={"50px"}
        padding={{ base: "15px", md: "30px" }}
        gap={{ base: "30px", lg: "50px" }}
      >
        {certificateData.map(({ title, year, description, link }, index) => (
          <CertificateCard
            title={title}
            year={year}
            description={description}
            link={link}
          />
        ))}
      </Flex>
    </VStack>
  );
}
