import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';


type PathParamsType = {
    userId: string
}

type MapProfileStatePropsType = {
    profile: any
}
type MapProfileDispatchPropsType = {
    setUserProfile: (profile: any) => void
}

type ProfileContainerAPIPropsType = MapProfileStatePropsType & MapProfileDispatchPropsType
type RoutePropsType = RouteComponentProps<PathParamsType> & ProfileContainerAPIPropsType;

class ProfileContainerAPI extends React.Component<RoutePropsType, RoutePropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '2';
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}


let mapStateToProps = (state: AppStateType): MapProfileStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

let withUrlDataContainerAPIComponent = withRouter(ProfileContainerAPI);

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(withUrlDataContainerAPIComponent);