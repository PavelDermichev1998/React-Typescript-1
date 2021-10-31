import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../index";



type DialogsPropsType = {
    dialogs: Array<dialogsDataType>
    messages: Array<messagesDataType>
}

export function Dialogs(props:DialogsPropsType) {

    let dialogsElements = props.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages
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