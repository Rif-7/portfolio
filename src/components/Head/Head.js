import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import SocialLinks from "./SocialLinks";

export default function Head() {
  return (
    <Box position={"relative"}>
      <HStack position={"absolute"} paddingX={"30px"} paddingY={"15px"}>
        <Image src="navlogo.png" qalt="logo" w={{ base: "60px", md: "70px" }} />
        <VStack
          gap={"0px"}
          className="raleway"
          fontSize={"18px"}
          color={"white"}
          fontWeight={"semibold"}
        >
          <Text>Muhammad</Text>
          <Text>Rifan N. A</Text>
        </VStack>
      </HStack>
      <Spline
        style={{
          height: "100vh",
        }}
        scene="https://prod.spline.design/v1LEqu6LD8QZYtc2/scene.splinecode"
      />
      <SocialLinks />
    </Box>
  );
}
