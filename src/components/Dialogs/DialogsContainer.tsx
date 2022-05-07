import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state: any) => {
    return {
        dialogsPage:state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (newBody: string) =>{ dispatch(updateNewMessageBodyActionCreator(newBody))},
        sendMessage: () =>{ dispatch(sendMessageActionCreator())}
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);