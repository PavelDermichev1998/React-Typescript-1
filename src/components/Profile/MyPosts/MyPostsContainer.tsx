import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";


type MyPostsContainerPropsType = {
   store: StoreType
}

export function MyPostsContainer(props: MyPostsContainerPropsType) {
    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }
    let onPostChange = (text: string) => {
        if (text) {
            props.store.dispatch(updateNewPostTextActionCreator(text));
        }
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profilePage.posts}
                 newPostText={state.profilePage.newPostText}
        />
    );
}

