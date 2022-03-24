import {ActionsType, DialogsPageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Victor'},
        {id: 3, name: 'Pasha'},
        {id: 4, name: 'Andrey'},
        {id: 5, name: 'Luba'},
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Not bed'},
        {id: 4, message: 'Oh'},
        {id: 5, message: 'Yo'},
    ],
    newMessageBody: ''
}

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsType):DialogsPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newBody
            };
        case SEND_MESSAGE:
            let newBody = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: newBody}]
            };

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyActionCreator = (newBody: string) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, newBody: newBody} as const);