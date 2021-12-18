import * as React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { Grid, makeStyles } from "@material-ui/core";
import MainTheme from "./components/styles/theme/MainTheme";
import NavBar from "./components/layouts/NavBar";
import LeftBar from "./components/layouts/LeftBar";
import RightBar from "./components/layouts/RightBar";
import MainFeed from "./components/layouts/MainFeed";

const useStyle = makeStyles((theme) => ({
  hidden: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));
export default function App() {
  const classes = useStyle();
  return (
    <React.Fragment>
      <ThemeProvider theme={MainTheme}>
        <NavBar />
        <Grid container>
          <Grid item sm={3} xs={2}>
            <RightBar />
          </Grid>
          <Grid item sm={6} xs={10}>
            <MainFeed />
          </Grid>
          <Grid item sm={3} className={classes.hidden}>
            <LeftBar />
          </Grid>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  );
}
