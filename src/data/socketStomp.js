import SockJS from "sockjs-client";
import {over} from "stompjs";
import {socketPublicUrl, socketUrl} from "./api";

const socket = new SockJS(socketUrl);
const stompClient = over(socket);
stompClient.connect({}, function (frame) {stompClient.subscribe(socketPublicUrl)})

export default stompClient;