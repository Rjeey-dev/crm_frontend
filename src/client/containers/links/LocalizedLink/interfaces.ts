export interface IMapStateToProps {
    lang: string
}

export interface IProps extends IMapStateToProps {
    to: string,
    hash?: string,
    className?: string,
    exact?: boolean,
    target?: string,
    attributes?: any,
    onClick?: (data?: any) => void
}