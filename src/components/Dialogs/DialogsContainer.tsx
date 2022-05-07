import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";



let mapStateToProps = (state: any) => {
    return {
        dialogsPage:state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewMessageBody: (newBody: string) =>{ dispatch(updateNewMessageBodyActionCreator(newBody))},
        sendMessage: () =>{ dispatch(sendMessageActionCreator())}
    }
}

const AuthRedirectComponent = withAuthRedirect (Dialogs);

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);