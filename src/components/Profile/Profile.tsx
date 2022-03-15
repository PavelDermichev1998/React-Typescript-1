import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: { posts: Array<postsDataType> }
    dispatch: (action?: any) => void
    newPostText: string
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage.posts}
                dispatch={props.dispatch}
                newPostText={props.newPostText}
            />
        </div>
    );
}