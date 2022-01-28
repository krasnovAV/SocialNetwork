import React from "react";
import {
    addPost,
    updatePostImage,
    updatePostBody, setUserProfile
} from "../../../redux/profilePageReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../../api/api";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;

        profileAPI.getProfile(userId)
            .then(data => this.props.setUserProfile(data))
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile}/> // {...this.props} прокидываем все приходящие пропсы в контейнерную компоненту в презентационную
    }
}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
    }
}

//const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

let withURLDataContComp = withRouter(ProfileContainer);// создали ещё одну конт комп, которая передаст данные из адресной строки

export default connect(mapStateToProps, {
    addPost,
    updatePostBody,
    updatePostImage,
    setUserProfile
})(withURLDataContComp);