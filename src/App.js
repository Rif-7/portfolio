import { ChakraProvider } from "@chakra-ui/react";
import Head from "./Head/Head";
import "./app.css";

function App() {
  return (
    <ChakraProvider>
      <Head />
    </ChakraProvider>
  );
}

export default App;
