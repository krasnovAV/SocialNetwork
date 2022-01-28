import React from "react";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../../redux/messagePageReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },

        updateMessageBody: (body) => {
            dispatch(updateNewMessageBodyActionCreator(body));
        },
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;
