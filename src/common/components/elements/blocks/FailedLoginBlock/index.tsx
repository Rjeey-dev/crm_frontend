import React from 'react';

import Translation from "atoms/Translation";
import BackLink from 'common/components/atoms/BackLink/index';
import H2 from "common/components/atoms/H2/index";
import H3 from "common/components/atoms/H3/index";
import {URL_HOME} from "common/routes/paths";
import LocalizedLink from "containers/links/LocalizedLink";
import {translation} from "services/common/translations";

export default function FailedLoginBlock() {
    return <div className="row error-page-content">
        <div className="col-sm-4 left-part">
            <h1 className="display-1 mb-0">403</h1>
        </div>
        <div className="col-sm-8 right-part">
            <H2><Translation source={translation('common.sorry')}/>!</H2>
            <H3 classes="font-weight-light"><Translation source={translation('common.failed_login_text')}/>.</H3>
            <div className="col-12 mt-xl-2">
                <BackLink classes='text-white font-weight-medium text-white'>
                    <Translation source={{id:'common.back_to_previous_page'}}/>
                </BackLink>
                <LocalizedLink className='text-white font-weight-medium text-white' to={URL_HOME}>
                    <Translation source={{id:'common.profile'}}/>
                </LocalizedLink>
            </div>
        </div>
    </div>
}