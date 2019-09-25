import React from 'react';
import s from "./Users.module.css";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }

    return <div>

        <div>
            {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {
                                     props.onPageChanged(p);
                                 }}>{p}</span>
            })}
        </div>

        {
            props.users.map(u => <div key={u.id}  className={s.userInfo}>
                <div className={s.user}>
                    <img src={u.photos.small != null ? u.photos.small : 'https://icon2.kisspng.com/20180408/taq/kisspng-computer-icons-computer-programming-programmer-ava-mechanical-5ac9dc06d55487.4029071315231785028738.jpg'} className={s.user__photoAva} alt=''/>

                    {u.followed
                        ? <button onClick={ () => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={ () => { props.follow(u.id) }}>follow</button>}
                </div>
                <div className={s.aboutUser}>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                    <div>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;