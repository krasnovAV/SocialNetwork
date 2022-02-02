import React from "react";
import style from "./../Messages.module.css";
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={style.user}>
            <div>
                <img className={style.avatar} src={props.avatar} alt=""/>
            </div>
            <div className={style.userName}>
                <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
            </div>
        </div>

    )
}
export default Dialog;