import React from "react";
import {connect} from "react-redux";
import {
    //follow,
    //getUsers,
    setCurrentPage, setTotalUsersCount, setUsers, toggleFollowingProgress,
    toggleFriend, toggleIsFetching, //unfollow,

} from "../../../redux/UsersPageReducer";
import Users from "./Users";
import Preloader from "../../Common/Preloader";
import {userAPI} from "../../../api/api";

class UsersContainer extends React.Component { // контейнерная классовая компонента для side эффектов
    componentDidMount() {

        //getUsers(this.props.currentPage, this.props.pageSize);   // стало
//было
        this.props.toggleIsFetching(true);
        // if (this.props.users.length === 0) { // делаем get запрос с сетаем юзеров в state
             userAPI.getUsers(this.props.currentPage, this.props.pageSize)
                 .then(data => { debugger // стало так как к нам приходит уже data вместо response.data из API
                     this.props.toggleIsFetching(false);

                     this.props.setUsers(data.items)
                     this.props.setTotalUsersCount(data.totalCount)
                 })
         //}
    }

    onPageChanged(pageNumber) {
        //getUsers(pageNumber, this.props.pageSize);
        debugger
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true);
        //if (this.props.users.length === 0) { // делаем get запрос с сетаем юзеров в state
            userAPI.getUsers(pageNumber, this.props.pageSize)
                .then(data => {  // стало так как к нам приходит уже data вместо response.data из API
                    this.props.toggleIsFetching(false);
                    this.props.setUsers(data.items)
                })
       // }
    }

    render() {  // вынесли разметку в другой файл -> создали чистую функциональную компоненту и передали в нее пропсы
        // свойства this.props.pagesCount и другие UsersContainer берёт из connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                   currentPage={this.props.currentPage}
                   pageSize={this.props.pageSize}
                   totalUsersCount={this.props.totalUsersCount}
                   users={this.props.users}
                   followed={this.props.followed}
                   followingInProgress={this.props.followingInProgress}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   onPageChanged={this.onPageChanged}
                   toggleFriend={this.props.toggleFriend}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// при сокращении на АС актион креейтеров мы передаем в connect объект содержащий action creaters а connect под капотом сам дописывает обертки колбэки над диспатчами
export default connect(mapStateToProps,
    {
        toggleFriend,
        setCurrentPage,
        toggleFollowingProgress,
        setTotalUsersCount,
        toggleIsFetching,
        setUsers,
        //follow,
        //unfollow,
    })(UsersContainer); // обернули одну конт комп в другую во внешней работа со state, во внутренней API запросы

