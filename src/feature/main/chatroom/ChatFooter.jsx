import {IconButton, InputAdornment, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React from "react";


export default function ChatFooter(props) {
    const [message, setMessage] = React.useState({
        username:"",
        content:"",
        userImage:""
    })
    function inputChange(event) {
        const {value} = event.target
        setMessage(prevState => {
            return ({
                username: "test",
                content: value,
                userImage: "tesst",
            })

        })
    }

    return (
        <div style={{marginBottom:"-64px"}}>
            <TextField
                label="پیام"
                className="chatTextField"
                variant="outlined"
                sx={{
                    margin: "16px",
                    width: "90%",
                    position:"relative"
                }}
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <IconButton dir="rtl" onClick={()=>{props.sendMessage(message)}}>
                                <SendIcon color="primary" sx={{
                                    transform: "rotate(180deg)",
                                }}/>
                            </IconButton>

                        </InputAdornment>
                    ),
                }}
                name="content"
                value={message.content}
                onChange={inputChange}
            />
        </div>
    )
}