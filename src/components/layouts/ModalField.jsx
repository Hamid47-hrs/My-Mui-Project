import { useState } from "react";
import {
  TextField,
  MenuItem,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  FormLabel,
} from "@material-ui/core";
import useStyle from "../styles/ModalField";

export default function ModalField() {
  const classes = useStyle();
  const [value, setValue] = useState("");
  
  return (
    <form className={classes.form}>
      <div>
        <TextField placeholder="عنوان پست" className={classes.title} />
      </div>
      <div>
        <TextField
          id="outlined-multiline-static"
          label="محتوای پست"
          multiline
          row={4}
          variant={"outlined"}
          placeholder="داستان خودت رو بنویس..."
          className={classes.text}
        />
      </div>
      <div>
        <TextField select label="نوع دسترسی" className={classes.menu}>
          <MenuItem value="public">عمومی</MenuItem>
          <MenuItem value="private">خصوصی</MenuItem>
          <MenuItem value="friend">دوستان</MenuItem>
        </TextField>
      </div>
      <div className={classes.label}>
        <FormLabel component="legend">
          تعیین سطح دسترسی برای کامنت گذاری.
        </FormLabel>
        <RadioGroup
          aria-label="comments"
          name="comment1"
          value={value}
          onChange={setValue}
          className={classes.radioG}
        >
          <FormControlLabel
            value="public"
            control={<Radio size="small" />}
            label="دسترسی آزاد"
            className={classes.radioLabel}
          />
          <FormControlLabel
            value="followers"
            control={<Radio size="small" />}
            label="فقط برای دنبال کنندگان"
            className={classes.radioLabel}
          />
          <FormControlLabel
            value="friend"
            control={<Radio size="small" />}
            label="دسترسی برای دوستان"
            className={classes.radioLabel}
          />
          <FormControlLabel
            value="closeFreind"
            control={<Radio size="small" />}
            label="دسترسی برای دوستان نزدیک"
            className={classes.radioLabel}
          />
        </RadioGroup>
      </div>
      <div className={classes.buttons}>
        <Button variant="outlined" color="primary" className={classes.button}>
          ارسال پست
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
        >
          انصراف
        </Button>
      </div>
    </form>
  );
}
