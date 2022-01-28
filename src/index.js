import reportWebVitals from './reportWebVitals';
import React from 'react';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import * as ReactDOM from "react-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";


export let rerender = () => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
            </React.StrictMode>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerender();

store.subscribe(() => {
    rerender();
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

