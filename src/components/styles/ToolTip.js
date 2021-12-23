import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  addButton: {
    position: "fixed",
    bottom: 10,
    right: 10,
  },
  modalContainer: {
    width: "50%",
    height: "70vh",
    backgroundColor: theme.text.lightgrey,
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    borderRadius: "4px",
    boxShadow: theme.shadows[10],
    overflowY: "scroll",
    [theme.breakpoints.down("xs")]: {
      width: "95%",
      height: "90vh",
    },
  },
  alert: {
    display: "flex",
    padding: "0.5rem 1rem",
    alignItems: "center",
    backgroundColor: theme.greenStyle.main,
    borderRadius: "4px",
    boxShadow: "4px 4px 10px #000",
  },
  done: {
    marginLeft: theme.spacing(1),
    color: theme.text.white,
  },
}));

export default useStyle;
