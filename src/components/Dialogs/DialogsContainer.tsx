import React from 'react';
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import { compose } from 'redux';



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

export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)
