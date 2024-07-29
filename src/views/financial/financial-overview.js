import React from 'react';
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import OpexBreakdownFinancial from '../../components/financial-components/overview-charts-cards/opex-breakdown-fo';
import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import YearlySales from 'src/components/dashboards/ecommerce/YearlySales';
import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import FinancialWelcomeCard from 'src/components/dashboards/ecommerce/FinancialWelcomeCard';
import Expence from 'src/components/dashboards/ecommerce/Expence';
import Growth from 'src/components/dashboards/ecommerce/Growth';
import RevenueUpdates from 'src/components/dashboards/ecommerce/RevenueUpdates';
import SalesOverview from 'src/components/dashboards/ecommerce/SalesOverview';
import SalesTwo from 'src/components/dashboards/ecommerce/SalesTwo';
import Sales from 'src/components/dashboards/ecommerce/Sales';
import MonthlyEarnings from 'src/components/dashboards/ecommerce/MonthlyEarnings';
import ProductPerformances from 'src/components/dashboards/ecommerce/ProductPerformances';
import RecentTransactions from 'src/components/dashboards/ecommerce/RecentTransactions';
import Followers from '../../components/widgets/charts/Followers';
import Views from '../../components/widgets/charts/Views';
import TotalCostFinancial from '../../components/financial-components/overview-charts-cards/total-cost-fo';
import RevenueBilledFinancial from '../../components/financial-components/overview-charts-cards/revenue-billed-fo';
import CollectionsFinancial from '../../components/financial-components/overview-charts-cards/collections-fo';
import CostBreakdownFinancial from '../../components/financial-components/overview-charts-cards/cost-breakdown-fo';
import Earned from '../../components/widgets/charts/Earned';
import PageImpressions from '../../components/widgets/charts/PageImpressions';
import CurrentValue from '../../components/widgets/charts/CurrentValue';
import MostVisited from '../../components/widgets/charts/MostVisited';
import YearlyBreakup from '../../components/dashboards/modern/YearlyBreakup';
import DailyCollectionFinancialOverview from '../../components/financial-components/overview-charts-cards/daily-collections-prepaid-fo';
import DailyPostpaidCollectionFinancialOverview from '../../components/financial-components/overview-charts-cards/daily-collections-postpaid-fo';


const FinancialOverview = () => {
  return (
    <PageContainer title="Financial Overview" description="this is Financial Overview Dashboard page">
      <Box mt={1}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12} >
            <FinancialWelcomeCard />
          </Grid>

          {/* column */} 
          
          <Grid item xs={12} sm={4}>
            <TotalCostFinancial />
          </Grid>
          <Grid item xs={12} sm={4}>
            <RevenueBilledFinancial />
          </Grid>
          <Grid item xs={12} sm={4}>
            <CollectionsFinancial />
          </Grid>
          <Grid item xs={12} sm={12}>
              <DailyCollectionFinancialOverview />
          </Grid>
          <Grid item xs={12} sm={12}>
              <DailyPostpaidCollectionFinancialOverview />
          </Grid>
          <Grid item xs={12} sm={12}>
              <OpexBreakdownFinancial />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CostBreakdownFinancial />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default FinancialOverview;
