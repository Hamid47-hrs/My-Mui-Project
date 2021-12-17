import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  LogoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  LogoSm: {
    display: "Block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    border: "1px solid",
    borderColor: theme.palette.primary.default,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.primary.subsidiary,
    padding: "0.05rem 0.3rem",
    marginRight: theme.spacing(1),
    "&:hover": {
      backgroundColor: theme.palette.primary.default,
    },
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
  },
  searchIcon: {
    display: "flex",
    alignItems: "center",
    "&:hover": {
      cursor: "pointer",
    },
  },
  cancel: {
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "flex" : "none"),
    },
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
  },
  icons: {
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      display: (props) => (props.open ? "none" : "flex"),
    },
    alignItems: "center",
  },
  badge: {
    margin: theme.spacing(1),
  },
  icon: {
    marginLeft: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
    },
  },
  img: {
    boxShadow: "2px 0 10px #0000005c",
  },
}));

export default useStyle;
