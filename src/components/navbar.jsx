import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, styled, Box, InputBase, Badge, Avatar, MenuItem, Menu, Switch } from '@mui/material';
import { Mail, Notifications } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu';
import ModeNightIcon from '@mui/icons-material/ModeNight';

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

export const Navbar = ({ mode, setMode }) => {

    const [open, setOpen ] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const openSide = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs:"none", sm: "block" }}}>Development</Typography>                            
                    <MenuIcon
                        sx={{ display: {  lg: "none", md: "none", sm: "none" }, cursor: "pointer"}}
                        id="basic-button"
                        aria-controls={openSide ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={openSide ? 'true' : undefined}
                        onClick={handleClick}/>
                    <Menu
                        id="basic-menu"
                            anchorEl={anchorEl}
                            open={openSide}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }} >

                            <MenuItem onClick={handleClose}>Homepage</MenuItem>
                            <MenuItem onClick={handleClose}>Pages</MenuItem>
                            <MenuItem onClick={handleClose}>Groups</MenuItem>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>Friends</MenuItem>
                            <MenuItem onClick={handleClose}>Marketplace</MenuItem>
                            <MenuItem onClick={handleClose}>Settings</MenuItem>
                            <MenuItem ><ModeNightIcon/><Switch onChange={ ev => setMode( mode === "light" ? "dark" : "light") }/></MenuItem>
                    </Menu>
                    
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar onClick={ e => setOpen(true) } sx={{width: 30, height: 30, }}  src=""/>
                </Icons>
                <UserBox onClick={ e => setOpen(true) }>
                    <Avatar sx={{width: 30, height: 30, cursor:"pointer"}}  src=""/>
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
                <Badge badgeContent={4} color="error" sx={{ display: {  lg: "none", md: "none", sm: "none" }, cursor: "pointer", mt:1, ml: 2}}>
                    <Mail sx={{ display: {  lg: "none", md: "none", sm: "none" }, cursor: "pointer" }}/>
                </Badge>
                <Badge badgeContent={4} color="error" sx={{ display: {  lg: "none", md: "none", sm: "none" }, cursor: "pointer", mt:1, ml: 2}}>
                    <Notifications sx={{ display: {  lg: "none", md: "none", sm: "none" }, cursor: "pointer" }}/>
                </Badge>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}