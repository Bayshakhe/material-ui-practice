import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import AddressInfo from "./AddressInfo";
import Education from "./Education";
import Cgpa from "./Cgpa";
import Employment from "./Employment";
import Refference from "./Refference";
import { useForm } from "react-hook-form";
import schema from "./YupValidation";
import { yupResolver } from "@hookform/resolvers/yup";

const EditFormData = ({ data }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    mode: "onChage",
    defaultValues: data,
  });
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleForm = (data) => {
    const cgpa = structuredClone(data.cgpa);
    // console.log({ cgpa });
    data.cgpa = cgpa.reduce((acc, curr) => {
      acc[curr.class_name] = curr.point;
      return acc;
    }, {});
    fetch("http://localhost:3200/info/1", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // setData(data);
        console.log(data);
      });
    // setData(data);
  };

  return (
    <div>
      <Box component="form" onSubmit={methods?.handleSubmit(handleForm)}>
        <Button variant="contained" color="warning" onClick={handleClickOpen}>
          Edit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Update you Form</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {/* personal information */}
              <PersonalInfo />

              {/* address information */}
              <AddressInfo />

              {/* education */}
              <Education />

              {/* CGPA */}
              <Cgpa />

              {/* Employment History */}
              <Employment />

              {/* Refference */}
              <Refference />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button color="error" variant="contained" onClick={handleClose}>
              Disagree
            </Button>
            <Button type="submit" color="primary" variant="contained" autoFocus>
              Update
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
};

export default EditFormData;
