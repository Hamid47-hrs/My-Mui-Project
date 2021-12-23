import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
  },
  title: {
    fontWeight: 500,
    color: "#555",
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
  imageList: {
    marginBottom: theme.spacing(1),
  },
  images: {
    left: "auto",
    top: 0,
    right: "50%",
    transform: "translateX(50%)",
  },
}));

export default useStyle;
