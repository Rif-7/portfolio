import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "./components/Head/Head";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const container = useRef(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".menu-icon", {
        scrollTrigger: {
          trigger: ".project-section",
          scrub: 1,
          start: "top 50px",
          end: "bottom, top",
          toggleActions: "play none none reverse",
        },
        rotate: "50",
        color: "black",
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <ChakraProvider>
      <Box ref={container}>
        <Navbar />
        <Head />
        <About />
        <Projects />
        <Contact />
      </Box>
    </ChakraProvider>
  );
}

export default App;
