import React from "react";
import style from "./../Messages.module.css"

const MessageItem = (props) => <div  className={style.message}>{props.text}</div>

export default MessageItem;
