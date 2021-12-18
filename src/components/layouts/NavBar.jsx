import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@material-ui/core";
import {
  Search,
  NotificationsActiveOutlined,
  MailOutlined,
  Cancel,
} from "@material-ui/icons";
import useStyle from "../styles/NavBar";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyle({ open });

  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5" component="h1" className={classes.LogoLg}>
            وبلاگ باترفلای
          </Typography>
          <Typography variant="h5" component="h1" className={classes.LogoSm}>
            باترفلای
          </Typography>
          <div className={classes.searchIcon}>
            <Search onClick={() => setOpen(true)} />
            <InputBase
              placeholder="جستوجو کنید..."
              className={classes.search}
            />
            <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
          </div>
          <div className={classes.icons}>
            <Badge badgeContent={1} color="error" className={classes.icon}>
              <MailOutlined />
            </Badge>
            <Badge badgeContent={1} color="error" className={classes.icon}>
              <NotificationsActiveOutlined />
            </Badge>
            <Avatar
              alt="profile-icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzAFp0zb3cTljbXKwEf7jdWQeU2RLWkyzBg&usqp=CAU"
              className={(classes.icon, classes.img)}
            />
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};
export default NavBar;
