import React from "react";
import { Tooltip, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export const Add = () => {
    return(
        <>
        <Tooltip 
        title="Delete" 
        sx={{
            position:"fixed",
            bottom: 20,
            left:{xs:"calc(50%)", md:30},
            }} >
            <Fab color="primary" aria-label="add">
                <AddIcon />
            </Fab>
      </Tooltip></>
    )
}

