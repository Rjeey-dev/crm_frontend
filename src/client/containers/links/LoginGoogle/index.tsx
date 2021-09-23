import React from "react";
import {Component} from "react";
// @ts-ignore
import GoogleLogin from 'react-google-login';
import { connect } from 'react-redux';
// import {Dispatch} from "redux";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import {Dispatch} from "redux";

import { onSuccessfulGoogleLogin } from 'store/users/actions';
import {IProps, IMapStateToProps} from "./interfaces";

const mapDispatchToProps = (dispatch: Dispatch): IMapStateToProps => {
    return {
        onSuccessfulGoogleLogin: (token: string, userId: string, image: string, email: string, firstName: string, lastName: string) => dispatch(onSuccessfulGoogleLogin(token, userId, image, email, firstName, lastName)),
    };
};

export class LoginGoogle extends Component<IProps> {
    constructor(props: IProps) {
        super(props);

        this.responseGoogle = this.responseGoogle.bind(this);
    }

    public responseGoogle = (auth: any) => {
        if (auth.hasOwnProperty('error')) {
            console.log(auth.error);

            return;
        }

        this.props.onSuccessfulGoogleLogin(
            auth.accessToken,
            auth.profileObj.googleId,
            auth.profileObj.imageUrl,
            auth.profileObj.email,
            auth.profileObj.givenName,
            auth.profileObj.familyName
        );
    };

    public render() {
        const classes = ['google-login', this.props.classes];

        return <GoogleLogin
            clientId="523144776651-a9628aslr9g74jljje58pip3feofmr89.apps.googleusercontent.com"
            render={renderProps => (
                <button className={classes.join(' ')} onClick={renderProps.onClick}><FontAwesomeIcon icon={faGoogle} /></button>
            )}
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
        />;
    }
}

// @ts-ignore
export default connect(null, mapDispatchToProps)(LoginGoogle);