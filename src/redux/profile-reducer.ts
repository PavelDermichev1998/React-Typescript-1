import {ActionsType, PostsDataType, ProfilePageType} from "./store";
import {usersAPI} from "../api/api";


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 22},
        {id: 2, message: 'I`m normal', likesCount: 13},
    ],
    newPostText: 'asd',
    profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsDataType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.postMessage
            }
        case SET_USER_PROFILE:
            return {
                ...state, profile: action.profile
            }
        default:
            return state;
    }

}

export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostTextActionCreator = (text: string) =>
    ({type: UPDATE_NEW_POST_TEXT, postMessage: text} as const);
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const);
//thunk
export const getUserProfile = (userId: string) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        });
}

