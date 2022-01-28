import React from "react";
import style from "../Content/Users/Users.module.css";
import preloader from "../../preloader.gif"

let Preloader = (props) => {
    return <div>
        <img src={preloader} className={style.fetching} alt={""}/>
    </div>
}

export default Preloader;