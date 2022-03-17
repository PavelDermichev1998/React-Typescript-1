import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export function DialogsContainer() {

    return <StoreContext.Consumer>
        {store => {
            let onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator())
            }
            let onNewMessageChange = (newBody: any) => {
                store.dispatch(updateNewMessageBodyActionCreator(newBody))
            }
            return <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsPage={store.getState().dialogsPage}
            />
        }
        }
    </StoreContext.Consumer>
}