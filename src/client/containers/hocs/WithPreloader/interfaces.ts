export interface IMapStateToProps {
    preloaders: any,
}

export interface IProps extends IMapStateToProps {
    preloaderKey: string,
    classes?: string,
    type?: string
}