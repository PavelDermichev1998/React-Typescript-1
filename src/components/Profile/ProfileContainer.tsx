import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profile-reducer";


type MapProfileStatePropsType = {
    profile: any
}
type MapProfileDispatchPropsType = {
    setUserProfile: (profile:any) => void
}

export type ProfileContainerAPIPropsType = MapProfileStatePropsType & MapProfileDispatchPropsType

export class ProfileContainerAPI extends React.Component<ProfileContainerAPIPropsType, ProfileContainerAPIPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
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

let mapStateToProps = (state: AppStateType):MapProfileStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileContainerAPI);