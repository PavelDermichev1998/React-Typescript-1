import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: string
}

export function Post(props: PostPropsType) {
    return (
        <div className='posts'>
            <div className={s.item}>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU' alt= 'img'/>
                {props.message}
                <div>
                    <span>Like</span> {props.likesCount}
                </div>
            </div>
        </div>
    );
}