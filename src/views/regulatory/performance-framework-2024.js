import React from 'react';
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import NERCOrderWelcomeCard from '../../components/regulatory-components/nerc-order-welcomecard';
import OfftakePerPCCNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/oftake-per-pcc-nerc';
import StateFilter from '../../layouts/full/shared/breadcrumb/StateFilter';
import RevenueRecoveryNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/revenue-recovery-nerc';
import CappingEstimatedBillsNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/capping-estimated-bills-nerc';
import ForumOfficeDecisionsNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/forum-decisions-nerc';
import ComplaintResolutionNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/complaint-resolution-nerc';
import UniformSystemsOfAccountsNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/submission-usoa-nerc';
import APIStreamingRateNERC from '../../components/regulatory-components/performance-framework-24-charts-cards/api-streaming-nerc';

const PerformanceFramework24 = () => {
  return (
    <PageContainer
      title="Performance Framework 2024"
      description="this is Performance Framework 2024 Dashboard page"
    >
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12}>
            <NERCOrderWelcomeCard />
          </Grid>

          {/* column */}
          <Grid item xs={4}>
            <StateFilter />
          </Grid>

          <Grid item xs={12} sm={12} mt={1}>
            <OfftakePerPCCNERC />
          </Grid>
          <Grid item xs={12} sm={12} mt={3}>
            <RevenueRecoveryNERC />
          </Grid>
          <Grid item xs={12} sm={12} mt={3}>
            <UniformSystemsOfAccountsNERC />
          </Grid>
          <Grid item xs={12} sm={12} mt={3}>
            <APIStreamingRateNERC />
          </Grid>
          <Grid item xs={12} sm={12} mt={3}>
            <CappingEstimatedBillsNERC />
          </Grid>
          <Grid item xs={12} sm={12} mt={3}>
            <ForumOfficeDecisionsNERC />
          </Grid>
          <Grid item xs={12} sm={12} mt={3}>
            <ComplaintResolutionNERC />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default PerformanceFramework24;
