import React from 'react';
import s from './ProfileInfo.module.css'


export function ProfileInfo() {
    return (
        <div>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt='img' width={1100}/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

