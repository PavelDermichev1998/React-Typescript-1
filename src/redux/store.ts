import {addPostActionCreator, profileReducer, updateNewPostTextActionCreator} from "./profile-reducer";
import {dialogsReducer, sendMessageActionCreator, updateNewMessageBodyActionCreator} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow
} from "./users-reducer";

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsDataType = {
    id: number
    name: string
}
export type MessagesDataType = {
    id: number
    message: string
}
export type ProfilePageType = {
        posts: Array<PostsDataType>
        newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsDataType>
    messages: Array<MessagesDataType>
    newMessageBody: string
}
export type StateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: {}
}

export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostTextActionCreator>
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>






export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 22},
                {id: 2, message: 'I`m normal', likesCount: 13},
            ],
            newPostText: 'asd'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state
    },
    subscribe(observer: () => void) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
}



