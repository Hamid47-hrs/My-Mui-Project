import React from "react";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import useStyle from "../styles/PostFeed";

export default function PostFeed() {
  const classes = useStyle();
  return (
    <Card className={classes.card}>
      <CardActionArea >
        <CardMedia 
        className={classes.cardMedia}
        image="http://dl.helpkade.com/wp-content/uploads/20200821/3-nature-wallpaper-mountain.jpg"
        title="پست اول"
        />
        <CardContent>
            <Typography gutterBottom variant="h5">پست اول</Typography>
            <Typography variant="body1">این متن برای اولین پست تهیه شده و ارزش قانونی دیگری ندارد.</Typography>
        </CardContent>
        <CardActions>
            <Button size="small" className={classes.button}>بیشتر بخوانید</Button>
            <Button size="small" className={classes.button}>اشتراک گذاری</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
