import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.blueStyle.lightBlue,
  },
  cardMedia: {
    height: 200,
  },
  button: {
      backgroundColor: theme.blueStyle.default,
      marginLeft: theme.spacing(2),
  }
}));

export default useStyle;
