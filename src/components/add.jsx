import React, { useState } from "react";
import { Tooltip, Fab, Box, Typography, Modal, styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
})

export const Add = () => {
    const [open, setOpen] = useState(false)
    return(
        <>
            <Tooltip onClick={ e=>setOpen(true) }
            title="Delete" 
            sx={{
                position:"fixed",
                bottom: 20,
                left:{xs:"calc(50%)", md:30},
                }} >
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={ e=>setOpen(false) }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Box 
                    width={400} 
                    height={280} 
                    bgcolor="white" 
                    p={3}
                    borderRadius={3}>
                    <Typography 
                        variant="h6" 
                        color='gray'
                        textAlign='center'
                    >
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar src=""/>        
                    </UserBox>
                </Box>
            </StyledModal>
        </>
    );
};

