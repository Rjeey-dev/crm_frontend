// import RemindPage from "pages/RemindPage";
// import SignUpPage from "pages/SignUpPage";
import * as paths from "common/routes/paths";
import withSecurity from "hocs/WithSecutiry";
import AuthRedirectGoogleLandingPage from "pages/AuthRedirectGoogleLandingPage";
import DashboardPage from "pages/DashboardPage";
import DeniedPage from "pages/DeniedPage";
import HomePage from "pages/HomePage";
import NotFoundPage from "pages/NotFoundPage";

const Routes = [
    {
        path: paths.URL_DASHBOARD,
        exact: true,
        component: withSecurity(DashboardPage),
    },
    {
        path: paths.URL_AUTH_GOOGLE_REDIRECT,
        exact: true,
        component: withSecurity(AuthRedirectGoogleLandingPage)
    },
    {
        path: paths.URL_DENIED,
        exact: true,
        component: DeniedPage
    },
    {
        path: paths.URL_HOME,
        exact: true,
        component: withSecurity(HomePage),
    },
    {
        path: paths.URL_HOME_LOCALIZED,
        exact: true,
        component: HomePage,
    },
    {
        component: NotFoundPage
    },
];

export default Routes;