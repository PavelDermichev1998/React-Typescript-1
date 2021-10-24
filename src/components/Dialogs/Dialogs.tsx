import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


type DialogItemPropsType = {
    name: string
    id: number
}

function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    id: number
    message: string
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
    let dialogsData: Array<dialogsDataType> = [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Luba'},
    ];

    type messagesDataType = {
        id: number
        message: string
    }
    let messagesData: Array<messagesDataType> = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Not bed'},
        {id: 4, message: 'Oh'},
        {id: 5, message: 'Yo'},
    ];

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id}/>
                <Message message={messagesData[1].message} id={messagesData[1].id}/>
                <Message message={messagesData[2].message} id={messagesData[2].id}/>
            </div>
        </div>
    );
}