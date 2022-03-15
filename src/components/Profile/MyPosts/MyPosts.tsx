import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsDataType} from "../../../redux/state";



type MyPostsPropsType = {
    profilePage: Array<postsDataType>
    dispatch: (action?: any) => void
    newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {

    let postsElements = props.profilePage
        .map(p => <Post key = {p.id} message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef<HTMLTextAreaElement>();


    let addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }
    let onPostChange = () => {
            let text = newPostElement.current?.value;
            let action = {
                type: 'UPDATE-NEW-POST-Text',
                postMessage: text
            }
            props.dispatch(action);
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

