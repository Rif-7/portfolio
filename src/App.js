import { ChakraProvider } from "@chakra-ui/react";
import Head from "./components/Head/Head";
import "./app.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Head />
      <About />
      <Projects />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
