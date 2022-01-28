const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
    messages: [
        {id: "1", text: "Hi"},
        {id: "1", text: "How are you?"},
        {id: "1", text: "Hello"},
        {id: "2", text: "I'm fine"},
        {id: "3", text: "And you?"},
        {id: "3", text: "HelloVasya!"},
        {id: "4", text: "I'm fined you"},
        {id: "5", text: "And you addecdsvfbgn"},
    ],
    dialogs: [
        {
            id: "1",
            avatar: "https://avatars.mds.yandex.net/get-kinopoisk-post-img/1345014/95e44cfe0abaddb03e43181d31a9f788/960x540",
            name: "Ivan",
        },
        {
            id: "2",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJTdtFY2MkF-g2DL99kH7h6NLDIs1a-t0_QQ&usqp=CAU",
            name: "Egor",
        },
        {
            id: "3",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFxaeLj7SEZWFgfnL-AtMObEBSXKW3qaT_pA&usqp=CAU",
            name: "Masha",
        },
        {
            id: "4",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkFkZ9hsR_cQ6U93_dH1M6XKU8UANc9wrjA&usqp=CAU",
            name: "Sveta",
        },
        {
            id: "5",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjJlOiQCvzTYlqVB-Cs6U3fhBq8HgIitjnBA&usqp=CAU",
            name: "Igor",
        },
    ],
    newMessageBody: "",
}

const messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.text,
            };

        case SEND_MESSAGE:
            let newMessage = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: "3", text: newMessage}],
                newMessageBody: "",
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, text: body});

export default messagePageReducer;