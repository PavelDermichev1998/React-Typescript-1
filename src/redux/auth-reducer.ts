import {ActionsType} from "./store";


const SET_USER_DATA = 'SET_USER_DATA'


export type UserType = {
    id: number
    photos: { small: any, large: any }
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }

}

export type InitialStateType = {
    id: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

let initialState: InitialStateType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            };
        default:
            return state;
    }

}

export const setAuthUserData = (data: { id: number, email: string, login: string }) => ({
    type: SET_USER_DATA,
    data
} as const);

