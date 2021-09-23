import React from 'react';
import {withRouter} from "react-router";

import LoginGoogle from "containers/links/LoginGoogle";

function HomePage() {
    return <div className="home-page-content">
        <div className='login-wrapper'>
            <LoginGoogle/>
        </div>
    </div>;
}

// @ts-ignore
export default withRouter(HomePage);