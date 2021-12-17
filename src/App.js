import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import NavBar from "./components/layouts/NavBar";
import MainTheme from "./components/styles/theme/MainTheme";
export default function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <NavBar />
      </ThemeProvider>
    </React.Fragment>
  );
}
