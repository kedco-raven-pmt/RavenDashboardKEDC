import React, { useState } from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import StateMapboxFinancialBS from '../../../components/financial-components/by-state-chart-cards/statemapbox-bs';
import StateCostBreakdownFinancialBS from '../../../components/financial-components/by-state-chart-cards/statecost-breakdown-bs';
import StateFilterFinancialBS from '../../../components/financial-components/by-state-chart-cards/state-filters-fin-bs';
import TariffFinancialBS from '../../../components/financial-components/by-state-chart-cards/tarrifs-bs';
import OpexBreakdownFinancialBS from '../../../components/financial-components/by-state-chart-cards/opex-breakdown-bs';
import AgentCollectionByState from '../../../components/financial-components/by-state-chart-cards/agent-collections-bs';
import DailyCollectionPrePaidBS from '../../../components/financial-components/by-state-chart-cards/daily-collections-prepaid-bs';
import DailyCollectionPostPaidBS from '../../../components/financial-components/by-state-chart-cards/daily-collections-postpaid-bs';

const BCrumb = [
  { to: '/', title: 'Home' },
  { title: 'State' },
  { title: 'Financial by State' },
];

const FinancialByState = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateClick = (stateName) => {
    setSelectedState(stateName);
  };

  const handleFilterChange = (stateName) => {
    setSelectedState(stateName);
  };

  return (
    <PageContainer title="Financial By State" description="this is Charts page">
      <Breadcrumb title="Financial by State" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StateFilterFinancialBS onFilterChange={handleFilterChange} selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <StateMapboxFinancialBS selectedState={selectedState} onStateClick={handleStateClick} />
        </Grid>
        
        <Grid item xs={12}>
          <DailyCollectionPrePaidBS selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <DailyCollectionPostPaidBS selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <AgentCollectionByState selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <OpexBreakdownFinancialBS selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <StateCostBreakdownFinancialBS selectedState={selectedState} />
        </Grid>
        <Grid item xs={12}>
          <TariffFinancialBS selectedState={selectedState} />
        </Grid>
        
      </Grid>
    </PageContainer>
  );
};

export default FinancialByState;
