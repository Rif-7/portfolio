import { Box } from "@chakra-ui/react";
import Spline from "@splinetool/react-spline";
import Navbar from "../Navbar/Navbar";
import SocialLinks from "./SocialLinks";

export default function Head() {
  return (
    <Box position={"relative"}>
      <Spline
        style={{
          height: "100vh",
          position: "absolute",
          top: "0",
          left: "0",
          zIndex: "-1",
        }}
        scene="https://prod.spline.design/v1LEqu6LD8QZYtc2/scene.splinecode"
      />
      <Navbar />
      <SocialLinks />
    </Box>
  );
}
