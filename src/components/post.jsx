import React from "react";
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography, Checkbox } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { red } from '@mui/material/colors';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export const Post = () => {
    return (
        <Card  sx={{margin:5}} >
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                <MoreVertIcon />
                </IconButton>
                }
                title="Mountains"
                subheader="August, 2023"
            />
            <CardMedia
                component="img"
                height="20%"
                image="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"                
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>      
        </Card>
    )
}