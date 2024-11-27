import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import RevenueCostFinancialSB from '../../../components/financial-components/service-band-chart-cards/revenue-cost-sb';
import TariffFinancialSB from '../../../components/financial-components/service-band-chart-cards/tariff-sb';
import StateFilter from 'src/layouts/full/shared/breadcrumb/StateFilter';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial Service Band',
  },
];

const FinancialServiceBand = () => {
  return (
    <PageContainer title="Financial Service Band" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Financial Service Band" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <StateFilter />
        </Grid>
        <Grid item xs={12}>
          <RevenueCostFinancialSB />
        </Grid>
        <Grid item xs={12}>
          <TariffFinancialSB />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialServiceBand;
