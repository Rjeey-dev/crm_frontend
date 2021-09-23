import React from 'react';

import LoginGoogle from "containers/links/LoginGoogle";
import FullScreenLoaderTemplate from "pages_templates/FullScreenLoaderTemplate";

function AuthRedirectGoogleLandingPage() {
    return <FullScreenLoaderTemplate>
        <LoginGoogle/>
    </FullScreenLoaderTemplate>
}

export default AuthRedirectGoogleLandingPage;