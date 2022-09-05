import {toast} from "react-toastify";
import {SUCCESS_CREATE} from "./messages";

export const successMessage = (messageArr)=>{
   messageArr.map(message=> toast.success(message))
}

export const errorMessage = (e)=>{
    e.response.data.message.map(message => toast.error(message.title))
}