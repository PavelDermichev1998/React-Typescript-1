import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {StoreType} from "../../redux/store";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export function DialogsContainer (props: DialogsContainerPropsType) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }
    let onNewMessageChange = (newBody: any) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(newBody))
    }

    return (
       <Dialogs
           updateNewMessageBody={onNewMessageChange}
           sendMessage={onSendMessageClick}
           dialogsPage={state}
       />
    );
}