import React from 'react'
import { Dialog, DialogTitle, IconButton, DialogContent, Icon } from '@mui/material';
import { useState } from 'react';

const Start = () => {

    const [ open, setOpen ] = useState(true)

    const onClose = () => {
        setOpen(false)
    }
    

return (
    <Dialog PaperProps={{
        style: {
        width: '500px',
        height: "300px",
        boxSizing: "border-box",
        borderRadius: "5px"
        },
    }} open={open}>
        <DialogTitle>Welcome <IconButton onClick={onClose}  sx={{position: "absolute", right:"16px" }}><Icon>close</Icon></IconButton> </DialogTitle>
        <DialogContent> 
        <div>
            <p> Welcome to Johnny's portfolio.</p>
            <p> Here you will find projects and sites made by Johnny.</p>
        </div>
        </DialogContent>
    </Dialog>
    )
}

export default Start