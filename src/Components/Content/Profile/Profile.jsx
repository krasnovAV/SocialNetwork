import React from "react";
import style from "./Profile.module.css"
import Posts from "./Post/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    let addPost = () => props.addPost()

    let updatePostBody = (e) => {
        let body = e.target.value;
        props.updatePostBody(body);
    }
    let updatePostImage = (e) => {
        let body = e.target.value;
        props.updatePostImage(body);
    }

    return (
        <div>
            <div className={style.profile}>
                <div className={style.profileInfo}>
                    <div>
                        <ProfileInfo profileInfo={props.profilePage.profileInfo} profile={props.profile}/>
                    </div>
                </div>

                <div className={style.myPosts}>
                    <div>
                        <div className={style.addPost}>My posts</div>
                        <div className={style.addPost}>
                            <textarea className={style.textArea}
                                      onChange={updatePostBody}
                                      value={props.profilePage.newPostBody}
                                      placeholder={"enter your post"}/>
                        </div>
                        <div>
                            <input className={style.input} type="text"
                                   placeholder={"add url image"}
                                   onChange={updatePostImage}
                                   value={props.profilePage.urlImg}/>
                        </div>
                        <div className={style.addPost}>
                            <button className={style.button} onClick={addPost}>
                                Добавить пост
                            </button>
                        </div>
                    </div>

                    <div>
                        <Posts postItems={props.profilePage.postItems}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Profile;