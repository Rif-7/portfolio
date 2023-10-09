import { ChakraProvider } from "@chakra-ui/react";
import Head from "./Head/Head";
import "./app.css";
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Projects from "./Projects/Projects";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Head />
      <About />
      <Projects />
    </ChakraProvider>
  );
}

export default App;
