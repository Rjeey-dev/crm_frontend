import React from 'react';

import FailedLoginBlock from "elements/blocks/FailedLoginBlock";
import PageTemplate from "pages_templates/PageTemplate";

function FailedLogin() {
    return <PageTemplate content={<FailedLoginBlock/>} classes='error-page'/>
}

export default FailedLogin;