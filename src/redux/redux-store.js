import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import messagePageReducer from "./messagePageReducer";
import usersPageReducer from "./UsersPageReducer";
import authReducer from "./auth-Reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    messagePage: messagePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));//applyMiddleware - внедряем мидл слой для обработки thunk
//let store = createStore(reducers);

window.store = store; // привязали стор к глобальному окну, чтобы при отладке можно было вызвать гетСтате и посмотреть его содержимое

export default store;