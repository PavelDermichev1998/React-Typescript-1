import {ActionsType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'

export type UserType = {
    id: number
    photos: { small: any, large: any }
    followed: boolean
    name: string
    status: string
    location: { city: string, country: string }

}

export type InitialStateType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

let initialState: InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT:{
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
            return state;
    }

}

export const followAC = (userId: number) => ({type: FOLLOW, userId} as const);
export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId} as const);
export const setUsersAC = (users: Array<UserType>) => ({type: SET_USERS, users} as const);
export const setCurrentPageAC = (currentPage:number) => ({type: SET_CURRENT_PAGE, currentPage} as const);
export const setTotalUsersCountAC = (totalUsersCount:number) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount} as const);

