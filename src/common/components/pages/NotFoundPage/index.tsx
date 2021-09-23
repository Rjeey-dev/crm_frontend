import React from 'react';

import BackLink from "atoms/BackLink";
import H2 from "atoms/H2";
import H3 from "atoms/H3";
import Translation from "atoms/Translation";
import {URL_HOME} from "common/routes/paths";
import LocalizedLink from "containers/links/LocalizedLink";
import {translation} from "services/common/translations";

function NotFoundPage() {
    return <div className='error-page'>
        <div className="row error-page-content">
            <div className="col-sm-4 left-part">
                <h1 className="display-1 mb-0">404</h1>
            </div>
            <div className="col-sm-8 right-part">
                <H2><Translation source={translation('common.sorry')}/>!</H2>
                <H3 classes="font-weight-light"><Translation source={translation('common.page_not_found_text')}/>.</H3>
                <div className="col-12 mt-xl-2">
                    <BackLink classes='text-white font-weight-medium text-white'>
                        <Translation source={{id:'common.back_to_previous_page'}}/>
                    </BackLink>
                    <LocalizedLink className='text-white font-weight-medium text-white' to={URL_HOME}>
                        <Translation source={{id:'common.login'}}/>
                    </LocalizedLink>
                </div>
            </div>
        </div>
    </div>
}

export default NotFoundPage;