import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(1),
    backgroundColor: theme.greenStyle.default,
  },
  cardMedia: {
    height: 200,
  },
  button: {
      backgroundColor: theme.greenStyle.main,
      marginLeft: theme.spacing(2),
  }
}));

export default useStyle;
