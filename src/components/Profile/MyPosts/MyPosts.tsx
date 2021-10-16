import React from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export function MyPosts() {
    return (
        <div>
            my post
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='Hi, how are you?'/>
            <Post message='I`m normal'/>
        </div>

    );
}