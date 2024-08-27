import React from 'react';
import { Box, Grid } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import TechnicalWelcomeCard from '../../components/technical-components/overview-charts-cards/TechnicalWelcomeCard';
import EnergyDeliveredTechnicalOverview from '../../components/technical-components/overview-charts-cards/energy-delivered-to';
import AverageAvailabilityTechnicalOverview from '../../components/technical-components/overview-charts-cards/average-availability-to';
import AverageDurationOfInterruptionTO from '../../components/technical-components/overview-charts-cards/average-interruption-duration-to';
import TechnicalBreakdownFinancial from '../../components/technical-components/overview-charts-cards/overview-breakdown-to';
import FeederInterruptionsTO from '../../components/technical-components/overview-charts-cards/feeder-interruptions-to';
import LoadTrendTechnicalOverview from '../../components/technical-components/overview-charts-cards/load-trend-to';

const TechnicalOverview = () => {
  return (
    <PageContainer
      title="Technical Overview"
      description="this is Technical Overview Dashboard page"
    >
      <Box mt={3}>
        <Grid container spacing={3}>
          {/* column */}
          <Grid item xs={12}>
            <TechnicalWelcomeCard />
          </Grid>

          {/* column */}

          <Grid item xs={12} sm={4}>
            <EnergyDeliveredTechnicalOverview />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AverageAvailabilityTechnicalOverview />
          </Grid>
          <Grid item xs={12} sm={4}>
            <AverageDurationOfInterruptionTO />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TechnicalBreakdownFinancial />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FeederInterruptionsTO />
          </Grid>
          <Grid item xs={12}>
            <LoadTrendTechnicalOverview />
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default TechnicalOverview;
