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

    }
    dialogsPage: {
        messages: Array<messagesDataType>
        dialogs: Array<dialogsDataType>
    }
}
export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 22},
            {id: 2, message: 'I`m normal', likesCount: 13},
        ],
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
    }
}

export let addPost = () => {
    let newPost: any = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost)
}

