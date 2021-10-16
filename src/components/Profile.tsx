import React from 'react';
import s from './Profile.module.css'

export function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg'/>
            </div>
            <div>
                ava + discription
            </div>
            <div>
                my post
                <div>
                    new post
                </div>
                <div className='posts'>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
        </div>
    );
}