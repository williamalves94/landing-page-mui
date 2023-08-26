import React from 'react';
import { AppBar, Toolbar, Typography, styled, Box } from '@mui/material';
import { Pets } from '@mui/icons-material'

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}));

const Icons = styled(Box)(({ theme }) => ({
    backgroundColor: "white",
}));

export const Navbar = () => {
    return(
        <AppBar position="stick">
           <StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs:"none", sm: "block" }}}>William Dev</Typography>
            <Pets sx={{ display: { xs:"block", sm:"none" }}}/>
            <Search>search</Search>
            <Icons>icons</Icons>
           </StyledToolbar>
        </AppBar>
    )
}