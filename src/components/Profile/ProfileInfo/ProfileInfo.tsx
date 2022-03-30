import React from 'react';
import s from './ProfileInfo.module.css'
import {Preloader} from "../../Common/Preloader/Preloader";


export function ProfileInfo(props: any) {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src='https://www.imgacademy.com/themes/custom/imgacademy/images/helpbox-contact.jpg' alt='img'
                     width={1100}/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

