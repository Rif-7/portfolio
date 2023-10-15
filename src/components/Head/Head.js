import { Box, HStack, Image, Text, VStack } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import SocialLinks from "./SocialLinks";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Head() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".header-logo", {
        duration: 1,
        x: "-100%",
        delay: 0.5,
      });

      gsap.from(".social-icon", {
        duration: 1,
        y: "100%",
        opacity: 0,
        delay: 0.5,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <Box position={"relative"} ref={container}>
      <HStack
        position={"absolute"}
        paddingX={"30px"}
        paddingY={"15px"}
        className="header-logo"
      >
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
