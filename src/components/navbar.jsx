import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, MenuItem, Menu } from '@mui/material';
import { Pets, Mail, Notifications } from '@mui/icons-material'

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
    display:"none", 
    gap: "20px", 
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({ 
    display:"flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    }    
}));

export const Navbar = () => {
    const [open, setOpen ] = useState(false);
    return(
        <AppBar position="sticky">
           <StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs:"none", sm: "block" }}}>William Dev</Typography>
            <Pets sx={{ display: { xs:"block", sm:"none" }}}/>
            <Search><InputBase placeholder="search..." /></Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={4} color="error">
                    <Notifications />
                </Badge>
                <Avatar onClick={ e => setOpen(true) } sx={{width: 30, height: 30}}  src=""/>
            </Icons>
            <UserBox onClick={ e => setOpen(true) }>
                <Avatar sx={{width: 30, height: 30}}  src=""/>
                <Typography variant="span" >John</Typography>
            </UserBox>
        </StyledToolbar>
           <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            open={open}
            onClose={ e => setOpen(false) }            
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
        </AppBar>
    )
}