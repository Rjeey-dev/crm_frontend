import {MUIDataTableProps} from "mui-datatables";
import {Language as ILanguage, LocalizedElement, LocalizedElementMap} from "react-localize-redux";

export interface IMapStateToProps {
    lang: ILanguage,
    of: string | LocalizedElementMap | LocalizedElement
}

export interface IProps extends IMapStateToProps, MUIDataTableProps {}