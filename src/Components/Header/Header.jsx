import React from "react";
import style from "./Header.module.css"
import NavLink from "react-router-dom/es/NavLink";

const Header = (props) => {
    return (
        <div className={style.header}>
            <div className={style.headItems}>
                <div>
                    ВЗасаде
                </div>
                <div>
                    {props.id}
                </div>
                <div className={style.loginBlock}>
                    {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
                    {/* если мы залогинены isAuth = true, покажем props.login иначе ссылку на логин*/}
                    {/*<form action="#" method='get'>
                        <input type="text" name="Поиск" value="Поиск"/>
                    </form>*/}
                </div>
            </div>
        </div>
    )
}

export default Header;

