import React, { useState } from "react";
import { Tooltip, Fab, Box, Typography, Modal, styled, Avatar, TextField, Stack, ButtonGroup, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import ImageIcon from '@mui/icons-material/Image';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyledModal = styled(Modal)({
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display:"flex",
    alignItems: "center",
    gap:"10px",
    marginBottom:"20px"
});

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
                        <Avatar 
                            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span">
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{width:"100%"}}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3} >
                        <EmojiEmotionsIcon color="primary"/>
                        <ImageIcon color="secondary"/>
                        <VideoCameraBackIcon color="sucess"/>
                        <PersonAddIcon color="error"/>
                    </Stack>
                    <ButtonGroup 
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button>
                            Post
                        </Button>
                        <Button>
                            <DateRangeIcon/>
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
};

