import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsDataType} from "../../redux/store";


type ProfilePropsType = {
    profilePage: { posts: Array<PostsDataType> }
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