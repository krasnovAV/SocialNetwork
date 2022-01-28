import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader";
import {
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleFriend,
    toggleIsFetching
} from "../../../redux/UsersPageReducer";
import {userAPI} from "../../../api/api";

class UsersContainer extends React.Component { // контейнерная классовая компонента для side эффектов
    componentDidMount() {
        this.props.toggleIsFetching(true);

        userAPI.getUsers(this.currentPage, this.props.pageSize) // если уберём props, то сначала
            // загрузятся номера страниц, а чтобы загрузились пользователи нужно ещё раз нажать на номер страницы
            .then(data => {
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
                this.props.toggleIsFetching(false);
            });
    }

    onPageChanged(pageNumber) {
        this.setCurrentPage(pageNumber);    //this.props.setCurrentPage(pageNumber) не работает
        //this.props.toggleIsFetching(true);    // почему-то сдесь не работает
        userAPI.getUsers(pageNumber, this.pageSize)
            .then(data => {
                this.setUsers(data.items);
                //this.props.toggleIsFetching(false);
            });
    }

    render() {  // вынесли разметку в другой файл -> создали чистую функциональную компоненту и передали в нее пропсы
        // свойства this.props.pagesCount и другие UsersContainer берёт из connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                toggleFriend={this.props.toggleFriend}
                setCurrentPage={this.props.setCurrentPage}
                setUsers={this.props.setUsers}
                followed={this.props.followed}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

// при сокращении на АС актион креейтеров мы передаем в connect объект содержащий action creaters а connect под капотом сам дописывает обертки колбэки над диспатчами
export default connect(mapStateToProps,
    {
        toggleFriend, setUsers, setCurrentPage,
        setTotalUsersCount, toggleIsFetching, toggleFollowingProgress
    })(UsersContainer); // обернули одну конт комп в другую во внешней работа со state, во внутренней API запросы

