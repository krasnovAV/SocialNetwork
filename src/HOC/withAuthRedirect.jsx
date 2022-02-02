import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
})

export const withAuthRedirect = (Component) => { // HOC создает классовую контейнерную компоненту над приходящей в неё
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>

            return <Component {...this.props}/>
        }
    }

    // оборачиваем контейнерную компоненту ещё одной через коннект, чтобы isAuth брался из store автоматически и
    //не нужно было его каждый раз доставать из приходящей компоненты
    return connect(mapStateToPropsForRedirect)(RedirectComponent);

}

