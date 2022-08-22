import React from 'react';
import '../App.css';
import { useState, useEffect} from 'react';
import { Dialog, DialogTitle } from "@mui/material";
let imageList = [""];
function ProjectDialog(props){
    const [open, setOpen] = useState(true);
    useEffect(() => {
      console.log(open);
      console.log('a');
    }, [open]);
    const handleClose = (value) => {
      setOpen(false);
      props.setParentNum('false');

    };
    return(
      <div>
        <Dialog
            open={open}
            onClose={handleClose}
        >
          <DialogTitle>Project Title</DialogTitle>
        </Dialog>
      </div>
    )
}
export default ProjectDialog;