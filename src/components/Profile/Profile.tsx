import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postsDataType} from "../../redux/state";



type ProfilePropsType = {
    state: {posts: Array<postsDataType>}
    addPost: any
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.state.posts} addPost={props.addPost}/>
        </div>
    );
}