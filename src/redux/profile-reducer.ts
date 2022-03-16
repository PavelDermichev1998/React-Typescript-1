import {ActionsType, PostsDataType, ProfilePageType} from "./state";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.postMessage
            return state;
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, postMessage: text} as const);

