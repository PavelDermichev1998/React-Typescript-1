import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../redux/state";


type ProfilePropsType = {
    profilePage: { posts: Array<postsDataType> }
    addPost: () => void
    newPostText: string
    updateNewPostText: any
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts profilePage={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    );
}