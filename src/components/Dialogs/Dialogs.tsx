import React from 'react';
import { DialogItem } from './DialogItem/DialogItem';
import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {dialogsDataType, messagesDataType} from "../../redux/state";




type DialogsPropsType = {
    state: {
        messages: Array<messagesDataType>
        dialogs: Array<dialogsDataType>
    }
}

export function Dialogs(props:DialogsPropsType) {

    let dialogsElements = props.state.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages
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