import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import StateMapboxCommercialBS from '../../../components/commercial-components/by-state-charts-cards/statemapbox-bs';
import StateFilterCommercialBS from '../../../components/commercial-components/by-state-charts-cards/state-filters-com-bs';
import CustomerMetrics from 'src/components/dashboards/ecommerce/CustomerMetrics';

const BCrumb = [
  { to: '/', title: 'Home' },
  { title: 'State' },
  { title: 'Commercial by State' },
];

const CommercialByState = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  const handleFilterChange = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <PageContainer title="Commercial By State" description="This is Charts page">
      <Breadcrumb title="Commercial by State" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StateFilterCommercialBS onFilterChange={handleFilterChange} selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <StateMapboxCommercialBS selectedState={selectedState} onStateClick={handleStateClick} />
        </Grid>
        <Grid item xs={12}>
          <CustomerMetrics />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialByState;
