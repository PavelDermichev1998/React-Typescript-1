import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsDataType} from "../../../redux/store";


type MyPostsPropsType = {
    addPost: (action?: any) => void
    updateNewPostText: (action?: any) => void
    posts: Array<PostsDataType>
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current?.value;
        props.updateNewPostText(text)
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}

