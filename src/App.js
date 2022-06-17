import * as React from 'react';
import HomePage from "./Component/Template/HomePage";
import Anktech from "./Component/Theme/Theme";
import { StyledEngineProvider } from "@mui/material";

function App() {
  return (
    <>
    <StyledEngineProvider injectFirst>
      <Anktech>
        <HomePage />
      </Anktech>
      </StyledEngineProvider>
    </>
  );
}

export default App;
