import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt='img'/>
            </div>
            <div>
                ava + discription
            </div>
            <MyPosts/>
        </div>
    );
}