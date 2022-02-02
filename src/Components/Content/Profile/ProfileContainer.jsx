import React from "react";
import {
    addPost,
    updatePostImage,
    updatePostBody, getProfile, getUserStatus, updateUserStatus
} from "../../../redux/profilePageReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 21754;
        }
        this.props.getProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile profile={this.props.profile} profilePage={this.props.profilePage}
                        status={this.props.status} updateUserStatus={this.props.updateUserStatus}/> // {...this.props} прокидываем все приходящие пропсы в контейнерную компоненту в презентационную
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        profilePage: state.profilePage,
        status: state.profilePage.status,
    }
}

// было
/*let withURLDataContComp = withRouter(ProfileContainer);// создали ещё одну конт комп, которая передаст данные из адресной строки
export default connect(mapStateToProps, {
    addPost,
    updatePostBody,
    updatePostImage,
    getProfile
})(withURLDataContComp);*/
// стало
export default compose(
    withRouter,
    connect(mapStateToProps, {addPost, updatePostBody, updatePostImage, getProfile,
        getUserStatus, updateUserStatus}),
)(ProfileContainer);

