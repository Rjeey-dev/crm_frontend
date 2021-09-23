export interface IMapStateToProps {
    onSuccessfulGoogleLogin: (token: string, userId: string, image: string, email: string, firstName: string, lastName: string) => void,
}

export interface IProps extends IMapStateToProps {
    text?: string,
    classes?: string
}

