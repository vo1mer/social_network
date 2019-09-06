import React from 'react';
import store from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} />
        </BrowserRouter>, document.getElementById('root'));
};


rerenderEntireTree(store.getState());

store.subscriber(rerenderEntireTree);