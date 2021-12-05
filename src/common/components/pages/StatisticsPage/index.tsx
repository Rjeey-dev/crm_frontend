import React from 'react';

import PageTemplate from "pages_templates/PageTemplate";
import StatisticsBlock from "containers/blocks/Statistics";

function StatisticsPage() {
    return <PageTemplate id='statistics-page' content={<StatisticsBlock/>}/>;
}

export default StatisticsPage;