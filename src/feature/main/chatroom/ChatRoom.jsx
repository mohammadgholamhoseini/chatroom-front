import React, {useEffect, useState} from "react";
import {Grid, IconButton} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import OnlineUsersList from "./OnlineUsersList";
import ChatMessage from "./ChatMessage";
import ChatFooter from "./ChatFooter";
import {useSelector, useDispatch} from "react-redux";
import {chatMessage, pushMessage, sendMessage} from "./chatMessageSlice";
import SockJS from "sockjs-client";
import {socketPublicUrl, socketUrl} from "../../../data/api";
import {over} from "stompjs";

export default function ChatRoom() {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(true);
    const chatMessageState = useSelector(chatMessage)
    const [stompClient, setStompClient] = React.useState(chatMessageState.stompClient)
    const [isFirstTime, setIsFirstTime] = React.useState(false)
    useEffect(() => {
        var socket = new SockJS(socketUrl);
        setStompClient(over(socket));
        setIsFirstTime(true)
    }, [])


    useEffect(() => {
        if (isFirstTime){
            stompClient.connect({}, function (frame) {
                stompClient.subscribe(socketPublicUrl, function (chatMessage) {
                    dispatch(pushMessage(JSON.parse(chatMessage.body)))
                })
            });
        }

    }, [isFirstTime])


    const handleList = () => {
        setOpen(prevState => !prevState);
    }

    function sendNewMessage(newMessage) {
        stompClient.send("/app/message", {}, JSON.stringify(newMessage));
        // dispatch(sendMessage(message))
    }

    return (
        <div>
            <Grid container>
                <Grid item xs={5} sm={3} md={2}>
                    <OnlineUsersList userList={open}/>
                </Grid>
                <Grid item xs={1} sm={1} md={1}>
                    <IconButton className="userMenuIcon" onClick={handleList}
                                sx={{marginLeft: open ? "1px" : "-100px", position: "fixed"}}>
                        <MenuIcon/>
                    </IconButton>
                </Grid>
                <Grid item xs={6} sm={8} md={9} sx={{
                    display: 'flex',
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}>
                    <Box sx={{margin: "16px"}} dir="ltr">
                        {chatMessageState.messages.map((message, index) => <ChatMessage key={index}
                                                                                        username={message.username}
                                                                                        message={message.content}
                                                                                        userImage={message.userImage}/>)}
                    </Box>
                    <ChatFooter sendMessage={sendNewMessage}/>
                </Grid>
            </Grid>

        </div>

    )
}