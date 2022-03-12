import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsDataType} from "../../../redux/state";



type MyPostsPropsType = {
    profilePage: Array<postsDataType>
    addPost: () => void
    newPostText: string
    updateNewPostText: any
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.profilePage
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: any = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        ref={newPostElement}
                        value={props.newPostText}
                        onChange={onPostChange}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

