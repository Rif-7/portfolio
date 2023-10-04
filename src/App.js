import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from "./Head/Head";
import "./app.css";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <ChakraProvider>
      <Navbar />
      <Head />
      <Box w={"100%"} h={"700px"} bg={"red"}></Box>
    </ChakraProvider>
  );
}

export default App;
