import merge from 'lodash/merge';
import MUIDataTable from "mui-datatables";
import React, {PureComponent} from 'react';
import {connect} from "react-redux";

import Translation from "atoms/Translation";
import {getActiveLanguage} from "react-localize-redux";
import {translation} from "services/common/translations";
import {IBaseState} from "store/interfaces";
import {getTranslation} from "store/translations/selectors";
import {IMapStateToProps, IProps} from "./interfaces";

const mapStateToProps = (state: IBaseState): IMapStateToProps => {
    return {
        lang: getActiveLanguage(state.localize),
        of: getTranslation(state, {'id': 'common.of'})
    };
};

export class BaseTable extends PureComponent<IProps> {
    public render() {
        const options = merge({
            responsive: 'scroll',
            rowsPerPage: 10,
            textLabels: {
                body: {
                    noMatch: <Translation source={translation('common.no_matching_records_found')}/>,
                    toolTip: <Translation source={translation('common.sort')}/>,
                },
                toolbar: {
                    search: <Translation source={translation('common.search')}/>,
                    filterTable: <Translation source={translation('common.filter_table')}/>,
                },
                filter: {
                    all: <Translation source={translation('common.all')}/>,
                    title: <Translation source={translation('common.filters')}/>,
                    reset: <Translation source={translation('common.reset')}/>,
                },
                pagination: {
                    rowsPerPage: <Translation source={translation('common.rows_per_page')}/>,
                    displayRows: this.props.of,
                },
            },
        }, this.props.options);

        // @ts-ignore
        return <div className='dataTables_wrapper'><MUIDataTable title={this.props.title} small={true} responsive={true} data={this.props.data} columns={this.props.columns} options={options}/></div>;
    }
}

export default connect(mapStateToProps)(BaseTable);