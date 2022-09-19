import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    stompClient: null,
    message: {
        username: "",
        content: "",
        userImage: ""
    },
    messages: [
    ]
}

const chatMessageSlice = createSlice({
    name: 'chatMessage',
    initialState,
    reducers: {
        pushMessage: (state, action) => {
            state.messages.push(action.payload)
        }
    }
})
export const chatMessage = (state) => state.chatMessage;

export const {sendMessage, pushMessage} = chatMessageSlice.actions

export default chatMessageSlice.reducer