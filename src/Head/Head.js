import { Box } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import SocialLinks from "./SocialLinks";

export default function Head() {
  return (
    <Box position={"relative"}>
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
