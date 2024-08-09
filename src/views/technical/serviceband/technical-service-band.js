import React from 'react';
import { Grid } from '@mui/material';
import Breadcrumb from 'src/layouts/full/shared/breadcrumb/Breadcrumb';
import PageContainer from 'src/components/container/PageContainer';
import AvailabilityTechnicalSBT from '../../../components/technical-components/service-bands-chart-cards/availability-service-bands';
import TechBreakdownTechnicalSBT from '../../../components/technical-components/service-bands-chart-cards/technical-breakdown-servicce-band';
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
    title: 'Technical Service Band',
  },
];

const TechnicalServiceBand = () => {
  return (
    <PageContainer title="Technical Service Band" description="this is Charts page">
      {/* breadcrumb */}
      <Breadcrumb title="Technical Service Band" items={BCrumb} />
      {/* end breadcrumb */}
      
      <Grid container spacing={3}>
      <Grid item xs={4}>
          <StateFilter />
        </Grid>

        <Grid item xs={12}>
          <AvailabilityTechnicalSBT />
        </Grid>
        <Grid item xs={12}>
          <TechBreakdownTechnicalSBT />
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TechnicalServiceBand;
