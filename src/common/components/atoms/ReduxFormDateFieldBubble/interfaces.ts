export interface IProps {
    input: {
        onChange: (data: any) => void
        value: any,
        name: string,
        initial: string
    },
    meta: {
        invalid: boolean,
        error: any
    },
    activeLanguage: any,
    defaultLanguage: any,
    isOpen: boolean
}