import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import YearlyBreakup from '../../../components/dashboards/modern/YearlyBreakup';
import Projects from '../../../components/dashboards/modern/Projects';
import Customers from '../../../components/dashboards/modern/Customers';
import SalesTwo from '../../../components/dashboards/ecommerce/SalesTwo';
import MonthlyEarnings from '../../../components/dashboards/modern/MonthlyEarnings';
import SalesOverview from '../../../components/dashboards/ecommerce/SalesOverview';
import RevenueUpdates from '../../../components/dashboards/modern/RevenueUpdates';
import YearlySales from '../../../components/dashboards/ecommerce/YearlySales';
import MostVisited from '../../../components/widgets/charts/MostVisited';
import PageImpressions from '../../../components/widgets/charts/PageImpressions';
import Followers from '../../../components/widgets/charts/Followers';
import Views from '../../../components/widgets/charts/Views';
import Earned from '../../../components/widgets/charts/Earned';
import RevenueCostFinancialFeeder from '../../../components/financial-components/feeder-chart-cards/revenue-cost-feeder';

const BCrumb = [
  {
    to: '/',
    title: 'Home',
  },
  {
    title: 'State',
  },
  {
    title: 'Financial Feeder',
  },
];

const FinancialFeeder = () => {
  return (
    <PageContainer title="Financial Feeder" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Financial Feeder" items={BCrumb} />
      {/* end breadcrumb */}
      <Grid container spacing={3}>
        
        <Grid item xs={12}>
          <RevenueCostFinancialFeeder />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default FinancialFeeder;
