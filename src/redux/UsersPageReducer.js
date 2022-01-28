import {userAPI} from "../api/api";

const TOGGLE_FRIEND = "TOGGLE_FRIEND";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;
                })
            }
        case SET_USERS://   когда к нам прийдут список новых юзеров, мы скопируем старые и допишем новые
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        default:
            return state;
    }
}

// для сокращения кода в контейнерных компонентах АС убираем из action creaters toggleFriendAC -> toggleFriend

export const toggleFriend = (userId) => ({type: TOGGLE_FRIEND, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export default usersPageReducer;

// thunk
/*
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    toggleIsFetching(true);
    //if (this.props.users.length === 0) { // делаем get запрос с сетаем юзеров в state
    userAPI.getUsers(currentPage, pageSize)
        .then(data => { // стало так как к нам приходит уже data вместо response.data из API
            toggleIsFetching(false);
            setUsers(data.items)
            setTotalUsersCount(data.totalCount)
        })
}

export const follow = (userId) => (dispatch) => {
    toggleFollowingProgress(true, userId)
    userAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                toggleFriend(userId);
            }
            toggleFollowingProgress(false, userId)
        })
}

export const unfollow = (userId) => (dispatch) => {
    toggleFollowingProgress(true, userId)
    userAPI.unfollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                toggleFriend(userId);
            }
            toggleFollowingProgress(false, userId)
        })
}*/
