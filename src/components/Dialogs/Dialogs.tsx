import React from 'react';
import s from './Dialogs.module.css'


export function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    Dima
                </div>
                <div className={s.dialog}>
                    Andrey
                </div>
                <div className={s.dialog}>
                    Lena
                </div>
                <div className={s.dialog}>
                    Vit
                </div>
                <div className={s.dialog}>
                    Pasha
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>It asd</div>
                <div className={s.message}>Yes</div>
            </div>
        </div>
    );
}