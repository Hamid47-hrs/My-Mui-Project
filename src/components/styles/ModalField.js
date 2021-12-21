import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  form: {
    width: "98%",
    padding: "0.5rem",
  },
  title: {
    marginBottom: theme.spacing(2),
    width: "100%",
    direction: "rtl",
  },
  text: {
    marginBottom: theme.spacing(2),
    direction: "rtl",
    width: "100%",
    left: "unset",
    right: 0,
  },
  menu: {
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  radioG: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginLeft: theme.spacing(1),
  },
}));

export default useStyle;
