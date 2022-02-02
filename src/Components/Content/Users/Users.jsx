import React from "react";
import style from "./Users.module.css"
import userPhoto from "../../../Alfa_159_1.png"
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize); // pagesCount слишком большой и если его
    //использовать в лоб, кол страниц не отображается,
    //todo сделать с сокращением 1 2 3...последняя страница
    let pages = [];
    for (let i = 1; i <= 20; i++) {
        pages.push(i);
    }

    return <div className={style.usersPage}>
        {pages.map(p => {
            return <span className={props.currentPage === p && style.selectedPage}
                         onClick={() => {
                             props.onPageChanged(p, props.pageSize)
                         }}>{p}</span>
        })}

        {props.users.map(u => <div key={u.id} className={style.style}>
            <div>
                <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={""}/>
                </NavLink>
            </div>

            <div>
                <div className={style.date}>{u.name}</div>
                <div className={style.date}>
                    <span>{"u.localisation.city  + u.localisation.country"}</span></div>
            </div>
            <div>
                {u.followed ?
                    <button disabled={props.followingInProgress.includes(u.id)} className={style.button}
                            onClick={() => {
                                props.unfollow(u.id);
                            }}>delete from friends</button> :
                    <button disabled={props.followingInProgress.includes(u.id)} className={style.button}
                            onClick={() => {
                                props.follow(u.id);
                            }}>add to friends</button>}
            </div>
        </div>)}
    </div>
}

export default Users