import React from "react";
import style from "./Messages.module.css"
import Message from "./Dialogs/Message";
import Dialogs from "./Dialogs/Dialogs";

const Messages = (props) => {
    let sendMessage = () => props.sendMessage();

    let updateMessageBody = (e) => {
        let body = e.target.value;
        props.updateMessageBody(body);
    }

    return (
        <div className={style.style}>
            <div>
                <Dialogs dialogs={props.messagePage.dialogs}/>
            </div>
            <div>
                <Message messages={props.messagePage.messages}/>
            </div>
            <div></div>
            <div className={style.addMessage}>
                <div>
                    <textarea placeholder={"Enter your message"}
                              onChange={updateMessageBody}
                              value={props.messagePage.newMessageBody}>Отправить</textarea>
                </div>
                <div>
                    <button onClick={sendMessage}>Отправить</button>
                </div>

            </div>
        </div>
    )
}

export default Messages;
