import React from 'react';

import PageTemplate from "pages_templates/PageTemplate";
import Dashboard from "organisms/content/Dashboard";

function DashboardPage() {
    return <PageTemplate id='dashboard-page' content={<Dashboard/>}/>;
}

export default DashboardPage;