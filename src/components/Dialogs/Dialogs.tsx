import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    id: number
    message: string
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>

    )
}


export function Dialogs() {

    type dialogsDataType = {
        id: number
        name: string
    }
    type messagesDataType = {
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

    let dialogsElements = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = messages
        .map(m => <Message message={m.message} id={m.id}/>)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    );
}