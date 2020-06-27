import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import './reset.st.css';
import store from "./store";
import {Provider} from "react-redux";

const container = document.body.appendChild(document.createElement('div'));
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    container
);
