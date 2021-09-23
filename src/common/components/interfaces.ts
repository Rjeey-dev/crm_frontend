export interface IMapDispatchToProps {
    initialize: (options: any) => void,
    addTranslationForLanguage: (translations: any, lang: string) => void,
}

export interface IMapStateToProps {
    userLocale: string
}

export interface IProps extends IMapDispatchToProps, IMapStateToProps {

}