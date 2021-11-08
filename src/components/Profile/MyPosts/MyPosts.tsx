import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsDataType} from "../../../redux/state";



type MyPostsPropsType = {
    posts: Array<postsDataType>
    addPost: any
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: any = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}/>
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