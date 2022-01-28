import React from "react";
import style from "./Posts.module.css";

const Posts = (props) => {

    let posts = props.postItems.map(p => (
        <div className={style.post}>
            <div>
                <img src={p.img} alt=""/>
                <div>{p.text}</div>
            </div>
        </div>))
    return (
        [posts]
    )
}

export default Posts;