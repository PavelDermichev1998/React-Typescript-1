import React from "react";
import styles from "./users.module.css";
import {UsersPropsType} from "./UsersContainer";

export let Users = (props: UsersPropsType) => {
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://static.wikia.nocookie.net/battleraprus/images/a/a7/Pasha_Texnik.jpg/revision/latest/top-crop/width/360/height/450?cb=20200324190149&path-prefix=ru',
                followed: false,
                fullName: 'Dmitriy',
                status: 'I am a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://static.wikia.nocookie.net/battleraprus/images/a/a7/Pasha_Texnik.jpg/revision/latest/top-crop/width/360/height/450?cb=20200324190149&path-prefix=ru',
                followed: true,
                fullName: 'Alexandr',
                status: 'Hello world',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://static.wikia.nocookie.net/battleraprus/images/a/a7/Pasha_Texnik.jpg/revision/latest/top-crop/width/360/height/450?cb=20200324190149&path-prefix=ru',
                followed: false,
                fullName: 'Kirill',
                status: 'Good buy',
                location: {city: 'Kiev', country: 'Ukraine'}
            }
            ]
        )
    }
    return (
        <div>
            {props.usersPage.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unFollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)}
        </div>
    )
}