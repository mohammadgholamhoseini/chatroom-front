import {IconButton, InputAdornment, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Box from "@mui/material/Box";
import React from "react";

export default function ChatFooter() {
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
                            <IconButton dir="rtl">
                                <SendIcon color="primary" sx={{
                                    transform: "rotate(180deg)",
                                }}/>
                            </IconButton>

                        </InputAdornment>
                    ),
                }}
            />
        </div>
    )
}