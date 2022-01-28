import React from "react";
import MessageItem from "./MessageItem";

const Message = (props) => {
    let mess = props.messages.map((m) => (<MessageItem text={m.text}/>))

    return (
        [mess]
    )
}


export default Message;