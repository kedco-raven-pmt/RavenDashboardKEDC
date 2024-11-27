import React from 'react';
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import OpexBreakdownFinancial from '../../components/financial-components/overview-charts-cards/opex-breakdown-fo';
import FinancialWelcomeCard from '../../components/financial-components/overview-charts-cards/financial-welcome-card-fo';
import TotalCostFinancial from '../../components/financial-components/overview-charts-cards/total-cost-fo';
import RevenueBilledFinancial from '../../components/financial-components/overview-charts-cards/revenue-billed-fo';
import CollectionsFinancial from '../../components/financial-components/overview-charts-cards/collections-fo';
import CostBreakdownFinancial from '../../components/financial-components/overview-charts-cards/cost-breakdown-fo';
import DailyCollectionFinancialOverview from '../../components/financial-components/overview-charts-cards/daily-collections-prepaid-fo';
import DailyPostpaidCollectionFinancialOverview from '../../components/financial-components/overview-charts-cards/daily-collections-postpaid-fo';
import TariffBreakdownFinancial from '../../components/financial-components/overview-charts-cards/tariff-breakdown-fo';
import AgentCollectionFinancialOverview from '../../components/financial-components/overview-charts-cards/agent-collections-fo';

const FinancialOverview = () => {
  return (
    <PageContainer
      title="Financial Overview"
      description="this is Financial Overview Dashboard page"
    >
      <Box mt={1}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12}>
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
            <AgentCollectionFinancialOverview />
          </Grid>
          <Grid item xs={12} sm={12}>
            <OpexBreakdownFinancial />
          </Grid>
          <Grid item xs={12} sm={12}>
            <CostBreakdownFinancial />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TariffBreakdownFinancial />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default FinancialOverview;
