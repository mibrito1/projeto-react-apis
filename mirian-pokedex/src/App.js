

import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import './App.css';
// import { GlobalState } from './Contexts/GlobalState';
import GlobalStyle from './GlobalStyle';
import { Router } from './Router/Router';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: "#5E5E5E",
      },
    },
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ChakraProvider>
  );
}

export default App;

