import React from 'react';
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

import WeeklyStats from 'src/components/dashboards/modern/WeeklyStats';
import YearlySales from 'src/components/dashboards/ecommerce/YearlySales';
import PaymentGateways from 'src/components/dashboards/ecommerce/PaymentGateways';
import StaffWelcomeCard from '../../components/staff-components/overview-charts-cards/StaffWelcomeCard';
import ChurnRate from 'src/components/dashboards/ecommerce/ChurnRate';
import StaffDistribution from 'src/components/dashboards/ecommerce/StaffDistribution';
import GenderDistribution from 'src/components/dashboards/ecommerce/GenderDistribution';
import RetentionRate from 'src/components/dashboards/ecommerce/RetentionRate';
import CollectionsPerStaff from 'src/components/dashboards/ecommerce/CollectionsPerStaff';

const StaffOverview = () => {
  return (
    <PageContainer title="Staff Manager" description="this is Staff Overview Dashboard page">
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12}>
            <StaffWelcomeCard />
          </Grid>

          {/* column */}

          <Grid item xs={12} sm={6} lg={4}>
            <StaffDistribution />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <GenderDistribution />
          </Grid>
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <RetentionRate />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ChurnRate />
              </Grid>
              <Grid item xs={12}>
                <CollectionsPerStaff />
              </Grid>
            </Grid>
          </Grid>
          {/* column */}

          {/* column */}

          {/* column */}

          {/* column */}

          {/* column */}
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default StaffOverview;
