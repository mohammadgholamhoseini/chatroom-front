import {Avatar, Grid, Typography} from "@mui/material";
import ReplyIcon from '@mui/icons-material/Reply';
import React from "react";
import IconButton from "@mui/material/IconButton";

export default function ChatMessage(props){
    return(
        <div style={{marginBottom:"32px"}}>
            <Grid container >
                <Grid md={0.75}>
                    <Avatar alt="Remy Sharp" src={props.userImage} />
                    <IconButton sx={{marginTop:"32px"}}>
                        <ReplyIcon color="primary" />
                    </IconButton>

                </Grid>
                <Grid md={11}>
                    <Typography variant="subtitle2" sx={{fontWeight:"bold"}} gutterBottom> {props.username}</Typography>
                    <Typography sx={{textAlign:"right"}}> {props.message}</Typography>

                </Grid>

            </Grid>
        </div>
    )
}