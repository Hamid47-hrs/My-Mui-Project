import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  contianer: {
    paddingTop: "1rem",
    height: "100vh",
    backgroundColor: theme.common.main,
    color: theme.text.grey,
    [theme.breakpoints.down("xs")]: {
      backgroundColor: theme.blueStyle.main,
      color: theme.text.white,
    },
  },
  iconContainer: {
    display: "flex",
    justifyContent: "right",
    width: "100%",
    alignItems: "center",
    marginBottom: theme.spacing(3),
    "&:hover": {
      cursor: "pointer",
      color: theme.yellowStyle.secondary,
    },
  },
  icons: {
    marginLeft: theme.spacing(1),
  },
  text: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default useStyle;
