import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={style.profileInfo}>
            <div>
                <img className={style.img}
                     src={props.profile.photos.large}
                     alt="Avatar"/>
            </div>
            <div>
                <div> Имя: {props.profile.fullName} </div>
                <div> Обо мне: {props.profile.aboutMe} </div>
                <div> lookingForAJob: {props.profile.lookingForAJob ? " да " : " нет "}</div>
                <div> lookingForAJobDescription: {props.profile.lookingForAJobDescription}</div>
                <div>
                    <div>contacts:</div>
                    <div>facebook: {props.profile.contacts.facebook}</div>
                    <div>website: {props.profile.contacts.website}</div>
                    <div>vk: {props.profile.contacts.vk}</div>
                    <div>twitter: {props.profile.contacts.twitter}</div>
                    <div>instagram: {props.profile.contacts.instagram}</div>
                    <div>youtube: {props.profile.contacts.youtube}</div>
                    <div>github: {props.profile.contacts.github}</div>
                    <div>mainLink: {props.profile.contacts.mainLink}</div>
                </div>
            </div>
        </div>
    )


}
export default ProfileInfo;