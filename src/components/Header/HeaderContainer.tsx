import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";


export class HeaderContainerAPI extends React.Component<any, any> {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
};
export const HeaderContainer = connect(mapStateToProps, {getAuthUserData})(HeaderContainerAPI)