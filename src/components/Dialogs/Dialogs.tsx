import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css'


type DialogItemPropsType = {
    name: string
    id: string
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={s.message}>{props.message}</div>

    )
}


export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Dima' id='1'/>
                <DialogItem name='Victor' id='2'/>
                <DialogItem name='Pasha' id='3'/>
                <DialogItem name='Andrey' id='4'/>
                <DialogItem name='Luba' id='5'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi'/>
                <Message message='How are you?'/>
                <Message message='Not bad'/>
            </div>
        </div>
    );
}