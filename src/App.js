import { ChakraProvider } from "@chakra-ui/react";
import Head from "./components/Head/Head";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

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
