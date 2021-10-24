import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {

    type postsDataType = {
        id: number
        message: string
        likesCount: number
    }

    let posts: Array<postsDataType> = [
        {id: 1, message: 'Hi, how are you?', likesCount: 22},
        {id: 2, message: 'I`m normal', likesCount: 13},
    ];

    let postsElements = posts
        .map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>

    );
}