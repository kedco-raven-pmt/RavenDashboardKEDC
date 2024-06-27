import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import ATCCStates from '../../../components/dashboards/ecommerce/ATCCStates';
import CollectionEfficiencyStates from '../../../components/dashboards/ecommerce/CollectionEfficiencyStates';
import BillingEfficiencyStates from '../../../components/dashboards/ecommerce/BillingEfficiencyStates';
import EnergyDeliveredStates from '../../../components/widgets/charts/EnergyDeliveredStates';
import EnergyBilledStates from '../../../components/widgets/charts/EnergyBilledStates';
import EnergyCollectedStates from '../../../components/widgets/charts/EnergyCollectedStates';
import StatesMaps from '../../../components/widgets/charts/StatesMaps';
import CustomerMetrics from 'src/components/dashboards/ecommerce/CustomerMetrics';


const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Commercial by State',
  },
];

const CommercialByState = () => {
  return (
    <PageContainer title="Commercial By State" description="this is Charts page">
      <Breadcrumb title="Commercial by State" items={BCrumb} />
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <StatesMaps />
        </Grid>
        <Grid item xs={12} sm={4}>
          <EnergyDeliveredStates />
        </Grid>
        <Grid item xs={12} sm={4}>
          <EnergyBilledStates />
        </Grid>
        <Grid item xs={12} sm={4}>
          <EnergyCollectedStates />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <ATCCStates />
        </Grid>
        <Grid item xs={12} sm={4}>
          <BillingEfficiencyStates />
        </Grid>
        <Grid item xs={12} sm={4}>
          <CollectionEfficiencyStates />
        </Grid>
        <Grid item xs={12}>
            <CustomerMetrics />
          </Grid>
      </Grid>
    </PageContainer>
  );
};

export default CommercialByState;