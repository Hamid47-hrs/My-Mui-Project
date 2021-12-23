import React from "react";
import {
  Container,
  Avatar,
  Typography,
  ImageList,
  ImageListItem,
  Box,
  List,
  ListItem,
  Divider,
  Link,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import useStyle from "../styles/LeftBar";

const LeftBar = () => {
  const classes = useStyle();

  return (
    <Container className={classes.container}>
      <Typography className={classes.title}>دوستان آنلاین</Typography>
      <AvatarGroup max={4}>
        <Avatar
          alt="Hamid Reza"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnaHs0IDNI1lLDxpB_sbtOkTRcYwKM4yGKfigED1r2S2FhxU0C7meo_eW88_7ubbjNDE&usqp=CAU"
        />
        <Avatar
          alt="Hamid Reza"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
        />
        <Avatar
          alt="Hamid Reza"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzh0FDUC7udu0cDSr2Rlq-zqNWcCcoj_8PyXZgayQllzCwrOEp5pdJxjokdEYnhnYEjTY&usqp=CAU"
        />
        <Avatar
          alt="Hamid Reza"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnaHs0IDNI1lLDxpB_sbtOkTRcYwKM4yGKfigED1r2S2FhxU0C7meo_eW88_7ubbjNDE&usqp=CAU"
        />
        <Avatar
          alt="Hamid Reza"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
        />
        <Avatar
          alt="Hamid Reza"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzh0FDUC7udu0cDSr2Rlq-zqNWcCcoj_8PyXZgayQllzCwrOEp5pdJxjokdEYnhnYEjTY&usqp=CAU"
          className={classes.images}
        />
      </AvatarGroup>
      <br />
      <Typography className={classes.title}>گالری عکس ها</Typography>
      <ImageList rowHeight={120} className={classes.imageList} cols={3}>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzh0FDUC7udu0cDSr2Rlq-zqNWcCcoj_8PyXZgayQllzCwrOEp5pdJxjokdEYnhnYEjTY&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnaHs0IDNI1lLDxpB_sbtOkTRcYwKM4yGKfigED1r2S2FhxU0C7meo_eW88_7ubbjNDE&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnaHs0IDNI1lLDxpB_sbtOkTRcYwKM4yGKfigED1r2S2FhxU0C7meo_eW88_7ubbjNDE&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbnaHs0IDNI1lLDxpB_sbtOkTRcYwKM4yGKfigED1r2S2FhxU0C7meo_eW88_7ubbjNDE&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeGxA1htxjyokog8cjut4_Ioellvu9C9-njMVVfK4774PZsMioXY5-ArAhez60Ff8E-E&usqp=CAU"
            className={classes.images}
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title}>دسته بندی موضوعات</Typography>
      <Box>
        <nav>
          <List>
            <ListItem>
              <Link
                component="button"
                href="#"
                className={classes.links}
                variant="body1"
              >
                سیاسی
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link
                component="button"
                href="#"
                className={classes.links}
                variant="body1"
              >
                علمی
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link
                component="button"
                href="#"
                className={classes.links}
                variant="body1"
              >
                فرهنگی
              </Link>
            </ListItem>
            <Divider />

            <ListItem>
              <Link
                component="button"
                href="#"
                className={classes.links}
                variant="body1"
              >
                هنری
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link
                component="button"
                href="#"
                className={classes.links}
                variant="body1"
              >
                ورزشی
              </Link>
            </ListItem>
            <Divider />
            <ListItem>
              <Link
                component="button"
                href="#"
                className={classes.links}
                variant="body1"
              >
                اجتماعی
              </Link>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Container>
  );
};

export default LeftBar;
