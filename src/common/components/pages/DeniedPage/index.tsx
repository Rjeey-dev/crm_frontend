import React from 'react';

import H1 from "atoms/H1";
import H2 from "atoms/H2";
import Translation from "atoms/Translation";
import {translation} from "services/common/translations";
import H3 from "atoms/H3";
import BackLink from "atoms/BackLink";
import LocalizedLink from "containers/links/LocalizedLink";
import {URL_HOME} from "common/routes/paths";

export default function DeniedPage() {
    return <div className='error-page'>
        <div className="row error-page-content">
            <div className="col-sm-4 left-part">
                <H1 classes="display-1 mb-0">403</H1>
            </div>
            <div className="col-sm-8 right-part">
                <H2><Translation source={translation('common.sorry')}/>!</H2>
                <H3 classes="font-weight-light"><Translation source={translation('common.page_denied_text')}/>.</H3>
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
    </div>;
}