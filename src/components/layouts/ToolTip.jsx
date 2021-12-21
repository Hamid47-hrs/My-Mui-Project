import { useState } from "react";
import { Tooltip, Fab, Modal, Container } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import useStyle from "../styles/ToolTip"
import ModalField from "./ModalField";

export default function ToolTip() {
  const classes = useStyle();
  const [open, setOpen] = useState(false);
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
          <ModalField />
        </Container>
      </Modal>
    </>
  );
}
