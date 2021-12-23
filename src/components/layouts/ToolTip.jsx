import { useState } from "react";
import { Tooltip, Fab, Modal, Container, Snackbar } from "@material-ui/core";
import { Add, Done } from "@material-ui/icons";
import useStyle from "../styles/ToolTip";
import ModalField from "./ModalField";

export default function ToolTip() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAtert] = useState(false);
  const callbackHandler = (childData) => {
    setOpen(childData);
  };
  const closeHandler = () => {
    setOpenAtert(false);
  };
  const showAlert = () => {
    setOpenAtert(true);
  };
  return (
    <>
      <Tooltip
        title="افزدون پست"
        arial-lable="add"
        arrow
        onClick={() => setOpen(true)}
      >
        <Fab color="secondary" className={classes.addButton}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.modalContainer}>
          <ModalField closeFunc={callbackHandler} openFunc={showAlert} />
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        open={openAlert}
        autoHideDuration={3000}
        onClose={closeHandler}
      >
        <div className={classes.alert}>
          {" "}
          <Done className={classes.done} />
          <div>پست شما با موفقیت ارسال شد!</div>
        </div>
      </Snackbar>
    </>
  );
}
