import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'

export function Header(props: any) {
    return (

        <header className={s.header}>
            <img
                src="https://cdn.shopify.com/shopifycloud/hatchful_web_two/bundles/aff2c7c41798a9e8d510293d676b1308.png"
                alt="img"/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>

    );
}