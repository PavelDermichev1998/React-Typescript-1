export type postsDataType = {
    id: number
    message: string
    likesCount: number
}
export type dialogsDataType = {
    id: number
    name: string
}
export type messagesDataType = {
    id: number
    message: string
}
export type stateType = {
    profilePage: {
        posts: Array<postsDataType>
        newPostText: string

    }
    dialogsPage: {
        messages: Array<messagesDataType>
        dialogs: Array<dialogsDataType>
    }
    sidebar: {}
}

export type storeType = {
    _state: stateType
    _callSubscriber: (a: stateType) => void
    getState: () => stateType
    subscribe: (observer: any) => void
    dispatch: (action: any) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let store: storeType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 22},
                {id: 2, message: 'I`m normal', likesCount: 13},
            ],
            newPostText: 'asd'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Not bed'},
                {id: 4, message: 'Oh'},
                {id: 5, message: 'Yo'},
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Victor'},
                {id: 3, name: 'Pasha'},
                {id: 4, name: 'Andrey'},
                {id: 5, name: 'Luba'},
            ],
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer: any) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: postsDataType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.postMessage
            this._callSubscriber(this._state)
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, postMessage: text});