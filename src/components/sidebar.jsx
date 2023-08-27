import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

export const Sidebar = () => {
    return(
        <Box 
            bgcolor="skyblue" 
            flex={1}
            p={2} 
            sx={{ display: { xs: "none", sm: "block" } }}>

            <List>
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#home">
                        <ListItemIcon>
                            <HomeIcon />                
                        </ListItemIcon>
                    <ListItemText primary="Homepage" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}