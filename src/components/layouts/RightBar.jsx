import React from "react";
import { Container, Typography } from "@material-ui/core";
import { Home, Person, List, PhotoCamera, PlayCircleOutlineOutlined, TabletMac, Bookmark, Storefront, Settings, ExitToApp } from "@material-ui/icons";
import useStyle from "../styles/RightBar";

const RightBar = () => {
  const classes = useStyle();
  return (
    <Container className={classes.contianer}>
      <div className={classes.iconContainer}>
        <Home className={classes.icons} />
        <Typography className={classes.text}>خانه</Typography>
      </div>
      <div className={classes.iconContainer}>
        <Person className={classes.icons} />
        <Typography className={classes.text}>پنل کاربری</Typography>
      </div>
      <div className={classes.iconContainer}>
        <List className={classes.icons} />
        <Typography className={classes.text}>لیست اعضا</Typography>
      </div>
      <div className={classes.iconContainer}>
        <PhotoCamera className={classes.icons} />
        <Typography className={classes.text}>تصاویر</Typography>
      </div>
      <div className={classes.iconContainer}>
        <PlayCircleOutlineOutlined className={classes.icons} />
        <Typography className={classes.text}>فیلم ها</Typography>
      </div>
      <div className={classes.iconContainer}>
        <TabletMac className={classes.icons} />
        <Typography className={classes.text}>نسخه تلفن همراه</Typography>
      </div>
      <div className={classes.iconContainer}>
        <Bookmark className={classes.icons} />
        <Typography className={classes.text}>علاقه مندی ها</Typography>
      </div>
      <div className={classes.iconContainer}>
        <Storefront className={classes.icons} />
        <Typography className={classes.text}>فروشگاه</Typography>
      </div>
      <div className={classes.iconContainer}>
        <Settings className={classes.icons} />
        <Typography className={classes.text}>تنظیمات</Typography>
      </div>
      <div className={classes.iconContainer}>
        <ExitToApp className={classes.icons} />
        <Typography className={classes.text}>خروج</Typography>
      </div>
    </Container>
  );
};

export default RightBar;
