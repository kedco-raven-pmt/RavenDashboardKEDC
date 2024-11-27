import React from 'react';
import { Box, Grid } from '@mui/material';
import ATCCWidgetOverview from '../../components/overview-page-components/ATCCWidgetOverview';
import BillingEfficiencyWidgetOverview from '../../components/overview-page-components/BillingEfficiencyWidgetOverview';
import CollectionEfficiencyWidgetOverview from '../../components/overview-page-components/CollectionEfficiencyWidgetOverview';
import TotalCostWidgetOverview from '../../components/overview-page-components/TotalCostWidgetOverview';
import RevenueBilledWidgetOverview from '../../components/overview-page-components/RevenueBilledWidgetOverview';
import CollectionsWidgetOverview from '../../components/overview-page-components/CollectionsWidgetOverview';
import EnergyOverview from '../../components/overview-page-components/EnergyOverview';
import AverageHoursofSupplyWidgetOverview from '../../components/overview-page-components/AverageHoursofSupplyWidgetOverview';
import DurationofInterruptionWidgetOverview from '../../components/overview-page-components/DurationofInterruptionWidgetOverview';
import TATWidgetOverview from '../../components/overview-page-components/TATWidgetOverview';

import Welcome from 'src/layouts/full/shared/welcome/Welcome';

const OverviewPage = () => {
  return (
    <Box>
      <Grid container spacing={3} mt={2}>
        {/* column */}
        <Grid item sm={12} lg={4}>
          <ATCCWidgetOverview />
        </Grid>
        <Grid item sm={12} lg={4}>
          <BillingEfficiencyWidgetOverview />
        </Grid>
        <Grid item sm={12} lg={4}>
          <CollectionEfficiencyWidgetOverview />
        </Grid>
        <Grid item sm={12} lg={4}>
          <TotalCostWidgetOverview />
        </Grid>
        <Grid item sm={12} lg={4}>
          <RevenueBilledWidgetOverview />
        </Grid>
        <Grid item sm={12} lg={4}>
          <CollectionsWidgetOverview />
        </Grid>
        {/* column */}
        <Grid item xs={12} lg={12}>
          <EnergyOverview />
        </Grid>
        {/* column */}
        <Grid item xs={12}>
          <Grid container spacing={3}>
            <Grid item sm={12} lg={4}>
              <AverageHoursofSupplyWidgetOverview />
            </Grid>
            <Grid item sm={12} lg={4}>
              <DurationofInterruptionWidgetOverview />
            </Grid>
            <Grid item sm={12} lg={4}>
              <TATWidgetOverview />
            </Grid>
          </Grid>
        </Grid>
        {/* column */}

        {/* column */}
        <Grid item xs={12} lg={4}>
          <Grid container spacing={3}></Grid>
        </Grid>
        {/* column */}

        {/* column */}

        {/* column */}
      </Grid>
      {/* column */}
      <Welcome />
    </Box>
  );
};

export default OverviewPage;
