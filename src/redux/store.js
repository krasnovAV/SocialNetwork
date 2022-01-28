
import messagePageReducer from "./messagePageReducer";
import {rerender} from "../index";
import profilePageReducer from "./profilePageReducer";

let store = {
    _state: {
        profilePage: {
            postItems: [
                {
                    img: "https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg",
                    text: "dsfdgfh",
                },
                {
                    img: "none",
                    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi," +
                        " architectoasperiores consequatur culpa dolore doloremque eveniet id illum itaque " +
                        "molestiae nobis quibusdam,quisquam, ratione saepe soluta ullam unde veniam?",
                },
                {
                    img: "data:image/jpeg;base64,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",
                    text: "none",
                },
            ],
            profileInfo: [
                {
                    info: "Школа",
                    item: "№1",
                },
                {
                    info: "институт",
                    item: "NSTU",
                },
                {
                    info: "работа",
                    item: "job",
                },
                {
                    info: "книги",
                    item: "books",
                },
                {
                    info: "хобби",
                    item: "hobbies",
                },
            ],
            newPostBody: "",
        },
        messagePage: {
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
    },

    getState() {
        return this._state;
    },

    rerender() {
        console.log("");
    },

    subscribe(observer) {
        this.rerender = observer;
    },

    dispatch(action) {
        /*
        this._state.profilePage = profilePageReducer(this._state.profilePage, action); почему-то не работает
        ругается, что  this._state undefined
        this.profilePage = profilePageReducer(this.profilePage, action); не работает, видимо с новыми изменениями
        получается что в reducer передаём ссылку на часть объекта _state, в reducer он меняется и нет необходимости
        в return. Т.Е. меняем сам объект если в reducer попадает нужный action. Это уже похоже больше на ООП.
        */

        profilePageReducer(this.profilePage, action);
        messagePageReducer(this.messagePage, action);

        rerender(this._state);
    },
}

export default store;

