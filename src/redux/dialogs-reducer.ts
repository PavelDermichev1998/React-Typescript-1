import {ActionsType, DialogsPageType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: DialogsPageType, action: ActionsType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody
            return state;
        case SEND_MESSAGE:
            let newBody = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: newBody});
            return state;
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyActionCreator = (newBody: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody} as const);