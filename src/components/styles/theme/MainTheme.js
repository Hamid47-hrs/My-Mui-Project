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
  palette: {
    primary: {
      main: blue[600],
      subsidiary: blue[700],
      default: blue[300],
    },
    secondary: {
      main: red[500],
      subsidiary: red[700],
      default: red[300],
    },
  },
});

export default MainTheme;
