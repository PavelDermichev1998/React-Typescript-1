import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
let posts: Array<postsDataType> = [
    {id: 1, message: 'Hi, how are you?', likesCount: 22},
    {id: 2, message: 'I`m normal', likesCount: 13},
];

export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}
let dialogs: Array<dialogsDataType> = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Victor'},
    {id: 3, name: 'Pasha'},
    {id: 4, name: 'Andrey'},
    {id: 5, name: 'Luba'},
];
let messages: Array<messagesDataType> = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Not bed'},
    {id: 4, message: 'Oh'},
    {id: 5, message: 'Yo'},
];

ReactDOM.render(
    <React.StrictMode>
        <App
            posts={posts}
            dialogs={dialogs}
            messages={messages}
        />
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
