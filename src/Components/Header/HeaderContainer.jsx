import React from "react";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-Reducer";
import Header from "./Header";

class HeaderContainer extends React.Component {
    componentDidMount() {
        /* axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
             {
                 withCredentials: true,
                 headers: {
                     "API-KEY": "2c2edca1-c413-48b3-ab9a-10cd3d1f5d35"
                 },
             }) // вторым параметром в ajax.get запрос передаётся объект
             // с параметрами, где withCredentials: true прикрепляем авторизационную куку так как идет
             // запрос с localHost на другой сервер

             .then(response => {
                 if (response.data.resultCode === 0) {
                     let {id, login, email} = response.data.data
                     this.props.setAuthUserData(id, login, email)
                 }
             })*/ // было
        this.props.getAuthUserData();    //стало
    }

    render() {
        return (
            <Header
                isAuth={this.props.isAuth}
                id={this.props.id}
                login={this.props.login}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        id: state.auth.id,
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);

