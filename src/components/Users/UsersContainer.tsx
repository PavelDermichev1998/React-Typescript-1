import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    InitialStateType,
    setCurrentPage, setTotalUsersCount,
    setUsers, toggleIsFetching,
    unFollow,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import {Users} from './Users';
import {Preloader} from "../Common/Preloader/Preloader";
import {usersAPI} from "../../api/api";


type MapUsersStatePropsType = {
    usersPage: InitialStateType
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}
export type UsersAPIComponentPropsType = MapUsersStatePropsType & MapDispatchPropsType


class UsersAPIComponent extends React.Component<UsersAPIComponentPropsType, UsersAPIComponentPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
       usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
            });
    }

    render() {
        return <>
            {this.props.isFetching
                ? <Preloader/>
                : null
            }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.usersPage.users}
                   follow={this.props.follow}
                   unFollow={this.props.unFollow}/>
        </>
    }
}


let mapStateToProps = (state: AppStateType): MapUsersStatePropsType => {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching,
})(UsersAPIComponent);