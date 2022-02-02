import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../../Common/Preloader";
import {follow, getUsers, onPageChanged, unfollow} from "../../../redux/UsersPageReducer";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component { // контейнерная классовая компонента для side эффектов
    componentDidMount() {
        this.props.getUsers(this.currentPage, this.pageSize);  //стало
    }

    //onPageChanged(pageNumber)  //здесь не работает, вынес в UsersPageReducer и прокинул в User компоненту,
    // а там уже вызвал. таким макаром работает

    render() {  // вынесли разметку в другой файл -> создали чистую функциональную компоненту и передали в нее пропсы
        // свойства this.props.pagesCount и другие UsersContainer берёт из connect(mapStateToProps, mapDispatchToProps)(UsersContainer)
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.props.onPageChanged}
                followingInProgress={this.props.followingInProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}

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

/* было
let AuthRedirectComponent = withAuthRedirect(UsersContainer);   //вызвали ХОК и обернули UsersContainer в новый контейнер
// с возможностью редиректа если не авторизован и прокинули уже её в коннект
export default connect(mapStateToProps,
    {getUsers, onPageChanged, follow, unfollow})(AuthRedirectComponent); // обернули одну конт комп в другую во внешней работа со state, во внутренней API запросы
*/
// стало
export default compose(
    connect(mapStateToProps,{getUsers, onPageChanged, follow, unfollow}),
    withAuthRedirect
)(UsersContainer);
