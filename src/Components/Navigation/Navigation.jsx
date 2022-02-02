import React from "react";
import style from "./Navigation.module.css"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return(
        <div className={style.nav}>
            <ul>
                <li><NavLink to='/messages' activeClassName={style.active}>Messages</NavLink></li>
                <li><NavLink to='/profile' activeClassName={style.active}>Profile</NavLink></li>
                <li><NavLink to='/users' activeClassName={style.active}>Users</NavLink></li>
                <li><NavLink to='/news' activeClassName={style.active}>News</NavLink></li>
                <li><NavLink to='/friends' activeClassName={style.active}>Friends</NavLink></li>
                <li><NavLink to='/music' activeClassName={style.active}>Music</NavLink></li>
            </ul>
        </div>
    )
}

export default Navigation;