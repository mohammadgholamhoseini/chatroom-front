import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Avatar, Grid} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import React from "react";

export default function OnlineUsersList(props){
    return(
        <div>
            {props.userList && <Box sx={{borderRight: 0.5, borderColor: "#EFEFEF", backgroundColor: "#fff"}}>
                <List sx={{height: '70vh', display: "block"}} dir="rtl">
                    {["askldjflkja safdsfsadf", "aksdjflkj"].map((item, index) => (
                        <ListItem key={item} disablePadding>
                            <ListItemButton sx={{height: "64px",borderBottom:"0.5px solid #EFEFEF"}}>
                                <ListItemIcon sx={{marginLeft: "10px"}}>
                                    <Avatar/>
                                </ListItemIcon>
                                <ListItemText primary={item} sx={{
                                    display: 'flex',
                                    justifyContent: "start",
                                    justifyItems: "end"
                                }}/>
                            </ListItemButton>
                            <Divider sx={{borderBottom: 0.5, borderColor: "#EFEFEF"}}/>
                        </ListItem>
                    ))}
                </List>
            </Box>}
        </div>


    )
}