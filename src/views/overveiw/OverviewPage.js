import React from 'react';
import { Box, Grid } from '@mui/material';
import ATCCWidgetOverview from '../../components/dashboards/modern/ATCCWidgetOverview';
import BillingEfficiencyWidgetOverview from '../../components/dashboards/modern/BillingEfficiencyWidgetOverview';
import CollectionEfficiencyWidgetOverview from '../../components/dashboards/modern/CollectionEfficiencyWidgetOverview';
import TotalCostWidgetOverview from '../../components/dashboards/modern/TotalCostWidgetOverview';
import RevenueBilledWidgetOverview from '../../components/dashboards/modern/RevenueBilledWidgetOverview';
import CollectionsWidgetOverview from '../../components/dashboards/modern/CollectionsWidgetOverview';
import EnergyOverview from '../../components/dashboards/modern/EnergyOverview';
import AverageHoursofSupplyWidgetOverview from '../../components/dashboards/modern/AverageHoursofSupplyWidgetOverview';
import DurationofInterruptionWidgetOverview from '../../components/dashboards/modern/DurationofInterruptionWidgetOverview';
import TATWidgetOverview from '../../components/dashboards/modern/TATWidgetOverview';

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
        <Grid item xs={12} >
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
          <Grid container spacing={3}>
            
            
           
          </Grid>
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
