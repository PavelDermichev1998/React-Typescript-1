import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {ReactComponent} from "*.svg";


type PathParamsType = {
    userId: string
}
type MapProfileStatePropsType = {
    profile: any
}
type MapProfileDispatchPropsType = {
    getUserProfile: (userId: string) => void
}
type ProfileContainerAPIPropsType = MapProfileStatePropsType & MapProfileDispatchPropsType
type RoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerAPIPropsType;



class ProfileContainerAPI extends React.Component<RoutePropsType, RoutePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "2";
        }
        this.props.getUserProfile(userId)

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapProfileStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainerAPI)