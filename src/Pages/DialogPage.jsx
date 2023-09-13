import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

const DialogPage = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Dialog Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            delectus obcaecati dignissimos aperiam sint tempore necessitatibus,
            eligendi, qui molestias quam recusandae ea provident placeat nam
            velit quod quidem veritatis ipsum!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" color="warning" onClick={() => setOpen(false)}>
            Disagree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DialogPage;
