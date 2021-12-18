import { createTheme } from "@material-ui/core";
import {
  common,
  purple,
  blue,
  red,
  green,
  brown,
  yellow,
} from "@material-ui/core/colors";
const MainTheme = createTheme({
  blueStyle: {
    main: blue[600],
    secondary: blue[700],
    default: blue[300],
  },
  redStyle: {
    main: red[500],
    secondary: red[700],
    default: red[300],
  },
  greenStyle: {
    main: green[500],
    secondary: green[700],
    default: green[300],
  },
  yellowStyle: {
    main: yellow[500],
    secondary: yellow[700],
    default: yellow[300],
  },
  common: {
    main: common["white"],
    secondary: common["black"],
  },
  text: {
    white: common["white"],
    black: common["black"],
    grey: "#555",
    lightgrey: "#f8f8f8",
  },
});

export default MainTheme;
