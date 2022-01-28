import React from "react";
import Dialog from "./Dialog";


const Dialogs = (props) => {
    let dialog = props.dialogs.map((d) => (<Dialog avatar = {d.avatar} name={d.name} id={d.id}/>))
    return (
        [dialog]
    )
}

export default Dialogs;